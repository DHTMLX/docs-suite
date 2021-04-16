---
sidebar_label: Initialization
title: Initialization
---          

To initialize dhtmlxTreeGrid on a page, you need to take the following simple steps:

- [Download the dhtmlxTreeGrid package](https://dhtmlx.com/docs/products/dhtmlxTreeGrid/download.shtml) and unpack it into a folder of your project
- [Include source files](#includesourcefiles)
- [Create a container](#createcontainer)
- [Initialize TreeGrid](#initializegrid) with the object constructor
- [Load data into TreeGrid](#loaddata)

~~~html title="index.html"
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with dhtmlxTreeGrid</title>         
        <script type="text/javascript" src="../../codebase/treegrid.js"></script>
        <link rel="stylesheet" href="../../codebase/treegrid.css">
    </head>
    <body>
    	<div id="treegrid_container"></div>
        <script>
            // creating dhtmlxTreeGrid 
            var treegrid = new dhx.TreeGrid("treegrid_container", {
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

{{editor	https://snippet.dhtmlx.com/kob9385v	TreeGrid. Basic initialization}}

Include source files
--------------------

Create an HTML file and place full paths to JS and CSS files of dhtmlxTreeGrid into the header of the created file. The TreeGrid component can be used standalone or as a part of the Suite library.

**If you use dhtmlxTreeGrid standalone**, you need to include 2 files:

- *treegrid.js*
- *treegrid.css*

~~~html
<script type="text/javascript" src="../../codebase/treegrid.js"></script>
<link rel="stylesheet" href="../../codebase/treegrid.css">
~~~

**If you use dhtmlxTreeGrid as a part of the Suite package**, you need to include JS/CSS files of the dhtmlxSuite library:

- suite.js
- suite.css

~~~html
<link type="text/css" href="../codebase/suite.css">
<script src="../codebase/suite.js" type="text/javascript"></script>
~~~

Create a container 
-----------------

Add a container for TreeGrid and give it an id, for example "treegrid_container". To display TreeGrid on the page correctly, define width and height of the container.

~~~html title="index.html"
<div id="treegrid_container" style="width:800px; height:600px"></div>
~~~


Initialize TreeGrid
----------------------

Initialize TreeGrid with the `dhx.TreeGrid` object constructor. The constructor has two parameters:

- the HTML container for TreeGrid,
- optional, an object with configuration properties (see the full list below). If this argument is not passed to the constructor, the settings will be default.

~~~js title="script.js"
// creating dhtmlxTreeGrid
var treegrid = new dhx.TreeGrid("treegrid_container", {
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

There is a set of properties you can specify for TreeGrid to optimize its configuration for your needs. Read the details below.



### Configuration properties

There is a list of properties that you can specify in the TreeGrid configuration object (the second parameter of the constructor function):

todotw скорее всего можно просто сослаться на API
{{api

- treegrid/api/treegrid_adjust_config.md - defines whether the width of columns is automatically adjusted to the width of their content
- treegrid/api/treegrid_autowidth_config.md - makes treegrid's columns to fit the size of a treegrid
treegrid/api/treegrid_columns_config.md - defines the configuration of grid columns
- treegrid/api/treegrid_css_config.md - adds style classes to TreeGrid
- treegrid/api/treegrid_data_config.md - sets a data set for a grid
- treegrid/api/treegrid_dragcopy_config.md - defines that a row is copied to a target during drag-n-drop
- treegrid/api/treegrid_dragitem_config.md - enables the possibility to reorder treegrid columns by drag and drop
- treegrid/api/treegrid_dragmode_config.md - enables drag-n-drop in Grid
- treegrid/api/treegrid_editable_config.md - enables editing in TreeGrid columns
- treegrid/api/treegrid_eventhandlers_config.md - adds event handlers to HTML elements of a custom template of a TreeGrid cell or to the HTML elements defined in the data set of TreeGrid
- treegrid/api/treegrid_footerrowheight_config.md - sets the height of a row inside the footer, 40 by default
- treegrid/api/treegrid_grouptitletemplate_config.md - sets a template to the title of a group
- treegrid/api/treegrid_headerrowheight_config.md - sets the height of a row inside the header, 40 by default
- treegrid/api/treegrid_height_config.md - sets the height of a grid
- treegrid/api/treegrid_htmlenable_config.md - specifies the HTML content (inner HTML) of TreeGrid columns
- treegrid/api/treegrid_leftsplit_config.md - sets the number of columns that should be frozen, thus spllitting a grid into the static and scrollable parts
- treegrid/api/treegrid_resizable_config.md - defines whether columns can be resized
- treegrid/api/treegrid_rowcss_config.md - sets a custom styling to a row
- treegrid/api/treegrid_rowheight_config.md - sets the height of a grid row, 40 by default
- treegrid/api/treegrid_selection_config.md - switches selection in a grid on/off
- treegrid/api/treegrid_sortable_config.md - defines whether sorting on clicking headers of columns is enabled
- treegrid/api/treegrid_spans_config.md - defines the configuration of cols/rows spans
- treegrid/api/treegrid_tooltip_config.md - enables a tooltip on hovering over the content of a column
- treegrid/api/treegrid_width_config.md - sets the width of a grid

}}




Load data into TreeGrid
------------------

There are several handy ways of loading data into TreeGrid. You can add data both before and after initialization of the component.

- via the data option in the configuration object of Grid:

~~~js
var treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [// columns config],
    data: dataset 
});
~~~

- from an external file with the help of the **load()** method of data collection:

~~~js
var treegrid = new dhx.TreeGrid("treegrid_container", {
treegrid.data.load("../common/dataset.json");
~~~

{{editor	https://snippet.dhtmlx.com/44rmxlmq	TreeGrid.  External data loading}}

- from a local source using the **parse** method of data collection:

~~~js
var treegrid = new dhx.TreeGrid("treegrid_container", {
treegrid.data.parse(dataset);
~~~

Detailed information on loading data into TreeGrid is given in the article treegrid/data_loading.md.







