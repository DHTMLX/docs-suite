---
sidebar_label: Initialization
title: JavaScript Combo Box - Initialization 
description: You can explore the initialization of Combo Box in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Initialization

:::info
[Download the DHTMLX Combobox package](https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml) as part of the DHTMLX Suite library.
:::


Follow these steps to add DHTMLX Combobox to your application:

- [Include source files](#include-source-files)
- [Create a container](#create-a-container)
- [Initialize Combobox](#initialize-combobox) with the constructor
- [Load data into Combobox](#load-data-into-combobox)

~~~html title="index.html"
<!DOCTYPE html>
<html>
    <head>
        <title>How to start with DHTMLX ComboBox</title>
        <link rel="stylesheet" type="text/css" href="/codebase/suite.css">
        <script type="text/javascript" src="/codebase/suite.js"></script>
   </head>
   <body>
        <div id="combo_container"></div>
        <script>            
            const combo = new dhx.Combobox("combo_container", {
                // configuration properties
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

~~~html title="index.html"
<script type="text/javascript" src="../../codebase/suite.js"></script>
<link rel="stylesheet" href="../../codebase/suite.css">
~~~

## Create a container

Add a container for Combobox and give it an id, for example `combo_container`:

~~~html title="index.html"
<div id="combo_container"></div>
~~~

## Initialize Combobox

Use the `dhx.Combobox` constructor to initialize DHTMLX Combobox. The constructor takes two parameters:

- A container to place Combobox into — the one you created in the previous step.
- An object with configuration properties. See the full list below.

~~~js title="index.js"
const combo = new dhx.Combobox("combo_container", {
    label: "Countries:", 
    placeholder: "Click to select",
    // more config options
});
~~~

### Configuration properties

The [Combobox API overview](combobox/api/api_overview.md#properties) article describes Combobox configuration options in detail.

## Load data into Combobox

The [](combobox/adding_options.md) article explains how to load data into Combobox.

## Example

<iframe src="https://snippet.dhtmlx.com/8bsb9dji?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>