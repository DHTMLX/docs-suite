---
sidebar_label: Initialization
title: JavaScript Sidebar - Initialization 
description: You can explore the initialization of Sidebar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Initialization

:::info
[Download the DHTMLX Sidebar package](https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml) as part of the DHTMLX Suite library.
:::

Follow these steps to add DHTMLX Sidebar to an application:

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

Unpack the downloaded package into your project folder.

Create an HTML file and add the full paths to the JS and CSS files of the DHTMLX Suite library in its header. The files are:

- `suite.js`
- `suite.css`

~~~html
<script type="text/javascript" src="../../codebase/suite.js"></script>
<link rel="stylesheet" href="../../codebase/suite.css">
~~~

## Create a container

Add a container for Sidebar and give it an id, for example `sidebar_container`:

~~~html
<div id="sidebar_container"></div>
~~~

## Initialize Sidebar

Initialize Sidebar with the `dhx.Sidebar` object constructor. The constructor takes two parameters:

- The HTML container for Sidebar
- An object with [configuration properties](#configuration-properties) (optional). If you omit this argument, Sidebar uses the default settings.

~~~js
const sidebar = new dhx.Sidebar("sidebar_container", {
    // config options
});
~~~

### Configuration properties

The [Sidebar API overview](sidebar/api/api_overview.md) article describes the properties you can specify to adapt Sidebar to your needs.

## Load data into Sidebar

The [](sidebar/data_loading.md) article explains how to load data into DHTMLX Sidebar.

## Example

<iframe src="https://snippet.dhtmlx.com/y8y7iw42?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>