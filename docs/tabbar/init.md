---
sidebar_label: Initialization
title: JavaScript Tabbar - Initialization 
description: You can explore the initialization of Tabbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Initialization

:::info
[Download the DHTMLX Tabbar package](https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml) as a part of the DHTMLX Suite library
:::

To add DHTMLX Tabbar into an application, you need to take the following simple steps:

- [Include source files](#include-source-files)
- [Create a container](#create-a-container)
- [Define Tabbar structure](#define-tabbar-structure)
- [Initialize Tabbar](#initialize-tabbar) with the object constructor

~~~html
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with DHTMLX Tabbar</title>         
        <script type="text/javascript" src="../../codebase/suite.js"></script>
        <link rel="stylesheet" href="../../codebase/suite.css">
    </head>
    <body>
        <div id="tabbar_container"></div>
        <script>
            // creating DHTMLX Tabbar
            const tabbar = new dhx.Tabbar("tabbar_container",{
            	views:[ 
                	{ tab: "north" },
                    { tab: "south" },
                    { tab: "east" },
                    { tab: "west" },
            	]
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

Add a container for the Tabbar and give it an id, e.g. "tabbar_container":

~~~html
<div id="tabbar_container"></div>
~~~

## Define Tabbar structure

At this step you should specify the structure of your future Tabbar. Each tab represents an object with attributes, such as the name of a tab and a CSS class applied to a tab. 
For example, Tabbar can have 4 tabs. You need to define their configuration objects and place them into the **views** array, like this:

~~~js
const views = [
    { tab: "north" },
    { tab: "south" },
    { tab: "east" },
    { tab: "west" },
];
~~~

## Initialize Tabbar

Initialize Tabbar with the `dhx.Tabbar` object constructor. The constructor takes two parameters:

- the HTML object on the page that serves as the Tabbar container
- an object with [configuration properties](#configuration-properties). If this argument is not passed to the constructor, the settings will be default

~~~js
const tabbar = new dhx.Tabbar("tabbar_container",{
    mode: "bottom",
    views: views,
    // more config options
});
~~~

### Configuration properties

You can find the full list of Tabbar configuration properties in the [Tabbar API overview](tabbar/api/api_overview.md#properties) article.

## Example

<iframe src="https://snippet.dhtmlx.com/uysfjo5z?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>