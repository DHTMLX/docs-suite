---
sidebar_label: data
title: data
---          

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

@related: sidebar/data_loading.md

