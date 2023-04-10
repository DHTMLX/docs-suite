---
sidebar_label: Initialization
title: JavaScript TreeGrid - Initialization 
description: You can explore the initialization of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Initialization

:::info
Download the DHTMLX TreeGrid package:

- [as a separate component](https://dhtmlx.com/docs/products/dhtmlxTreeGrid/download.shtml)
- [as a part of the DHTMLX Suite library](https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml)
:::

To initialize DHTMLX TreeGrid on a page, you need to take the following simple steps:

- [Include source files](#include-source-files)
- [Create a container](#create-a-container)
- [Initialize TreeGrid](#initialize-grid) with the object constructor
- [Load data into TreeGrid](#load-data-into-treegrid)

~~~html title="index.html"
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with DHTMLX TreeGrid</title>         
        <script type="text/javascript" src="../../codebase/treegrid.js"></script>
        <link rel="stylesheet" href="../../codebase/treegrid.css">
    </head>
    <body>
    	<div id="treegrid_container" style="height: 100%; width: 100%"></div>
        <script>
            // creating DHTMLX TreeGrid 
            const treegrid = new dhx.TreeGrid("treegrid_container", {
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

## Include source files

Unpack the downloaded package into a folder of your project.

After that, create an HTML file and place full paths to JS and CSS files of DHTMLX TreeGrid into the header of the created file. The TreeGrid component can be used standalone or as a part of the Suite library.

**If you use DHTMLX TreeGrid standalone**, you need to include 2 files:

- *treegrid.js*
- *treegrid.css*

~~~html
<script type="text/javascript" src="../../codebase/treegrid.js"></script>
<link rel="stylesheet" href="../../codebase/treegrid.css">
~~~

**If you use DHTMLX TreeGrid as a part of the Suite package**, you need to include JS/CSS files of the dhtmlxSuite library:

- suite.js
- suite.css

~~~html
<link type="text/css" href="../codebase/suite.css">
<script src="../codebase/suite.js" type="text/javascript"></script>
~~~

## Create a container

Add a container for TreeGrid and give it an id, for example "treegrid_container". To display TreeGrid on the page correctly, define width and height of the container.

~~~html title="index.html"
<div id="treegrid_container" style="width:800px; height:600px"></div>
~~~

## Initialize TreeGrid

Initialize TreeGrid with the `dhx.TreeGrid` object constructor. The constructor has two parameters:

- the HTML container for TreeGrid,
- optional, an object with [configuration properties](#configuration-properties). If this argument is not passed to the constructor, the settings will be default.

~~~js title="index.js"
// creating DHTMLX TreeGrid
const treegrid = new dhx.TreeGrid("treegrid_container", {
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

See the detailed information on configuration properties of TreeGrid in the [TreeGrid API overview](treegrid/api/api_overview.md#treegrid-properties) article.

## Load data into TreeGrid

Detailed information on loading data into TreeGrid is given in the [](treegrid/data_loading.md) article.

## Example

<iframe src="https://snippet.dhtmlx.com/kob9385v?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>