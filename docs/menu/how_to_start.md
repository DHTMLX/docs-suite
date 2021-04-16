---
sidebar_label: Initialization
title: Initialization
---          

To add dhtmlxMenu into an application, you need to take the following simple steps:

- [Download the Menu package](https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml) and unpack it into a folder of your project
- [Include source files](#includesourcefiles)
- [Create a container](#createacontainer)
- [Initialize Menu](#initializemenu) with the object constructor
- [Load data into Menu](#loaddataintomenu)


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

{{editor	https://snippet.dhtmlx.com/cg62qa9v	Menu. Basic Menu Initialization}}

Include source files
--------------------

Create an HTML file and place full paths to JS and CSS files of the dhtmlxSuite library into the header of the file. The files are:

- *suite.js*
- *suite.css*

~~~html
<script type="text/javascript" src="../../codebase/suite.js"></script>
<link rel="stylesheet" href="../../codebase/suite.css">
~~~

Create a container
-------------------

Add a container for the Menu and give it an id, e.g. "menu_container":

~~~html
<div id="menu_container"></div>
~~~


Initialize Menu
----------------

Initialize Menu with the `dhx.Menu` object constructor. The constructor takes two parameters:

- the HTML object on the page that serves as the Menu container
- an object with configuration properties. If this argument is not passed to the constructor, the settings will be default

~~~js
var menu = new dhx.Menu("menu_container");
~~~

### Configuration properties

todotw скорее всего можно просто сослаться на API
{{api

- menu/api/menu_css_config.md - the name(s) of CSS class(es) used for Menu
- menu/api/menu_data_config.md - specifies an array of data objects to set into Menu
- menu/api/menu_menucss_config.md - adds style classes to all containers of Menu controls with nested items
- menu/api/menu_navigationtype_config.md - sets the action that opens menu

}}

Load data into Menu
------------------

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

{{editor	https://snippet.dhtmlx.com/cg62qa9v	Menu. Basic Menu Initialization}}

Detailed information on loading data into Menu is given in the article [](menu/from_script.md).

