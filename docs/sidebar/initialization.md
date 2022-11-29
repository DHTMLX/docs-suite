---
sidebar_label: Initialization
title: JavaScript Sidebar - Initialization 
description: You can explore the initialization of Sidebar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Initialization

:::info
[Download the DHTMLX Sidebar package](https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml) as a part of the DHTMLX Suite library
:::

To add DHTMLX Sidebar into an application, you need to take the following simple steps:

- [Include source files](#include-source-files)
- [Create a container](#create-a-container)
- [Initialize Sidebar](#initialize-sidebar) with the object constructor
- [Load data into Sidebar](#load-data-into-sidebar)

~~~html
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with DHTMLX Sidebar</title>         
        <script type="text/javascript" src="../../codebase/suite.js"></script>
        <link rel="stylesheet" href="../../codebase/suite.css">
    </head>
    <body>
        <div id="sidebar_container"></div>
        <script>
            // creating DHTMLX Sidebar
            const sidebar = new dhx.Sidebar("sidebar_container");
        </script>
    </body>
</html>
~~~

**Related sample**: [Sidebar. Initialization with config.data](https://snippet.dhtmlx.com/y8y7iw42)

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

Add a container for the Sidebar and give it an id, e.g. "sidebar_container":

~~~html
<div id="sidebar_container"></div>
~~~

## Initialize Sidebar

Initialize Sidebar with the `dhx.Sidebar` object constructor. The constructor takes two parameters:

- the HTML object on the page that serves as the sidebar container
- an object with [configuration properties](#configuration-properties). If this argument is not passed to the constructor, the settings will be default

~~~js
const sidebar = new dhx.Sidebar("sidebar_container", {
	// config options
});
~~~

### Configuration properties

The detailed information on Sidebar configuration options can be found in the [Sidebar API overview](sidebar/api/api_overview.md#properties) article.

## Load data into Sidebar

Detailed information on loading data into Sidebar is given in the article [](sidebar/data_loading.md).

## Example

<iframe src="https://snippet.dhtmlx.com/y8y7iw42?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>