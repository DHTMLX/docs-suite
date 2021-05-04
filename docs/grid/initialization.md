---
sidebar_label: Initialization
title: Initialization
---          

To initialize dhtmlxGrid on a page, you need to take the following simple steps:

- [Download the dhtmlxGrid package](https://dhtmlx.com/docs/products/dhtmlxGrid/download.shtml) and unpack it into a folder of your project
- [Include source files](#include-source-files)
- [Create a container](#create-a-container)
- [Initialize Grid](#initialize-grid) with the object constructor
- [Load data into Grid](#load-data-into-grid)

~~~html title="index.html"
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with dhtmlxGrid</title>         
        <script type="text/javascript" src="../../codebase/grid.js"></script>
        <link rel="stylesheet" href="../../codebase/grid.css">
    </head>
    <body>
    	<div style="height:500px; width:600px" id="grid_container"></div>
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

**Related sample**: [Grid. Basic Initialization](https://snippet.dhtmlx.com/luh8d0vv)

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
- optional, an object with configuration properties. If this argument is not passed to the constructor, the settings will be default.

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

**Related sample**: [Grid. Basic Initialization](https://snippet.dhtmlx.com/luh8d0vv)

 
### Configuration properties

There is a set of properties you can specify for Grid to optimize its configuration for your needs.

See the full list of properties that you can specify in the Grid configuration object (the second parameter of the constructor function) in the [Grid API overview](grid/api/api_overview.md#grid-properties) article.

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

**Related sample**: [Grid. External Data Loading](https://snippet.dhtmlx.com/svkb27d5)

Detailed information on loading data into Grid is given in the article [](grid/data_loading.md).
