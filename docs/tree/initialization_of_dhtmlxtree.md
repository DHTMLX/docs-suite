---
sidebar_label: Initialization
title: JavaScript Tree - Initialization 
description: You can explore the initialization of Tree in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Initialization

:::info
Download the DHTMLX Tree package:

- [as a separate component](https://dhtmlx.com/docs/products/dhtmlxTree/download.shtml)
- [as part of the DHTMLX Suite library](https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml)
:::

Follow these steps to initialize DHTMLX Tree in an application:

- [Include source files](#include-source-files)
- [Create a container](#create-a-container)
- [Initialize Tree](#initialize-tree) with the object constructor
- [Load data into Tree](#load-data-into-tree)

~~~html
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with DHTMLX Tree</title>         
        <script type="text/javascript" src="../../codebase/tree.js"></script>
        <link rel="stylesheet" href="../../codebase/tree.css">
    </head>
    <body>
        <div id="tree_container"></div>
        <script>
            // creating DHTMLX Tree
            const tree = new dhx.Tree("tree_container",{
                // config options
            });
        </script>
    </body>
</html>
~~~

## Include source files

Unpack the downloaded package into your project folder.

Create an HTML file and add the paths to the library JS and CSS files in its header. You can use DHTMLX Tree standalone or as part of the Suite library.

**If you use DHTMLX Tree standalone**, include these JS/CSS files:

- `tree.js`
- `tree.css`

~~~html
<script type="text/javascript" src="../../codebase/tree.js"></script>
<link rel="stylesheet" href="../../codebase/tree.css">
~~~

**If you use DHTMLX Tree as part of the Suite package**, include these JS/CSS files:

- `suite.js`
- `suite.css`

~~~html
<link type="text/css" href="../codebase/suite.css">
<script src="../codebase/suite.js" type="text/javascript"></script>
~~~

## Create a container

Add a container for Tree and give it an `id`, for example `tree_container`:

~~~html title="index.html"
<div id="tree_container"></div>
~~~

## Initialize Tree

Initialize Tree with the `dhx.Tree` object constructor. The constructor takes two parameters:

- The HTML container for Tree. You created it in the previous step.
- An object with [configuration properties](#configuration-properties) (optional). If you omit this argument, Tree uses the default settings.

~~~js title="index.js"
// creating DHTMLX Tree
const tree = new dhx.Tree("tree_container", {
    checkbox: true
});
~~~

### Configuration properties

The [Tree API overview](tree/api/api_overview.md#properties) article describes the properties you can specify to adapt Tree to your needs.

## Load data into Tree

The [](tree/loading_data.md) article describes how to load data into Tree.

## Example

<iframe src="https://snippet.dhtmlx.com/r49y51k3?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>