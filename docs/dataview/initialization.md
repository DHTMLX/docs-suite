---
sidebar_label: Initialization
title: JavaScript DataView - Initialization 
description: You can explore the initialization of DataView in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Initialization

:::info
[Download the DHTMLX DataView package](https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml) as a part of the DHTMLX Suite library
:::

To initialize DHTMLX DataView on a page, you need to take the following simple steps:

- [Include source files](#include-source-files)
- [Create a container](#create-a-container)
- [Initialize DataView](#initialize-dataview) with the object constructor
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

Unpack the downloaded package into a folder of your project.

After that, create an HTML file and place full paths to JS and CSS files of the DHTMLX Suite library into the header of the file. The files are:

- *suite.js*
- *suite.css*

~~~html title="index.html"
<script type="text/javascript" src="../../codebase/suite.js"></script>
<link rel="stylesheet" href="../../codebase/suite.css">
~~~

## Create a container

Add a container for DataView and give it an id, for example "dataview_container":

~~~html title="index.html"
<div id="dataview_container"></div>
~~~

## Initialize DataView

Initialize DataView with the `dhx.DataView` object constructor. The constructor has two parameters:

- the HTML container for DataView,
- optional, an object with configuration properties. If this argument is not passed to the constructor, the settings will be default.

~~~js title="index.js"
// creating DHTMLX DataView
const dataview = new dhx.DataView("dataview_container", {
    itemsInRow: 5
});
~~~

:::info
To display data in DataView you should define a [template](dataview/configuration.md/#template-for-dataview-items) via the [template](dataview/api/dataview_template_config.md) configuration property.

Another way to display data in DataView is to prepare a data set with the ["value"](dataview/data_loading.md/#preparing-data-set) attribute.
:::

### Configuration properties

There is a set of properties you can specify for DataView to optimize its configuration for your needs.

The detailed information on DataView configuration options can be found in the [Dataview API overview](dataview/api/api_overview.md#properties) article.

## Load data into DataView

Detailed information on how to load data into DHTMLX DataView is given in the [Data loading](dataview/data_loading.md) article.

## Example

<iframe src="https://snippet.dhtmlx.com/s547z4xr?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>


