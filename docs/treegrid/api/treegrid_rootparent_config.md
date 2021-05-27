---
sidebar_label: rootParent
title: JavaScript TreeGrid - rootParent Config 
hide_title: true
description: You can explore the rootParent config of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# rootParent

@short: defines the id of the root parent

@signature: rootParent?: string;

@example:
var treegrid = new dhx.TreeGrid("treegrid", {
    rootParent: "root", /*!*/
	columns: [
		{ width: 340, id: "name", header: [{ text: "Name" }] },
		{ width: 340, id: "native", type: "string", header: [{ text: "Native name" }] },
		{ width: 260, id: "capital", type: "string", header: [{ text: "Capital" }] },
		{ width: 260, id: "currency", type: "string", header: [{ text: "Currency" }] }
	],
	data: dataset
});

@descr:

By default, the root parent takes the id of the TreeGrid container. 
If the id of the container is set to null or defined as an HTML element, the value of the root parent will be auto-generated. 

@changelog: added in v7.1
