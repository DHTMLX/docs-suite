#!/usr/bin/ev node
const http = require("http");
const fs = require("fs");

const host = "cdn.dhtmlx.com";

const buildFileObject = (currentPath, fileName) => {
	const pathRegex = /docs\W+(.*)\/api\/(.*)\./g.exec(currentPath);
	if (pathRegex && pathRegex.length) {
		let url = pathRegex[1].toLowerCase();
		switch (url) {
			case "ajax":
			case "data_collection":
			case "data_proxy":
			case "tree_collection":
				url = "data/sources/types.d.ts";
				break;
			case "css_manager":
				url = "common/CssManager.d.ts";
				break;
			default:
				url += "/sources/types.d.ts";
				break;
		}
		const regex = /(.*)\_(.*)\_(.*)\./g.exec(fileName);
		if (regex && regex.length) {
			const name = regex[2].toLowerCase();
			const type = regex[3].toLowerCase();
			return { filePath: currentPath, url, name, type };
		}
	}
};

const getFiles = (dir, files_) => {
	files_ = files_ || [];
	const files = fs.readdirSync(dir);
	for (const i in files) {
		const currentPath = dir + "/" + files[i];
		if (fs.statSync(currentPath).isDirectory()) {
			getFiles(currentPath, files_);
		} else if ((files[i].includes(".md") || files[i].includes(".mdx") || !files[i].includes(".")) && currentPath.includes("/api/")) {
			const fileObject = buildFileObject(currentPath, files[i]);
			fileObject && files_.push(fileObject);
		}
	}
	return files_;
};

const getRemoteFileData = path => {
	return new Promise((resolve, reject) => {
		const request = http.request({ host, path }, res => {
			let data = '';
			res.on("data", chunk => data += chunk);
			res.on("end", () => resolve(data));
		});

		request.on("error", e => reject(e.message));
		request.end();
	})
};

const getSignatureData = (fileData, signature, url, data, fileName) => {
	const fileIncludes = fileData.includes("@signature");
	if (signature) {
		return fileIncludes ?
			fileData.replace(/@signature:.*/g, `@signature: {'${signature}'}`) :
			fileData.replace(/@short:.*/g, str => `${str}\n\n@signature: {'${signature}'}`);
	} else {
		if (data.toLowerCase().includes(fileName.toLowerCase())) {
			return fileIncludes ?
				fileData.replace(/@signature:.*/g, `@signature: the object is described in another directory`) :
				fileData.replace(/@short:.*/g, str => `${str}\n\n@signature: the object is described in another directory`);
		} else {
			return fileIncludes ?
				fileData.replace(/@signature:.*/g, `@signature: todo, not found [here](https://${host}/suite/pro/edge/types/ts-${url})`) :
				fileData.replace(/@short:.*/g, str => `${str}\n\n@signature: todo, not found [here](https://${host}/suite/pro/edge/types/ts-${url})`);
		}
	}
};

let i = 0;

const notFoundLog = file => {
	console.log("\x1b[31m%s\x1b[0m", "\nNO MATCH:");
	console.log('\x1b[36m%s\x1b[0m', "Widget: ", file.url.split("/")[0]);
	console.log('\x1b[36m%s\x1b[0m', "Name: ", file.name);
	console.log('\x1b[36m%s\x1b[0m', "Type: ", file.type);
	console.log("\x1b[31m%s\x1b[0m", `Total: ${i}`);
};

const normalizeData = data => {
	const newData = [];
	for (let key = 0, brackets = 0; key <= data.length; key++) {
		const symbol = data[key];
		if (symbol === "{") brackets += 1;
		if (symbol === "}") brackets -= 1;
		newData.push(symbol === "\n" && brackets === 2 ? "" : symbol);
	}

	return newData.join("").replace(/(\ )+/gm, " ");
}

const updateFileData = file => {
	getRemoteFileData(`/suite/pro/edge/types/ts-${file.url}`).then(data => {
		data = normalizeData(data);
		let signature;
		let regex;
		switch (file.type) {
			case "config":
				regex = new RegExp(`^\\s+${file.name}(:|\\?:).*;$`, "mi");
				break;
			case "method":
				regex = new RegExp(`^\\s+((${file.name}|${file.name}<.*>)\(.*\): .*);$`, "mi");
				break;
			case "event":
				regex = new RegExp(`^\\s+\\[.*Events\\.(${file.name})\\]: (.*;)$`, "mi");
				break;
		}

		const match = data.match(regex);
		if (match && match.length) {
			switch (file.type) {
				case "method":
				case "config":
					signature = match[0].trim();
					break;
				case "event":
					signature = `${match[1]}: ${match[2]}`.trim();
					break;
			}
		} else {
			const widget = file.url.split("/")[0];
			switch (widget) {
				case "treegrid":
					return updateFileData({ ...file, url: "grid/sources/types.d.ts" });
				case "tabbar":
					return updateFileData({ ...file, url: "layout/sources/types.d.ts" });
				case "form":
					return updateFileData({ ...file, url: "layout/sources/types.d.ts" });
				case "dataview":
					return updateFileData({ ...file, url: "list/sources/types.d.ts" })
			}
		}

		if (!signature) {
			i += 1;
			notFoundLog(file);
		}

		const fileData = fs.readFileSync(file.filePath, 'utf-8');
		const newData = getSignatureData(fileData, signature, file.url, data, file.name);
		fs.writeFileSync(file.filePath, newData, 'utf-8');
	}).catch(e => console.log("\x1b[31m%s\x1b[0m", e));
};

getFiles("../docs/").forEach(file => {
	updateFileData(file);
});
