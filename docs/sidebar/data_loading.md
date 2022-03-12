---
sidebar_label: Data loading
title: JavaScript Sidebar - Data Loading 
description: You can explore the data loading of Sidebar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Data loading

There are several simple ways of loading data into dhtmlxSidebar:

- load data from an external file
- load data from a local data source

First, you need to prepare a data set that will be loaded into Sidebar.

## Preparing data set

dhtmlxSidebar expects loaded data in the JSON format. Here is an example of an appropriate data set:

~~~js
var data = [
    {
        "id": "dashboard",
        "value": "Dashboard",
        "icon": "mdi mdi-view-dashboard"
    },
    {
        "id": "statistics",
        "value": "Statistics",
        "icon": "mdi mdi-chart-line"
    },
    {
        "id": "reports",
        "value": "Reports",
        "icon": "mdi mdi-file-chart"
    }
];
~~~

A data set consists of objects with configurations of sidebar controls. Templates for Sidebar controls in JSON format are given [below](#json-format-templates).

## Loading from a local source

You can load data to a sidebar from an array with the **parse()** method of TreeCollection. Pass [a predefined data set](#preparing-data-set) as a parameter of this method:

~~~js
sidebar.data.parse(data);
~~~

**Related sample**: [Sidebar. Basic Initialization](https://snippet.dhtmlx.com/x0qpt7pk)

## Loading from an external file

The **load** method loads the sidebar data from an external JSON file. All the data are loaded at once. The parameter of the method is the path to the JSON file.

~~~js
sidebar.data.load("[path to this file]/file.json");
~~~	

**Related sample**: [Sidebar. Init Load](https://snippet.dhtmlx.com/mq4ggjmm)
	
The component will make an AJAX call and expect the remote URL to provide valid JSON data.

Data loading is asynchronous, so you need to wrap any after-loading code into a promise:

~~~js
sidebar.data.load("/some/data").then(function(){
   // some logic here
});
~~~

## Saving and restoring state

To save the current state of a sidebar, use the **serialize()** method of Tree Collection. It converts the data of a sidebar into an array of JSON objects. 
Each JSON object contains the configuration of a separate Sidebar control.

~~~js
var state = sidebar1.data.serialize();
~~~

Then you can parse the data stored in the saved state array to a different sidebar. For example:

~~~js
// creating a new sidebar
var sidebar2 = new dhx.Sidebar(document.body);
// parsing the state of sidebar1 into sidebar2
sidebar2.data.parse(state);
~~~

## JSON format templates

This section will give you the idea of JSON format templates for separate Sidebar controls.

### Common template

~~~js
// common
[
	{id: "item_a", type: "menuItem", ...},
	{id: "item_b", type: "input", ...},
	{id: "item_c", type: "title", ...}
]
~~~

### Custom HTML template

~~~js
// custom HTML button
{
	id: "custom_html",
	type: "customHTML",
    html:"<div style='height:30px; border: 2px solid'>My HTML button</div>"
}
~~~

{{note Take a look at the full list of properties of the **customHTML** object [in the related article](sidebar/api/api_customhtml_properties.md).}}

### MenuItem template

~~~js
// menuItem
{
	type:"menuItem", 
	value:"Some",
    icon:"dxi dxi-menu-right"
}
~~~

{{note Take a look at the full list of properties of the **menuItem** object [in the related article](sidebar/api/api_menuitem_properties.md).}}

### NavItem template

~~~js
// navItem
{
    type:  "navItem", 
    value: "Some",
    icon:  "dxi-check",
    count: 10
}
~~~

{{note You can find the full list of properties of the **navItem** object [in the related article](sidebar/api/api_navitem_properties.md).}}

###  Separator template

~~~js
// separator
{
	id:	 	"sepId",		
	type:   "separator"	 	
}
~~~

{{note You can check the full list of properties of the **separator** object [in the related article](sidebar/api/api_separator_properties.md).}}

### Spacer template

~~~js
// spacer
{
	id:	 	"spacerId",	  	
	type:   "spacer"		
}
~~~

{{note You can find the full list of properties of the **spacer** object [in the related article](sidebar/api/api_spacer_properties.md).}}

### Title template

~~~js
// title
{
	id:		 	"collection",		
	type:	   	"title", 				
	value:	  	"Music",				
	tooltip:	"Current collection"	
}
~~~

{{note Take a look at the full list of properties of the **title** object [in the related article](sidebar/api/api_title_properties.md).}}
