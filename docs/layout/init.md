---
sidebar_label: Initialization
title: Initialization
---          

To add dhtmlxLayout into an application, you need to take the following simple steps:

- [Download the Layout package](https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml) and unpack it into a folder of your project
- [Include source files](#includesourcefiles)
- [Create a container](#createacontainer)
- [Define Layout structure](#definelayoutstructure)
- [Initialize Layout](#initializelayout) with the object constructor


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
- a configuration object which (besides config options listed below) contains the structure of Layout 

~~~js
var layout = new dhx.Layout("layout_container", {cols});
~~~


### Configuration properties:

### Cell object

todotw скорее всего можно просто сослаться на API
{{api

- layout/api/layout_align_config.md - sets the alignment of content inside a cell
- layout/api/layout_collapsable_config.md  - defines whether a cell can be collapsed 
- layout/api/layout_collapsed_config.md -  defines whether a cell is collapsed 
- layout/api/layout_css_config.md - the name of a CSS class applied to a cell
- layout/api/layout_gravity_config.md - sets the "weight" of a cell in relation to other cells placed in the same row and within one parent
- layout/api/layout_header_config.md - the text of the header of a cell
- layout/api/layout_headerheight_config.md - sets the height of a Layout cell
- layout/api/layout_headericon_config.md - an <a href = "https://docs.dhtmlx.com/suite/helpers__icon.html">icon</a> used in the header of a cell
- layout/api/layout_headerimage_config.md - an image used in the header of a cell
- layout/api/layout_height_config.md - sets the height of a cell
- layout/api/layout_hidden_config.md - defines whether a cell is hidden
- layout/api/layout_html_config.md - sets HTML content for a cell
- layout/api/layout_id_config.md - the id of a cell
- layout/api/layout_maxheight_config.md - the maximal height to be set for a cell
- layout/api/layout_maxwidth_config.md - the maximal width to be set for a cell
- layout/api/layout_minheight_config.md - the minimal height to be set for a cell
- layout/api/layout_minwidth_config.md - the minimal width to be set for a cell
- layout/api/layout_on_config.md - adds handlers to DOM events of a cell
- layout/api/layout_padding_config.md - defines the distance between a cell and the border of layout 
- layout/api/layout_resizable_config.md - defines whether a cell can be resized
- layout/api/layout_type_config.md - defines the type of borders between cells inside a layout
- layout/api/layout_width_config.md - sets the width of a cell

}}

### Layout object

todotw скорее всего можно просто сослаться на API
{{api

- layout/api/layout_rows_config.md - an array of rows objects
- layout/api/layout_cols_config.md - an array of columns objects

}}



