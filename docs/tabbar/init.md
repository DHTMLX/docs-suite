---
sidebar_label: Initialization
title: JavaScript Tabbar - Initialization 
description: You can explore the initialization of Tabbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Initialization

To add dhtmlxTabbar into an application, you need to take the following simple steps:

- [Download the Tabbar package](https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml) and unpack it into a folder of your project
- [Include source files](#include-source-files)
- [Create a container](#create-a-container)
- [Define Tabbar structure](#define-tabbar-structure)
- [Initialize Tabbar](#initialize-tabbar) with the object constructor

~~~html
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with dhtmlxTabbar</title>         
        <script type="text/javascript" src="../../codebase/suite.js"></script>
        <link rel="stylesheet" href="../../codebase/suite.css">
    </head>
    <body>
        <div id="tabbar_container"></div>
        <script>
            // creating dhtmlxTabbar
            var tabbar = new dhx.Tabbar("tabbar_container",{
            	views:[ 
                	{ tab: "left", css:"panel flex"},
    				{ tab: "west", css:"panel flex"},
    				{ tab: "east", css:"panel flex"},
    				{ tab: "right", css:"panel flex"}
            	]
            });
        </script>
    </body>
</html>
~~~

**Related sample**: [Tabbar. Basic Initialization](https://snippet.dhtmlx.com/uysfjo5z)

## Include source files

Create an HTML file and place full paths to JS and CSS files of the dhtmlxSuite library into the header of the file. The files are:

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
var views = [
    { tab: "left", css:"panel flex"},
    { tab: "west", css:"panel flex"},
    { tab: "east", css:"panel flex"},
    { tab: "right", css:"panel flex"}
];
~~~

## Initialize Tabbar

Initialize Tabbar with the `dhx.Tabbar` object constructor. The constructor takes two parameters:

- the HTML object on the page that serves as the Tabbar container
- an object with [configuration properties](#configuration-properties). If this argument is not passed to the constructor, the settings will be default

~~~js
var tabbar = new dhx.Tabbar("tabbar_container",{
    mode:"bottom",
    views:views
});
~~~

### Configuration properties

You can find the full list of Tabbar configuration properties in the [Tabbar API overview](tabbar/api/api_overview.md#properties) article.
