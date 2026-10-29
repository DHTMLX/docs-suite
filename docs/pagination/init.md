---
sidebar_label: Initialization
title: JavaScript Pagination - Initialization 
description: You can explore the initialization of Pagination in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Initialization

:::info
[Download the DHTMLX Pagination package](https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml) as part of the DHTMLX Suite library.
:::

Follow these steps to add DHTMLX Pagination to an application:

- [Include source files](#include-source-files)
- [Create two containers](#create-containers)
- [Add a related widget](#initialize-a-related-widget) (for example, DataView, List, Grid, Tree)
- [Initialize Pagination](#initialize-pagination) with the object constructor

~~~html
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with DHTMLX Pagination</title>         
        <script type="text/javascript" src="../../codebase/suite.js"></script>
        <link rel="stylesheet" href="../../codebase/suite.css">
    </head>
    <body>
        <div id="widget_container"></div>
        <div id="pagination_container"></div>
        <script>
            // creating a related widget
            const widget = new dhx.List("widget_container", {
                css: "dhx_widget--bordered",
                keyNavigation: true
            });

            widget.data.parse(widget_data);

            // creating DHTMLX Pagination
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

**Related sample**: [Pagination. Pagination with Grid in the TreeGrid mode](https://snippet.dhtmlx.com/uxz8lh7m)

## Include source files

Unpack the downloaded package into your project folder.

Create an HTML file and add the paths to the JS and CSS files of the DHTMLX Suite library in its header. The files are:

- `suite.js`
- `suite.css`

~~~html
<script type="text/javascript" src="../../codebase/suite.js"></script>
<link rel="stylesheet" href="../../codebase/suite.css">
~~~

## Create containers

Add two containers and give each of them an id:

- A container for the related widget, for example `widget_container`
- A container for Pagination, for example `pagination_container`

~~~html title="index.html"
<div id="widget_container"></div>
<div id="pagination_container"></div>
~~~

## Initialize a related widget

:::note 
DHTMLX Pagination works with data components such as [List](/list/), [DataView](/dataview/), [Tree](/tree/), [Grid](/grid/), or [Grid in the TreeGrid mode](grid/treegrid_mode.md).
:::

Choose the widget you want to link to the Pagination component, for example, DHTMLX List. 

1\. Initialize the widget with the object constructor, like this: 

~~~jsx title="index.js"
// creating a related DHTMLX List widget
const widget = new dhx.List("widget_container", {
    css: "dhx_widget--bordered",
    keyNavigation: true
});
~~~

The constructor takes two parameters:

- The HTML container for List.
- An object with List configuration properties (see the [full list of properties](list/api/api_overview.md#properties)).

2\. Load data into the widget:

~~~jsx title="index.js"
// loading data into the created DHTMLX List 
widget.data.parse(widget_data);
~~~

## Initialize Pagination

Initialize Pagination with the `dhx.Pagination` object constructor. The constructor takes two parameters:

- The HTML container for Pagination.
- An object with configuration properties (optional). If you omit this argument, Pagination uses the default settings.

~~~jsx title="index.js"
// creating DHTMLX Pagination
const pagination = new dhx.Pagination("pagination_container", {
    css: "dhx_widget--bordered",
    data: widget.data
});
~~~

### Configuration properties

The [Pagination API overview](pagination/api/api_overview.md#properties) article describes the properties you can specify in the Pagination configuration object (the second parameter of the constructor).

