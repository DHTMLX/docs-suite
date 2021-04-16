---
sidebar_label: Initialization
title: Initialization
---          

To initialize dhtmlxGrid on a page, you need to take the following simple steps:

- [Download the dhtmlxGrid package](https://dhtmlx.com/docs/products/dhtmlxGrid/download.shtml) and unpack it into a folder of your project
- [Include source files](#includesourcefiles)
- [Create a container](#createcontainer)
- [Initialize Grid](#initializegrid) with the object constructor
- [Load data into Grid](#loaddata)

~~~html title="index.html"
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with dhtmlxGrid</title>         
        <script type="text/javascript" src="../../codebase/grid.js"></script>
        <link rel="stylesheet" href="../../codebase/grid.css">
    </head>
    <body>
    	<div id="grid_container"></div>
        <script>
            // creating dhtmlxGrid 
            var grid = new dhx.Grid("grid_container", {
    			columns: [
        			{ width: 100, id: "a", header: [{ text: "#" }] },
        			{ width: 100, id: "b", header: [{ text: "Title" }] },
        			{ width: 200, id: "c", header: [{ text: "Name" }] },
        			{ width: 200, id: "d", header: [{ text: "Address" }] }
    			],
    			headerRowHeight: 50,
    			data: dataset
			});
        </script>
    </body>
</html>
~~~

{{editor	https://snippet.dhtmlx.com/luh8d0vv	Grid. Basic Initialization}}

Include source files
--------------------

Create an HTML file and place full paths to JS and CSS files of dhtmlxGrid into the header of the created file. The Grid component can be used standalone or as a part of the Suite library.

**If you use dhtmlxGrid standalone**, you need to include 2 files:

- *grid.js*
- *grid.css*

~~~html
<script type="text/javascript" src="../../codebase/grid.js"></script>
<link rel="stylesheet" href="../../codebase/grid.css">
~~~

**If you use dhtmlxGrid as a part of the Suite package**, you need to include JS/CSS files of the dhtmlxSuite library:

- suite.js
- suite.css

~~~html
<link type="text/css" href="../codebase/suite.css">
<script src="../codebase/suite.js" type="text/javascript"></script>
~~~

Create a container 
-----------------

Add a container for Grid and give it an id, for example "grid_container":

~~~html title="index.html"
<div id="grid_container"></div>
~~~

Initialize Grid
----------------------

Initialize Grid with the `dhx.Grid` object constructor. The constructor has two parameters:

- the HTML container for Grid,
- optional, an object with configuration properties (see the full list below). If this argument is not passed to the constructor, the settings will be default.

~~~js
// creating dhtmlxGrid
var grid = new dhx.Grid("grid_container", {
    columns: [
        { width: 100, id: "a", header: [{ text: "#" }] },
        { width: 100, id: "b", header: [{ text: "Title" }] },
        { width: 200, id: "c", header: [{ text: "Name" }] },
        { width: 200, id: "d", header: [{ text: "Address" }] }
    ],
    headerRowHeight: 50,
    data: dataset
});
~~~

{{editor	https://snippet.dhtmlx.com/luh8d0vv	Grid. Basic Initialization}}

There is a set of properties you can specify for Grid to optimize its configuration for your needs. Read the details below.

### Configuration properties

There is a list of properties that you can specify in the Grid configuration object (the second parameter of the constructor function):

todotw скорее всего можно просто сослаться на API
{{api

- grid/api/grid_adjust_config.md - defines whether the width of columns is automatically adjusted to the width of their content
- grid/api/grid_autoemptyrow_config.md - adds an empty row after the last filled row in the Grid
- grid/api/grid_autowidth_config.md - makes grid's columns to fit the size of a grid
- grid/api/grid_columns_config.md - defines the configuration of grid columns
- grid/api/grid_css_config.md - adds style classes to Grid
- grid/api/grid_data_config.md - sets a data set for a grid
- grid/api/grid_dragcopy_config.md - defines that a row is copied to a target during drag-n-drop
- grid/api/grid_dragitem_config.md - enables the possibility to reorder grid columns by drag and drop
- grid/api/grid_dragmode_config.md - enables drag-n-drop in Grid
- grid/api/grid_editable_config.md - enables editing in Grid columns
- grid/api/grid_eventhandlers_config.md - adds event handlers to HTML elements of a custom template of a Grid cell or to the HTML elements defined in the data set of Grid
- grid/api/grid_footerrowheight_config.md - sets the height of a row inside the footer, 40 by default
- grid/api/grid_headerrowheight_config.md - sets the height of a row inside the header, 40 by default
- grid/api/grid_height_config.md - sets the height of a grid
- grid/api/grid_htmlenable_config.md - specifies the HTML content (inner HTML) of Grid columns
- grid/api/grid_keynavigation_config.md - enables keyboard navigation in Grid
- grid/api/grid_leftsplit_config.md - sets the number of columns that should be frozen, thus splitting a grid into the static and scrollable parts
- grid/api/grid_multiselection_config.md - enables multi-row/multi-cell selection in Grid
- grid/api/grid_resizable_config.md - defines whether columns can be resized
- grid/api/grid_rowcss_config.md - sets a custom styling to a row
- grid/api/grid_rowheight_config.md - sets the height of a grid row, 40 by default
- grid/api/grid_selection_config.md - switches selection in a grid on/off
- grid/api/grid_sortable_config.md - defines whether sorting on clicking headers of columns is enabled
- grid/api/grid_spans_config.md - defines the configuration of cols/rows spans
- grid/api/grid_tooltip_config.md - enables a tooltip on hovering over the content of a column, <i>true</i> by default
- grid/api/grid_width_config.md - sets the width of a grid

}}

Load data into Grid
------------------

There are several handy ways of loading data into Grid. You can add data both before and after initialization of the component.

- via the data option in the configuration object of Grid:

~~~js
var grid = new dhx.Grid("grid_container", {
    columns: [// columns config],
    data: dataset 
});
~~~

- from an external file with the help of the **load()** method of data collection:

~~~js
var grid = new dhx.Grid("grid_container");
grid.data.load("../common/dataset.json");
~~~

- from a local source using the **parse** method of data collection:

~~~js
var grid = new dhx.Grid("grid_container");
grid.data.parse(dataset);
~~~

{{editor	https://snippet.dhtmlx.com/svkb27d5	Grid. External Data Loading}}

Detailed information on loading data into Grid is given in the article [](grid/data_loading.md).
