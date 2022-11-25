---
sidebar_label: Data loading
title: JavaScript Ribbon - Data Loading 
description: You can explore the data loading of Ribbon in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Data loading

There are several simple ways of loading data into dhtmlxRibbon:

- on initialization of Ribbon
- after initialization of Ribbon

First, you need to prepare a data set that will be loaded into Ribbon.

## Preparing data set

dhtmlxRibbon expects loaded data in the JSON format. Here is an example of an appropriate data set:

~~~js
const data = [
	{
    	type: "block",
    	items: [
    		{
    			value: "New",
    			icon: "dxi dxi-file-outline",
                size: "small"               
            }
    	]
    },
    {
    	type: "block",
    	direction: "col",
    	items: [
    		{
    			value: "Add",
    			icon: "dxi dxi-plus",
    			size: "small"
    		},
    		{
            	value: "Remove",
            	icon: "dxi dxi-delete",
            	size: "small"
    		}
    	]
    }
];
~~~

A data set consists of objects with configurations of Ribbon controls. Templates for Ribbon controls in JSON format are given [below](#json-format-templates).

## Loading data on initialization

You can load a [predefined data set](#preparing-data-set) into Ribbon on the initialization stage. Use the [data](ribbon/api/ribbon_data_config.md) configuration property, as in:

~~~js
const ribbon = new dhx.Ribbon("ribbon_container", {
    css: "dhx_widget--bordered dhx_widget--bg_white", 
    data: data
});
~~~

**Related sample**: [Ribbon. Initialization with config.data](https://snippet.dhtmlx.com/lek4v9m7)

## Loading data after initialization

There are two ways to load data into Ribbon after its initialization:

- [from a local data source](#loading-from-a-local-source)
- [from an external file](#loading-from-an-external-file)

### Loading from a local source

You can load data to a ribbon from an array with the **parse()** method of TreeCollection. Pass [a predefined data set](#preparing-data-set) as a parameter of this method:

~~~js
ribbon.data.parse(data);
~~~

**Related sample**: [Ribbon. Initialization with data.parse()](https://snippet.dhtmlx.com/zz5ijqy9)

### Loading from an external file

The **load** method loads the ribbon data from an external JSON file. All the data are loaded at once. The parameter of the method is the path to the JSON file.

~~~js
ribbon.data.load("[path to this file]/file.json");
~~~	

**Related sample**: [Ribbon. Initialization with data.load()](https://snippet.dhtmlx.com/1gd5tbcf)

The component will make an AJAX call and expect the remote URL to provide valid JSON data.

Data loading is asynchronous, so you need to wrap any after-loading code into a promise:

~~~js
ribbon.data.load("/some/data").then(function(){
   // some logic here
});
~~~

## Saving and restoring state

To save the current state of a ribbon, use the **serialize()** method of Tree Collection. It converts the data of a ribbon into an array of JSON objects. 
Each JSON object contains the configuration of a separate Ribbon control.

~~~js
const state = ribbon1.data.serialize();
~~~

Then you can parse the data stored in the saved state array to a different ribbon. For example:

~~~js
// creating a new ribbon
const ribbon2 = new dhx.Ribbon("ribbon_container2");
// parsing the state of ribbon1 into ribbon2
ribbon2.data.parse(state);
~~~

## JSON format templates

This section will give you the idea of JSON format templates for separate Ribbon controls.

### Common template

~~~js
// common
[
	{id: "item_a", type: "button", ...},
	{id: "item_b", type: "input", ...},
	{id: "item_c", type: "title", ...}
]
~~~

**Related sample**: [Ribbon. Initialization with config.data](https://snippet.dhtmlx.com/lek4v9m7)

### Block template

~~~js
// block
{
	type: "block",
   	title: "Action",        
   	items: [
    	{ id: "copy", icon: "mdi mdi-content-copy", value: "Copy" },
     	{ id: "cut", icon: "mdi mdi-content-cut", value: "Cut" }
   	]
}
~~~

{{note View the full list of properties of the **block** object in the [related article](ribbon/api/api_block_properties.md). }}

### Button template

~~~js 
// button
{
	id:	"add",		  		
	type: "button",	   		
	icon: "dxi-plus",	 		
	value: "Add",		  		
	count: 11,			 				   		
	tooltip: "Add a new user"	
}
~~~

{{note View the full list of properties of the **button** object in the [related article](ribbon/api/api_button_properties.md). }}

### Custom HTML template

~~~js
// custom HTML
{
	id: "custom_html",
	type: "customHTML",
    html:"<div style='height:30px; border: 2px solid'>My HTML button</div>"
}
~~~

{{note You can view the full list of properties of the **customHTML** object in the [related article](ribbon/api/api_customhtml_properties.md). }}

### ImageButton template

~~~js
// imageButton
{
	id:		  "user",				
	type:	  "imageButton",		
	src:	  "../img/avatar.png"				
}
~~~

{{note You can find the full list of properties of the **imageButton** object in the [related article](ribbon/api/api_imagebutton_properties.md). }}

### Input template

~~~js 
// input
{
	id:	"lookup",					  
	type: "input", 					  
	value: "",						 
	placeholder: "Type in to search...",	  
	width: 100,						  
	label: "Search"
}
~~~

{{note View the full list of properties of the **input** object in the [related article](ribbon/api/api_input_properties.md). }}

### NavItem template

~~~js
// navItem
{
    type:"navItem", value:"Some",
    icon:"dxi-check"
}
~~~

{{note Check the full list of properties of the **navItem** object in the [related article](ribbon/api/api_navitem_properties.md). }}

### SelectButton template

~~~js
// selectButton
{
	id:"select",
    type:"selectButton",
    icon:"dxi-some",
    items:[]
}
~~~

{{note You will find the full list of properties of the **selectButton** object in the [related article](ribbon/api/api_selectbutton_properties.md). }}

###  Separator template

~~~js
// separator
{
	id:	 	"sepId",		
	type:   "separator"	 	
}
~~~

{{note You can find the full list of properties of the **separator** object in the [related article](ribbon/api/api_separator_properties.md). }}

### Spacer template

~~~js
// spacer
{
	id:	 	"spacerId",	  	
	type:   "spacer"		
}
~~~

{{note View the full list of properties of the **spacer** object in the [related article](ribbon/api/api_spacer_properties.md). }}

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

{{note Check the full list of properties of the **title** object in the [related article](ribbon/api/api_title_properties.md). }}
