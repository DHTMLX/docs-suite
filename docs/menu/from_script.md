---
sidebar_label: Data Loading
title: JavaScript Menu - Data Loading 
description: You can explore the data loading of Menu in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Data Loading

There are several simple ways of loading options into dhtmlxMenu:

- load data from an external file
- load data from a local data source

First, you need to prepare a data set that will be loaded into Menu.

## Preparing data set

dhtmlxMenu expects loaded data in the JSON format. Here is an example of an appropriate data set:

~~~js
var data = [
	{ value: "File", 
		items: [
        	{
        		value: "New File",
        		icon: "dxi dxi-file-outline",
        	},						
        	{
        		value: "Remove File",
        		icon: "dxi dxi-delete",
        	}        
        ]
	},
    {
    	type: "separator"
    },
	{ value: "Edit",
		items: [
			{
				value: "Undo",
				icon: "dxi dxi-undo",
			},
			{
				value:  "Redo",
				icon: "dxi dxi-redo",
			}
        ]
    },
    {
    	type: "spacer"
    }
];
~~~

A data set consists of objects with configurations of menu controls. Templates for Menu controls in JSON format are given [below](#json-format-templates).

## Loading from a local source

You can load data to a menu from an array with the **parse()** method of TreeCollection. Pass [a predefined data set](#preparing-data-set) as a parameter of this method:

~~~js
menu.data.parse(data);
~~~

**Related sample**: [Menu. Basic Initialization](https://snippet.dhtmlx.com/cg62qa9v)

## Loading from an external file

The **load** method of Tree Collection loads menu data from an external JSON file. All the data are loaded at once. The parameter of the method is the path to the JSON file.

~~~js
menu.data.load("[path to this file]/file.json");
~~~	

**Related sample**: [Menu. Basic Initialization](https://snippet.dhtmlx.com/cg62qa9v)

The component will make an AJAX call and expect the remote URL to provide valid JSON data.

Data loading is asynchronous, so you need to wrap any after-loading code into a promise:

~~~js
menu.data.load("/some/data").then(function(){
   // some logic here
});
~~~

## JSON format templates

This section will give you the idea of JSON format templates for separate Menu controls.

### MenuItem template

~~~js
// menuItem
{
	id:		 	"print",			 
	type:	   	"menuItem",			 
	value:	  	"Print",			 
	icon:	   	"dxi-printer",		
	hotkey:	 	"Alt+P",			 	
	items:[						
		{
			type:   "menuItem",
			value:  "Print"
		},
		{
			type:   "menuItem",
			value:  "Preview and print",
			icon:	"dxi-magnify"
		}
	]
}
~~~

{{note You can find the full list of properties of the **menuItem** object [here](menu/api/api_menuitem_properties.md).}}

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

{{note You will find the full list of properties of the **navItem** object [here](menu/api/api_navitem_properties.md).}}

### Custom HTML template

~~~js
// customHTML
{
    id: "custom",
	parent: "edit",
    type: "customHTML",
	html: "<img src='../logo.svg' alt=''/>",
	css: "custom-image"
}
~~~

{{note You will find the full list of properties of the **customHTML** object [here](menu/api/api_customhtml_properties.md).}}

### Separator template

You can add separators that will draw horizontal lines between menu options or vertical lines between menu items. 

~~~js 
// separator
{
    id:   "s_id",        
    type: "separator"   
}
~~~

{{note You will find the full list of properties of the **separator** object [here](menu/api/api_separator_properties.md).}}

### Spacer template

~~~js
// spacer
{
	id:	 	"spacerId",	  	
	type:   "spacer"		
}
~~~

{{note You will find the full list of properties of the **spacer** object [here](menu/api/api_spacer_properties.md).}}

## Saving and restoring state

To save the current state of a toolbar, use the **serialize()** method of Tree Collection. It converts the data of a menu into an array of JSON objects. Each JSON object contains the configuration of a separate Menu item.

~~~js
var state = menu1.data.serialize();
~~~

Then you can parse the data stored in the saved state array to a different menu. For example:

~~~js
// creating a new menu
var menu2 = new dhx.Menu(document.body);
// parsing the state of menu1 into menu2
menu2.data.parse(state);
~~~
