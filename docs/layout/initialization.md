---
sidebar_label: Initialization
title: JavaScript Layout - Initialization 
description: You can explore the initialization of Layout in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Initialization

:::info
[Download the DHTMLX Layout package](https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml) as a part of the DHTMLX Suite library
:::

To add DHTMLX Layout into an application, you need to take the following simple steps:

- [Include source files](#include-source-files)
- [Create a container](#create-a-container)
- [Define Layout structure](#define-layout-structure)
- [Initialize Layout](#initialize-layout) with the object constructor

~~~html
<!DOCTYPE html>
<html>
    <head>
        <title>How to start with DHTMLX Layout</title>         
        <script type="text/javascript" src="../../codebase/suite.js"></script>
        <link rel="stylesheet" href="../../codebase/suite.css">
    </head>
    <body>
        <div id="layout_container"></div>
        <script>
            // creating Layout
            const layout = new dhx.Layout("layout_container", {
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

## Include source files

Unpack the downloaded package into a folder of your project.

After that, create an HTML file and place full paths to JS and CSS files of the DHTMLX Suite library into the header of the file. The files are:

- *suite.js*
- *suite.css*

~~~html
<script type="text/javascript" src="../../codebase/suite.js"></script>
<link rel="stylesheet" href="../../codebase/suite.css">
~~~

## Create a container

Add a container for the Layout and give it an id, e.g. "layout_container":

~~~html
<div id="layout_container"></div>
~~~

## Define Layout structure

Layout consists of a set of cells arranged either into rows or into columns. The structure of a layout can be rather complex, since there can also be nested rows and columns.

For example, you can create a three-level layout structure:

~~~js
const cols = [
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

## Initialize Layout

Initialize Layout with the `dhx.Layout` object constructor. The constructor takes two parameters:

- the HTML object on the page that serves as the layout container
- a configuration object which contains the structure of Layout 

~~~js
const layout = new dhx.Layout("layout_container", {cols});
~~~

### Configuration properties

#### Layout object

The properties of the configuration object of Layout allow you to define the structure of Layout.

See the list of Layout properties [here](layout/api/api_overview.md#layout-properties).

#### Cell object

There is also a set of properties you can specify for a Layout cell to configure it according to your needs. 

You will find the detailed information on configuration options of the cell object in the [Layout API overview](layout/api/api_overview.md#cell-properties) article.

## Example

<iframe src="https://snippet.dhtmlx.com/ls3cbcys?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>
