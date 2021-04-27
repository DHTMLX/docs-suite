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

const normalizeLink = (fileData, regex, count) => fileData.replace(regex, i => {
	const signature = regex.exec(fileData);
	const title = count === 0 && fileData.indexOf("**Related samples**") === -1 ? `**Related samples**:\n` : "";
	return signature ? `${title}- [${signature[2]}](${signature[1]})` : i;
});

const updateFileData = file => {
	let fileData = fs.readFileSync(file.filePath, 'utf-8');

	const f_regex = new RegExp(/@relatedsample:\s+(https:\/\/\w+.\w+.\w+\/\w+)\s(.*)/gm);
	const f_signature = fileData.match(f_regex);
	f_signature && f_signature.forEach((_, i) => fileData = normalizeLink(fileData, f_regex, i));

	const s_regex = new RegExp(/^{{\w+\s+(https:\/\/\w+.\w+.\w+\/\w+)\s(.*)}}$/gm);
	const s_signature = fileData.match(s_regex);
	s_signature && s_signature.forEach((_, i) => fileData = normalizeLink(fileData, s_regex, i));

	const t_regex = new RegExp(/^(https:\/\/snippet.dhtmlx.com\/\w+)\s+(\w+. .+)$/gm);
	const t_signature = fileData.match(t_regex);
	t_signature && t_signature.forEach((_, i) => fileData = normalizeLink(fileData, t_regex, i));

	const hasTitle = /\*\*Related samples\*\*:\n((- \[.+\]\(.+\)(\s+|)+)+)/gm.exec(fileData);
	const linksLength = hasTitle && hasTitle[1].match(/- \[.+\]\(.+\)(\s+|)/gm).length;
	fileData = linksLength ? fileData.replace(/\*\*Related samples\*\*/, () => {
		return linksLength > 1 ? "**Related samples**" : "**Related sample**";
	}) : fileData;

	fs.writeFileSync(file.filePath, fileData, 'utf-8');
};

getFiles("../docs/").forEach(updateFileData);
