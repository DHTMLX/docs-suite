---
sidebar_label: Initialization
title: JavaScript Toolbar - Initialization 
description: You can explore the initialization of Toolbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Initialization

:::info
[Download the DHTMLX Toolbar package](https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml) as a part of the DHTMLX Suite library
:::

To add dhtmlxToolbar into an application, you need to take the following simple steps:

- [Include source files](#include-source-files)
- [Create a container](#create-a-container)
- [Initialize Toolbar](#initialize-toolbar) with the object constructor
- [Load data into Toolbar](#load-data-into-toolbar)

~~~html
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with dhtmlxToolbar</title>         
        <script type="text/javascript" src="../../codebase/suite.js"></script>
        <link rel="stylesheet" href="../../codebase/suite.css">
    </head>
    <body>
        <div id="toolbar_container"></div>
        <script>
            // creating dhtmlxToolbar
            const toolbar = new dhx.Toolbar("toolbar_container");
        </script>
    </body>
</html>
~~~

## Include source files

Unpack the downloaded package into a folder of your project.

After that, create an HTML file and place full paths to JS and CSS files of the dhtmlxSuite library into the header of the file. The files are:

- *suite.js*
- *suite.css*

~~~html
<script type="text/javascript" src="../../codebase/suite.js"></script>
<link rel="stylesheet" href="../../codebase/suite.css">
~~~

## Create a container

Add a container for the Toolbar and give it an id, e.g. "toolbar_container":

~~~html
<div id="toolbar_container"></div>
~~~

## Initialize Toolbar

Initialize Toolbar with the `dhx.Toolbar` object constructor. The constructor takes two parameters:

- the HTML object on the page that serves as the toolbar container
- an object with [configuration properties](#configuration-properties)

~~~js
const toolbar = new dhx.Toolbar("toolbar_container", {
    // config options
});
~~~

### Configuration properties

See the detailed information on configuration properties of Toolbar in the [Toolbar API overview](toolbar/api/api_overview.md#toolbar-properties) article.

## Load data into Toolbar

Detailed information on loading data into Toolbar is given in the [](toolbar/load_data.md) article.

## Example

<iframe src="https://snippet.dhtmlx.com/nie9tuks?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>