---
sidebar_label: Initialization
title: Initialization
---          

To initialize dhtmlxTreeGrid on a page, you need to take the following simple steps:

- [Download the dhtmlxTreeGrid package](https://dhtmlx.com/docs/products/dhtmlxTreeGrid/download.shtml) and unpack it into a folder of your project
- [Include source files](#include-source-files)
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
    	<div id="treegrid" style="height: 100%; width: 100%"></div>
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

### Configuration properties

There is a set of properties you can specify for TreeGrid to optimize its configuration for your needs. 

See the detailed information on configuration properties of TreeGrid in the [TreeGrid API overview](treegrid/api/api_overview.md#properties) article.

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







