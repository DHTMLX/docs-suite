---
sidebar_label: Initialization
title: JavaScript List - Initialization 
description: You can explore the initialization of List in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Initialization

To initialize dhtmlxList on a page, you need to take the following simple steps:

- [Download the List package](https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml) and unpack it into a folder of your project
- [Include source files](#include-source-files)
- [Create a container](#create-a-container)
- [Initialize List](#initialize-list) with the object constructor
- [Load data into List](#load-data-into-list)

~~~html
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with dhtmlxList</title>         
        <script type="text/javascript" src="../../codebase/suite.js"></script>
        <link rel="stylesheet" href="../../codebase/suite.css">
    </head>
    <body>
        <div id="list_container"></div>
        <script>
            // creating dhtmlxList
            var list = new dhx.List("list_container", {
    			itemHeight: 30
			});
        </script>
    </body>
</html>
~~~

**Related sample**: [List. Initialization with data.parse()](https://snippet.dhtmlx.com/anj2keoc)

## Include source files

Create an HTML file and place full paths to JS and CSS files of the dhtmlxSuite library into the header of the file. The files are:

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

~~~js title="script.js"
// creating dhtmlxList
var list = new dhx.List("list_container", {
    itemHeight:30
});
~~~

**Related sample**: [List. Initialization with data.parse()](https://snippet.dhtmlx.com/anj2keoc)

### Configuration properties

There is a set of properties you can specify for List to optimize its configuration for your needs.

The detailed information on List configuration options can be found in the [List API overview](list/api/api_overview.md#properties) article.

## Load data into List

Finally, you are to load the list with data. You can load inline or external data into the list.

- to load data from a local source, use the **parse()** method of the Data Collection object:

~~~js
var list = new dhx.List("list_container", {
	 itemHeight:30
});

list.data.parse(data);
~~~

**Related sample**: [List. Initialization with data.parse()](https://snippet.dhtmlx.com/anj2keoc)

- to load data from an external file, use the **load()** method of the Data Collection object:

~~~js
var list = new dhx.List("list_container", {
	itemHeight:30
});

list.data.load("../common/dataset.json");
~~~

**Related sample**: [List. Initialization with data.load()](https://snippet.dhtmlx.com/1it5kfhq)

To display data in List you should define a [template](list/configuration.md/#template-for-list-items) via the [template](list/api/list_template_config.md/) configuration property.

Another way to display data in List is to prepare a data set with the ["value"](list/load_data.md/#preparing-data-set) attribute.
