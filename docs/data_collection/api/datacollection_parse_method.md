---
sidebar_label: parse()
title: JavaScript DataCollection - parse Method 
hide_title: true
description: You can explore the parse method of DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# parse()

@short: loads data from a local data source

@signature: {'parse(data: T[]): void;'}

@params:

- `data: any` - the data to load

@example:
var data = [
	{
		id: "1",
		text: "Chairman & CEO",
		title: "Henry Bennett",
		img: "../common/img/avatar-1.png"
	},
	{
		id: "2",
		text: "Manager",
		title: "Mildred Kim",
		img: "../common/img/avatar-2.png"
	},
	{
		id: "3",
		text: "Technical Director",
		title: "Jerry Wagner",
		img: "../common/img/avatar-3.png"
	},
	{ id: "1-2", from: "1", to: "2", type: "line" },
	{ id: "1-3", from: "1", to: "3", type: "line" }
];

var diagram = new dhx.Diagram("diagram_container", { type: "org" });
diagram.data.parse(data);

@descr:

**Related sample**: [Data. Parse](https://snippet.dhtmlx.com/0zrxtmvi)
