---
sidebar_label: data
title: data
---          

@short: specifies an array of data objects to set into the grid

@signature: data: array[];

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

@related: treegrid/configuration.md#data
treegrid/initialization.md#initializetreegrid

@relatedsample: https://snippet.dhtmlx.com/kob9385v	TreeGrid. Basic initialization