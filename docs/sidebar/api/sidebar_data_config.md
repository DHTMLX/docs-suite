---
sidebar_label: data
title: data
---          

@short: specifies an array of data objects to set into Sidebar

@signature: data?: array[]

@example: 
var sidebar = dhx.Sidebar("sidebar_container", {
    data: [
    	{
			"id": "dashboard",
            "value": "Dashboard",
            "icon": "mdi mdi-view-dashboard"
		},
		{
        	"id": "statistics",
        	"value": "Statistics",
        	"icon": "mdi mdi-chart-line"
		}
	]
});


@template:	api_config
@descr: 

@relatedsample: 
https://snippet.dhtmlx.com/y8y7iw42	Sidebar. Config Data
https://snippet.dhtmlx.com/f4wo06yo	Sidebar. Init With External Data

@related: sidebar/data_loading.md

