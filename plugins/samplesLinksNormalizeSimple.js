#!/usr/bin/ev node
const fs = require("fs");

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
		} else if ((files[i].includes(".md") || files[i].includes(".mdx") || !files[i].includes("."))) {
			const fileObject = buildFileObject(currentPath, files[i]);
			fileObject && files_.push(fileObject);
		}
	}
	return files_;
};

const normalizeLink = (fileData, count, length) => {
	fileData = fileData.replace(/^(https:\/\/snippet.dhtmlx.com\/\w+\s+\w+.)\ (.+)$/m, i => {
		const signature = /^(https:\/\/snippet.dhtmlx.com\/\w+)\s+(\w+. .+)$/gm.exec(fileData);
		return signature ? `${count === 0 ? `**Related sample${length > 1 ? "s" : ""}**:\n` : ""}- [${signature[2]}](${signature[1]})` : i;
	});
	return fileData;
};

const updateFileData = file => {
	let fileData = fs.readFileSync(file.filePath, 'utf-8');
	const signature = fileData.match(/^(https:\/\/snippet.dhtmlx.com\/\w+\s+\w+.)\ (.+)$/gm);
	if (signature) {
		signature.forEach((_, i, array) => {
			fileData = normalizeLink(fileData, i, array.length);
		});
		fs.writeFileSync(file.filePath, fileData, 'utf-8');
	}
};

getFiles("../docs/").forEach(updateFileData);
