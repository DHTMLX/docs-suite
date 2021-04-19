---
sidebar_label: columns
title: columns
description: description
---          



@short: specifies the configuration of grid columns



@signature: columns?: ICol[];

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


#### Details:
Each column object may contain a set of properties. You will find the full list of the configuration properties of a Grid column [here](grid/api/api_gridcolumn_properties.md).



@related: grid/initialization.md#initializegrid
grid/configuration.md#columns

grid/customization.md

