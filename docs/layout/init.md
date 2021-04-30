---
sidebar_label: Initialization
title: Initialization
---          

To add dhtmlxLayout into an application, you need to take the following simple steps:

- [Download the Layout package](https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml) and unpack it into a folder of your project
- [Include source files](#include-source-files)
- [Create a container](#create-a-container)
- [Define Layout structure](#definelayoutstructure)
- [Initialize Layout](#initialize-layout) with the object constructor


~~~html
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with dhtmlxLayout</title>         
        <script type="text/javascript" src="../../codebase/suite.js"></script>
        <link rel="stylesheet" href="../../codebase/suite.css">
    </head>
    <body>
        <div id="layout_container"></div>
        <script>
            // creating dhtmlxLayout
            var layout = new dhx.Layout("layout_container", {
    			cols: [
        			{ header: "Column 1" },
        			{ header: "Column 2", cols: [
                		{ header:"Left cols"},
                		{ header:"Center cols",cols: [
                        	{ header: "Sub Block Header cols 1" },
                        	{ header: "Sub Block Header cols 2" },
                        	{ header: "Sub Block Header cols 3" }]
						}]
					}
    			]
			});
        </script>
    </body>
</html>
~~~

{{editor	https://snippet.dhtmlx.com/ls3cbcys	Layout. Basic Initialization}}

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

Add a container for the Layout and give it an id, e.g. "layout_container":

~~~html
<div id="layout_container"></div>
~~~

Define Layout structure
------------------

Layout consists of a set of cells arranged either into rows or into columns. The structure of a layout can be rather complex, since there can also be nested rows and columns.

For example, you can create a three-level layout structure:

~~~js
var	cols = [
	{
		header: "Sub Block Header row"
	},
	{
		header: "Sub Block Header row",
		cols: [
			{
				header:"Left cols"
			},
			{
				header:"Center cols",
				cols: [
					{ header: "Sub Block Header cols 1" },
					{ header: "Sub Block Header cols 2" },
					{ header: "Sub Block Header cols 3" }
				]
			},
			{
				header:"Right"
			}
		]
	},
	{ header: "Sub Block Header" },
	{ header: "Sub Block Header" }
]
~~~

Initialize Layout
---------------------

Initialize Layout with the `dhx.Layout` object constructor. The constructor takes two parameters:

- the HTML object on the page that serves as the layout container
- a configuration object which contains the structure of Layout 

~~~js
var layout = new dhx.Layout("layout_container", {cols});
~~~


### Configuration properties

#### Layout object

The properties of the configuration object of Layout allow you to define the structure of Layout.

See the list of Layout properties [here](layout/api/api_overview.md#layout-properties).

#### Cell object

There is also a set of properties you can specify for a Layout cell to configure it according to your needs. 

You will find the detailed information on configuration options of the cell object in the [Layout API overview](layout/api/api_overview.md#cell-properties) article.




