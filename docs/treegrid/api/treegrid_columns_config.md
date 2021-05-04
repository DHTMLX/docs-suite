---
sidebar_label: columns
title: columns
---          

@short: specifies the configuration of grid columns

@signature: {'columns?: ICol[];'}

@example: 
var grid = new dhx.Grid("grid_container", {
	columns: [
		{ width: 100, id: "a", header: [{ text: "#" }] },
		{ width: 100, id: "b", header: [{ text: "Title" }] },
		{ width: 200, id: "c", header: [{ text: "Name" }] },
		{ width: 200, id: "d", header: [{ text: "Address" }] }
	],
	data: dataset
});

@template:	api_config
@descr: 

#### Details:
Each column object may contain a set of properties. You will find the full list of the configuration properties of a TreeGrid column [here](treegrid/api/api_treegridcolumn_properties.md).

@related: treegrid/configuration.md#columns
treegrid/initialization.md#initialize-treegrid
treegrid/customization.md

**Related sample**: [TreeGrid. Basic initialization](https://snippet.dhtmlx.com/kob9385v)

