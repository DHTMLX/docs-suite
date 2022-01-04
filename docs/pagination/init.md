---
sidebar_label: Initialization
title: JavaScript Pagination - Initialization 
description: You can explore the initialization of Pagination in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Initialization

To add dhtmlxPagination into an application, you need to take the following simple steps:

- [Download the dhtmlxPagination](https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml) package and unpack it into a folder of your project
- [Include source files](#include-source-files)
- [Create two containers](#create-containers)
- [Add a related component](#add-a-related-widget)
- [Initialize Pagination](#initialize-pagination) with the object constructor

~~~html
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with dhtmlxPagination</title>         
        <script type="text/javascript" src="../../codebase/suite.js"></script>
        <link rel="stylesheet" href="../../codebase/suite.css">
    </head>
    <body>
        <div id="widget_container"></div>
        <div id="pagination_container"></div>
        <script>
            // creating a related component
            const widget = new dhx.List("widget_container", {
				css: "dhx_widget--bordered",
				keyNavigation: true
			});

			widget.data.parse(widget_data);

            // creating dhtmlxPagination
			const pagination = new dhx.Pagination("pagination_container", {
				css: "dhx_widget--bordered",
				data: widget.data
			});
        </script>
    </body>
</html>
~~~

**Related sample**: [Pagination. Pagination with List](https://snippet.dhtmlx.com/6sju9jl5)

**Related sample**: [Pagination. Pagination with Dataview](https://snippet.dhtmlx.com/xmf0lx8z)

**Related sample**: [Pagination. Pagination with Tree](https://snippet.dhtmlx.com/a0jhoipw)

**Related sample**: [Pagination. Pagination with Grid](https://snippet.dhtmlx.com/0sku3cfa)

**Related sample**: [Pagination. Pagination with TreeGrid](https://snippet.dhtmlx.com/uxz8lh7m)

## Include source files

Create an HTML file and place full paths to JS and CSS files of the dhtmlxSuite library into the header of the file. The files are:

- *suite.js*
- *suite.css*

~~~html
<script type="text/javascript" src="../../codebase/suite.js"></script>
<link rel="stylesheet" href="../../codebase/suite.css">
~~~

## Create containers

Add two containers:

- for a related component and give it an id, e.g. "widget_container"
- for Pagination and give it an id, e.g. "pagination_container":

~~~html title="index.html"
<div id="widget_container"></div>
<div id="pagination_container"></div>
~~~

## Add a related widget

{{note dhtmlxPagination can be used in conjunction with data components like [List](list.md), [DataView](dataview.md), [Tree](tree.md), [Grid](grid.md), or [TreeGrid](treegrid.md).}}

Choose the widget you want to link to the Pagination component, for example, dhtmlxList. 

1\. Initialize the widget with the object constructor, like this: 

~~~js title="script.js"
// creating a related dhtmlxList widget
const widget = new dhx.List("widget_container", {
    css: "dhx_widget--bordered",
    keyNavigation: true
});
~~~

The constructor has two parameters:

- the HTML container for List,
- an object with the List configuration properties (see the full list [here](list/api/api_overview.md#properties)). 

2\. Load data into the widget:

~~~js title="script.js"
// loading data into the created dhtmlxList 
widget.data.parse(widget_data);
~~~

## Initialize Pagination

Initialize pagination with the *dhx.Pagination* object constructor. The constructor takes two parameters:

- the HTML container for Pagination, 
- optional, an object with configuration properties. If this argument is not passed to the constructor, the settings will be default.

~~~js title="script.js"
// creating dhtmlxPagination
const pagination = new dhx.Pagination("pagination_container", {
	css: "dhx_widget--bordered",
	data: widget.data
});
~~~

### Configuration properties

There is a set of properties you can specify in the Pagination configuration object (the second parameter of the constructor function). 

See the detailed information on configuration properties of Pagination in the [Pagination API overview](pagination/api/api_overview.md#properties) article.
