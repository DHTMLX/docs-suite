---
sidebar_label: data
title: JavaScript Sidebar - data Config 
description: You can explore the data config of Sidebar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# data

@short: specifies an array of data objects to set into Sidebar

@signature: {'data?: any[] | TreeCollection<ISidebarElement>;'}

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

@descr:

**Related samples**:
- [Sidebar. Config Data](https://snippet.dhtmlx.com/y8y7iw42)
- [Sidebar. Init With External Data](https://snippet.dhtmlx.com/f4wo06yo)

[comment]: # (@related: sidebar/data_loading.md)
