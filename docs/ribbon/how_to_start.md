---
sidebar_label: Initialization
title: JavaScript Ribbon - Initialization 
description: You can explore the initialization of Ribbon in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Initialization

:::info
[Download the DHTMLX Ribbon package](https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml) as part of the DHTMLX Suite library.
:::

Follow these steps to add DHTMLX Ribbon to an application:

- [Include source files](#include-source-files)
- [Create a container](#create-a-container)
- [Initialize Ribbon](#initialize-ribbon) with the object constructor
- [Load data into Ribbon](#load-data-into-ribbon)

~~~html
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with DHTMLX Ribbon</title>         
        <script type="text/javascript" src="../../codebase/suite.js"></script>
        <link rel="stylesheet" href="../../codebase/suite.css">
    </head>
    <body>
        <div id="ribbon_container"></div>
        <script>
            // creating DHTMLX Ribbon
            const ribbon = new dhx.Ribbon("ribbon_container");
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

Add a container for Ribbon and give it an id, for example `ribbon_container`:

~~~html
<div id="ribbon_container"></div>
~~~

## Initialize Ribbon

Initialize Ribbon with the `dhx.Ribbon` object constructor. The constructor takes two parameters:

- The HTML container for Ribbon
- An object with configuration properties

~~~js
const ribbon = new dhx.Ribbon("ribbon_container", {
    // config options
});
~~~

### Configuration properties

The [Ribbon API overview](ribbon/api/api_overview.md) article describes the properties you can specify to adapt Ribbon to your needs.

## Load data into Ribbon

The [](ribbon/data_loading.md) article explains how to load data into DHTMLX Ribbon.

## Example

<iframe src="https://snippet.dhtmlx.com/lek4v9m7?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>