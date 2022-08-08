---
sidebar_label: Initialization
title: JavaScript Toolbar - Initialization 
description: You can explore the initialization of Toolbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Initialization

To add dhtmlxToolbar into an application, you need to take the following simple steps:

- [Download the Toolbar package](https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml) and unpack it into a folder of your project
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
            var toolbar = new dhx.Toolbar("toolbar_container");
        </script>
    </body>
</html>
~~~

**Related sample**: [Toolbar. Initialization with config.data](https://snippet.dhtmlx.com/nie9tuks)

## Include source files

Create an HTML file and place full paths to JS and CSS files of the dhtmlxSuite library into the header of the file. The files are:

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
var toolbar = new dhx.Toolbar("toolbar_container", {
    // config options
});
~~~

### Configuration properties

See the detailed information on configuration properties of Toolbar in the [Toolbar API overview](toolbar/api/api_overview.md#toolbar-properties) article.

## Load data into Toolbar

There are two handy ways of loading data, i.e. a set of controls into Toolbar:

- from an external file with the help of the **load()** method of tree collection:

~~~js
var toolbar = new dhx.Toolbar("toolbar_container");
toolbar.data.load("../common/dataset.json");
~~~

**Related sample**: [Toolbar. Initialization with data.load()](https://snippet.dhtmlx.com/i5a9mx2i)

- from a local source using the **parse()** method of tree collection:

~~~js
var data = [
	{
    	type: "button",
    	icon: "dxi-plus",
    	value: "new"
    },
    {
    	type: "button",
    	icon: "dxi-folder-open",
    	value: "open"
    },
    {
    	type: "button",
    	icon: "dxi-vault",
    	value: "save"
    },
    {
    	type: "button",
    	icon: "dxi-delete",
    	value: "delete"
    }
];

var toolbar = new dhx.Toolbar("toolbar_container", {css:"dhx_toolbar--bordered" });
toolbar.data.parse(data);
~~~

Detailed information on loading data into Toolbar is given in the [](toolbar/load_data.md) article.
