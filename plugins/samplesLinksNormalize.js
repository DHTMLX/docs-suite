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

const updateFileData = file => {
	const fileData = fs.readFileSync(file.filePath, 'utf-8');
	let newData = fileData.replace(/^@relatedsample: (https:\/\/\w+.\w+.\w+\/\w+)\s(.*)$/gm, i => {
		const signature = /^@relatedsample: (https:\/\/\w+.\w+.\w+\/\w+)\s(.*)$/gm.exec(fileData);
		return signature ? `**Related sample**: [${signature[2]}](${signature[1]})` : i;
	});
	newData = newData.replace(/^{{\w+\s+(https:\/\/\w+.\w+.\w+\/\w+)\s(.*)}}$/gm, i => {
		const signature = /^{{\w+\s+(https:\/\/\w+.\w+.\w+\/\w+)\s(.*)}}$/gm.exec(fileData);
		return signature ? `**Related sample**: [${signature[2]}](${signature[1]})` : i;
	});
	fs.writeFileSync(file.filePath, newData, 'utf-8');
};

getFiles("../docs/").forEach(updateFileData);
