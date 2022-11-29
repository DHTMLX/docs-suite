---
sidebar_label: parse()
title: JavaScript DataCollection - parse Method 
description: You can explore the parse method of DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# parse()

@short: loads data from a local data source

@signature: {'parse(data: T[] | string, driver?: IDataDriver | DataDriver): void;'}

@params:
- `data: array | string` - the data to load
- `driver: object | string` - optional, DataDriver or type of data ("json", "csv", "xml"), "json" by default

@example:
const data = [
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

const diagram = new dhx.Diagram("diagram_container", { type: "org" });

// loads data into the diagram from the JSON array
diagram.data.parse(data);

@descr:

**Related sample**: [Data. Parse](https://snippet.dhtmlx.com/0zrxtmvi)
