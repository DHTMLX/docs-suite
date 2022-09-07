---
sidebar_label: Initialization
title: JavaScript Tree - Initialization 
description: You can explore the initialization of Tree in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Initialization

:::info
Download the DHTMLX Tree package:

- [as a separate component](https://dhtmlx.com/docs/products/dhtmlxTree/download.shtml)
- [as a part of the DHTMLX Suite library](https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml)
:::

To initialize dhtmlxTree on a page, you need to take the following simple steps:

- [Include source files](#include-source-files)
- [Create a container](#create-a-container)
- [Initialize Tree](#initialize-tree) with the object constructor
- [Load data into Tree](#load-data-into-tree)

~~~html
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with dhtmlxTree</title>         
        <script type="text/javascript" src="../../codebase/tree.js"></script>
        <link rel="stylesheet" href="../../codebase/tree.css">
    </head>
    <body>
        <div id="tree_container"></div>
        <script>
            // creating dhtmlxTree
            var tree = new dhx.Tree("tree_container",{
    			// config options
			});
        </script>
    </body>
</html>
~~~

## Include source files

Unpack the downloaded package into a folder of your project.

After that, create an HTML file and place full paths to JS and CSS files of dhtmlxTree into the header of the created file. The Tree component can be used standalone or as a part of the Suite library.

**If you use dhtmlxTree standalone**, you need to include 2 files:

- *tree.js*
- *tree.css*

~~~html
<script type="text/javascript" src="../../codebase/tree.js"></script>
<link rel="stylesheet" href="../../codebase/tree.css">
~~~

**If you use dhtmlxTree as a part of the Suite package**, you need to include JS/CSS files of the dhtmlxSuite library:

- suite.js
- suite.css

~~~html
<link type="text/css" href="../codebase/suite.css">
<script src="../codebase/suite.js" type="text/javascript"></script>
~~~

## Create a container

Add a container for Tree and give it an id, for example "tree_container":

~~~html title="index.html"
<div id="tree_container"></div>
~~~

## Initialize Tree

Initialize Tree with the `dhx.Tree` object constructor. The constructor has two parameters:

- the HTML container for Tree,
- optional, an object with [configuration properties](#configuration-properties). If this argument is not passed to the constructor, the settings will be default.

~~~js title="index.js"
// creating dhtmlxTree
var tree = new dhx.Tree("tree_container", {
    checkbox: true
});
~~~

### Configuration properties

There is a set of properties you can specify for Tree to optimize its configuration for your needs.

See the detailed information on configuration properties of Tree in the [Tree API overview](tree/api/api_overview.md#properties) article.

## Load data into Tree

Detailed information on loading data into Tree is given in the [](tree/loading_data.md) article.

## Example

<iframe src="https://snippet.dhtmlx.com/r49y51k3?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>