---
sidebar_label: Initialization
title: JavaScript List - Initialization 
description: You can explore the initialization of List in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Initialization

:::info
[Download the DHTMLX List package](https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml) as a part of the DHTMLX Suite library
:::

To initialize DHTMLX List on a page, you need to take the following simple steps:

- [Include source files](#include-source-files)
- [Create a container](#create-a-container)
- [Initialize List](#initialize-list) with the object constructor
- [Load data into List](#load-data-into-list)

~~~html
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with DHTMLX List</title>         
        <script type="text/javascript" src="../../codebase/suite.js"></script>
        <link rel="stylesheet" href="../../codebase/suite.css">
    </head>
    <body>
        <div id="list_container"></div>
        <script>
            // creating DHTMLX List
            const list = new dhx.List("list_container", {
    			itemHeight: 30
			});
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

Add a container for List and give it an id, for example "list_container":

~~~html title="index.html"
<div id="list_container"></div>
~~~

## Initialize List

Initialize List with the `dhx.List` object constructor. The constructor has two parameters:

- the HTML container for List,
- optional, an object with [configuration properties](#configuration-properties). If this argument is not passed to the constructor, the settings will be default.

~~~js title="index.js"
// creating DHTMLX List
const list = new dhx.List("list_container", {
    itemHeight:30,
    // more config options
});
~~~

:::info
To display data in List you should define a [template](list/configuration.md/#template-for-list-items) via the [template](list/api/list_template_config.md/) configuration property.

Another way to display data in List is to prepare a data set with the ["value"](list/load_data.md/#preparing-data-set) attribute.
:::

### Configuration properties

There is a set of properties you can specify for List to optimize its configuration for your needs.

The detailed information on List configuration options can be found in the [List API overview](list/api/api_overview.md#properties) article.

## Load data into List

Detailed information on loading data into List is given in the [Data loading](list/load_data.md) article.

## Example

<iframe src="https://snippet.dhtmlx.com/kzg2fza0?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

