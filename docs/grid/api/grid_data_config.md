---
sidebar_label: data
title: data
---          

@short: specifies an array of data objects to set into the grid

@signature: data: array;

@example: 
var dataset = [
	{
		"id": 0,
		"a": 1,
		"b": "Linwood Long long long",
		"c": "Petersen",
		"d": "Dahlgreen Place"
	},
	{
		"id": 1,
		"a": 2,
		"b": "Edenburg",
		"c": "Agnes",
		"d": "Gem Street"
	},
    // more columns
];


var grid = new dhx.Grid("grid_container", {
	columns: [// columns config],
	data: dataset
});


@template:	api_config
@descr: 

@related: grid/initialization.md#initializegrid
grid/configuration.md#data

@relatedsample: 
https://snippet.dhtmlx.com/svkb27d5	Grid. External Data Loading
https://snippet.dhtmlx.com/qrw1x949	Grid. External Datacollection