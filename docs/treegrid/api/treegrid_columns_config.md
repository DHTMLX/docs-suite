---
sidebar_label: columns
title: JavaScript TreeGrid - columns Config 
description: You can explore the columns config of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# columns

@short: Required. Specifies the configuration of grid columns

@signature: {'columns: ICol[];'}

@example:
const treegrid = new dhx.TreeGrid("treegrid_container", {
	columns: [
		{ width: 100, id: "a", header: [{ text: "#" }] },
		{ width: 100, id: "b", header: [{ text: "Title" }] },
		{ width: 200, id: "c", header: [{ text: "Name" }] },
		{ width: 200, id: "d", header: [{ text: "Address" }] }
	],
	data: dataset
});

@descr:

**Related sample**: [TreeGrid. Initialization with config.data](https://snippet.dhtmlx.com/kob9385v)

Each column object may contain a set of properties. You will find the full list of the configuration properties of a TreeGrid column [here](treegrid/api/api_treegridcolumn_properties.md).

[comment]: # (@related: treegrid/configuration.md#columns treegrid/initialization.md#initialize-treegrid treegrid/customization.md)
