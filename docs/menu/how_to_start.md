---
sidebar_label: Initialization
title: JavaScript Menu - Initialization 
description: You can explore the initialization of Menu in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Initialization

To add dhtmlxMenu into an application, you need to take the following simple steps:

- [Download the Menu package](https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml) and unpack it into a folder of your project
- [Include source files](#include-source-files)
- [Create a container](#create-a-container)
- [Initialize Menu](#initialize-menu) with the object constructor
- [Load data into Menu](#load-data-into-menu)

~~~html
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with dhtmlxMenu</title>         
        <script type="text/javascript" src="../../codebase/suite.js"></script>
        <link rel="stylesheet" href="../../codebase/suite.css">
    </head>
    <body>
        <div id="menu_container"></div>
        <script>
            // creating dhtmlxMenu
            var menu = new dhx.Menu("menu_container");
        </script>
    </body>
</html>
~~~

**Related sample**: [Menu. Basic Menu Initialization](https://snippet.dhtmlx.com/cg62qa9v)

## Include source files

Create an HTML file and place full paths to JS and CSS files of the dhtmlxSuite library into the header of the file. The files are:

- *suite.js*
- *suite.css*

~~~html
<script type="text/javascript" src="../../codebase/suite.js"></script>
<link rel="stylesheet" href="../../codebase/suite.css">
~~~

## Create a container

Add a container for the Menu and give it an id, e.g. "menu_container":

~~~html
<div id="menu_container"></div>
~~~

## Initialize Menu

Initialize Menu with the `dhx.Menu` object constructor. The constructor takes two parameters:

- the HTML object on the page that serves as the Menu container
- an object with configuration properties. If this argument is not passed to the constructor, the settings will be default

~~~js
var menu = new dhx.Menu("menu_container");
~~~

### Configuration properties

You can find the full list of Menu configuration properties in the [Menu API overview](menu/api/api_overview.md#properties) article.

## Load data into Menu

There are two handy ways of loading data, i.e. a set of controls into Menu:

- from an external file with the help of the **load()** method of tree collection:

~~~js
var menu = new dhx.Menu("menu_container");
menu.data.load("../common/dataset.json");
~~~

- from a local source using the **parse()** method of tree collection:

~~~js
var data = [
	{
    	value: "File", 
		items: [
        	{
       			value: "New File",
        	},
        	{
        		value: "New window",
        	},
        	{
        		value: "Open File",
        	},
        	{
        		value: "Save File",
        	}
        ]
	},
	{
    	value: "Edit", 					
        items: [
			{
				value: "Undo"
			},
			{
				value:  "Redo"
			},
			{
				value: "Cut"
			},
			{
				value: "Copy"
			}
		 ]
	}
];

var menu = new dhx.Menu("menu_container");
menu.data.parse(data);
~~~

**Related sample**: [Menu. Basic Menu Initialization](https://snippet.dhtmlx.com/cg62qa9v)

Detailed information on loading data into Menu is given in the article [](menu/data_loading.md).
