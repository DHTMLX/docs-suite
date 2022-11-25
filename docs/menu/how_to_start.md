---
sidebar_label: Initialization
title: JavaScript Menu - Initialization 
description: You can explore the initialization of Menu in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Initialization

:::info
[Download the DHTMLX Menu package](https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml) as a part of the DHTMLX Suite library
:::

To add dhtmlxMenu into an application, you need to take the following simple steps:

- [Include source files](#include-source-files)
- [Create a container](#create-a-container)
- [Initialize Menu](#initialize-menu) with the object constructor
- [Load data into Menu](#load-data-into-menu)

~~~html
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with dhtmlxMenu</title>         
        <script type="text/javascript" src="../../codebase/suite.js"></script>
        <link rel="stylesheet" href="../../codebase/suite.css">
    </head>
    <body>
        <div id="menu_container"></div>
        <script>
            // creating dhtmlxMenu
            const menu = new dhx.Menu("menu_container");
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

Add a container for the Menu and give it an id, e.g. "menu_container":

~~~html
<div id="menu_container"></div>
~~~

## Initialize Menu

Initialize Menu with the `dhx.Menu` object constructor. The constructor takes two parameters:

- the HTML object on the page that serves as the Menu container
- an object with configuration properties. If this argument is not passed to the constructor, the settings will be default

~~~js
const menu = new dhx.Menu("menu_container");
~~~

### Configuration properties

You can find the full list of Menu configuration properties in the [Menu API overview](menu/api/api_overview.md#properties) article.

## Load data into Menu

Detailed information on loading data into Menu is given in the article [](menu/data_loading.md).

## Example

<iframe src="https://snippet.dhtmlx.com/cg62qa9v?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>