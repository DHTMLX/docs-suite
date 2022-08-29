---
sidebar_label: Initialization
title: JavaScript Combo Box - Initialization 
description: You can explore the initialization of Combo Box in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Initialization

This article gives you detailed instructions on how to create DHTMLX Combo on a page. Follow the steps below:

- [Download the DHTMLX Suite library](https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml) (it includes DHTMLX Combobox)
- [Include source files](#include-source-files)
- [Create a container](#create-a-container)
- [Initialize ComboBox](#initialize-combobox) with the object constructor
- [Load data into ComboBox](#load-data-into-combobox)

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

Unpack the downloaded package into a folder of your project.

Create an HTML file and place full paths to JS and CSS files of the DHTMLX Suite library into the header of the file. The files are:

- *suite.js*
- *suite.css*

~~~html title="index.html"
<script type="text/javascript" src="../../codebase/suite.js"></script>
<link rel="stylesheet" href="../../codebase/suite.css">
~~~

## Create a container

Add a container for ComboBox and give it an id, for example "combo_container":

~~~html title="index.html"
<div id="combo_container"></div>
~~~

## Initialize ComboBox

To initialize DHTMLX ComboBox, you should use the `dhx.Combobox` constructor. The constructor function takes two parameters:

- a container to place a Combo Box into. The one we have created at the previous step.
- an object with configuration properties. See the full list below.

~~~js title="index.js"
const combo = new dhx.Combobox("combo_container", {
    label: "Countries:", 
    placeholder: "Сlick to select",
    // more config options
});
~~~

### Configuration properties

See the detailed description of Combo configuration options in the [Combobox API overview](combobox/api/api_overview.md#properties) article.

## Load data into ComboBox

Detailed information on how to load data into ComboBox is given in the [](combobox/adding_options.md) article.

## Example

<iframe src="https://snippet.dhtmlx.com/8bsb9dji?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>