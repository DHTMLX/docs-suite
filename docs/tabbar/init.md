---
sidebar_label: Initialization
title: JavaScript Tabbar - Initialization 
description: You can explore the initialization of Tabbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Initialization

:::info
[Download the DHTMLX Tabbar package](https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml) as part of the DHTMLX Suite library.
:::

Follow these steps to add DHTMLX Tabbar to an application:

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

Unpack the downloaded package into your project folder.

Create an HTML file and add the full paths to the JS and CSS files of the DHTMLX Suite library in its header. The files are:

- `suite.js`
- `suite.css`

~~~html
<script type="text/javascript" src="../../codebase/suite.js"></script>
<link rel="stylesheet" href="../../codebase/suite.css">
~~~

## Create a container

Add a container for Tabbar and give it an id, for example `tabbar_container`:

~~~html
<div id="tabbar_container"></div>
~~~

## Define Tabbar structure

Specify the structure of the Tabbar. Each tab is an object with attributes, such as the tab name and the CSS class of the tab.
For example, to create a Tabbar with four tabs, put their configuration objects into the `views` array:

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

- The HTML container for Tabbar
- An object with [configuration properties](#configuration-properties) (optional). If you omit this argument, Tabbar uses the default settings.

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