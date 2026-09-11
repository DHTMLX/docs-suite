---
sidebar_label: Initialization
title: JavaScript DataView - Initialization 
description: You can explore the initialization of DataView in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Initialization

:::info
[Download the DHTMLX DataView package](https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml) as part of the DHTMLX Suite library.
:::

Follow these steps to initialize DHTMLX DataView on a page:

- [Include source files](#include-source-files)
- [Create a container](#create-a-container)
- [Initialize DataView](#initialize-dataview) with the constructor
- [Load data into DataView](#load-data-into-dataview)

~~~html title="index.html"
<!DOCTYPE html>
<html>
    <head>
        <title>How to start with DHTMLX DataView</title>         
        <script type="text/javascript" src="../../codebase/suite.js"></script>
        <link rel="stylesheet" href="../../codebase/suite.css">
    </head>
    <body>
        <div id="dataview_container"></div>
        <script>
            // creating DHTMLX DataView
            const dataview = new dhx.DataView("dataview_container", {
                itemsInRow: 5
            });
        </script>
    </body>
</html>
~~~

## Include source files

Unpack the downloaded package into your project folder.

Create an HTML file and add the full paths to the JS and CSS files of the DHTMLX Suite library in its header. The files are:

- `suite.js`
- `suite.css`

~~~html title="index.html"
<script type="text/javascript" src="../../codebase/suite.js"></script>
<link rel="stylesheet" href="../../codebase/suite.css">
~~~

## Create a container

Add a container for DataView and give it an id, for example `dataview_container`:

~~~html title="index.html"
<div id="dataview_container"></div>
~~~

## Initialize DataView

Initialize DataView with the `dhx.DataView` constructor. The constructor takes two parameters:

- The HTML container for DataView.
- An object with configuration properties (optional). If you omit this argument, DataView uses the default settings.

~~~js title="index.js"
// creating DHTMLX DataView
const dataview = new dhx.DataView("dataview_container", {
    itemsInRow: 5
});
~~~

:::info
To display data in DataView, define a [custom template](dataview/configuration.md#template-for-dataview-items) with the [template](dataview/api/dataview_template_config.md) configuration property.

Another way to display data in DataView is to prepare a data set with the [`value`](dataview/data_loading.md#preparing-data-set) attribute.
:::

### Configuration properties

The [DataView API overview](dataview/api/api_overview.md#properties) article describes the properties you can specify to adapt DataView to your needs.

## Load data into DataView

The [Data loading](dataview/data_loading.md) article explains how to load data into DHTMLX DataView.

## Example

<iframe src="https://snippet.dhtmlx.com/s547z4xr?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>


