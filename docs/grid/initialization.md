---
sidebar_label: Initialization
title: JavaScript Grid - Initialization 
description: You can explore the initialization of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Initialization

:::info
Download the DHTMLX Grid package:

- [as a separate component](https://dhtmlx.com/docs/products/dhtmlxGrid/download.shtml)
- [as a part of the DHTMLX Suite library](https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml)
:::

To initialize DHTMLX Grid on a page, you need to take the following simple steps:

- [Include source files](#include-source-files)
- [Create a container](#create-a-container)
- [Initialize Grid](#initialize-grid) with the object constructor
- [Load data into Grid](#load-data-into-grid)

~~~html title="index.html"
<!DOCTYPE html>
<html>
    <head>
        <title>How to start with DHTMLX Grid</title>         
        <script type="text/javascript" src="../../codebase/grid.js"></script>
        <link rel="stylesheet" href="../../codebase/grid.css">
    </head>
    <body>
        <div style="height:500px; width:600px" id="grid_container"></div>
        <script>
            // creating DHTMLX Grid 
            const grid = new dhx.Grid("grid_container", {
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

After that, create an HTML file and place full paths to JS and CSS files of DHTMLX Grid into the header of the created file. The Grid component can be used standalone or as a part of the Suite library.

**If you use DHTMLX Grid standalone**, you need to include 2 files:

- *grid.js*
- *grid.css*

~~~html
<script type="text/javascript" src="../../codebase/grid.js"></script>
<link rel="stylesheet" href="../../codebase/grid.css">
~~~

**If you use DHTMLX Grid as a part of the Suite package**, you need to include JS/CSS files of the DHTMLX Suite library:

- *suite.js*
- *suite.css*

~~~html
<link type="text/css" href="../codebase/suite.css">
<script src="../codebase/suite.js" type="text/javascript"></script>
~~~

## Create a container

Add a container for Grid and give it an id, for example "grid_container":

~~~html title="index.html"
<div id="grid_container"></div>
~~~

## Initialize Grid

Initialize Grid with the `dhx.Grid` object constructor. The constructor has two parameters:

- the HTML container for Grid,
- optional, an object with configuration properties. If this argument is not passed to the constructor, the settings will be default.

~~~js
// creating DHTMLX Grid
const grid = new dhx.Grid("grid_container", {
    columns: [
        { width: 100, id: "a", header: [{ text: "#" }] },
        { width: 100, id: "b", header: [{ text: "Title" }] },
        { width: 200, id: "c", header: [{ text: "Name" }] },
        { width: 200, id: "d", header: [{ text: "Address" }] }
    ],
    headerRowHeight: 50,
});
~~~

### Configuration properties

There is a set of properties you can specify for Grid to optimize its configuration for your needs.

See the full list of properties that you can specify in the Grid configuration object (the second parameter of the constructor function) in the [Grid API overview](grid/api/api_overview.md#grid-properties) article.

## Load data into Grid

Detailed information on loading data into Grid is given in the article [](grid/data_loading.md).

## Example

<iframe src="https://snippet.dhtmlx.com/luh8d0vv?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>