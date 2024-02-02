---
sidebar_label: Initialization
title: JavaScript Slider - Initialization 
description: You can explore the initialization of Slider in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Initialization

:::info
[Download the DHTMLX Slider package](https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml) as a part of the DHTMLX Suite library
:::

To initialize DHTMLX Slider on a page, you need to take the following simple steps:

- [Include source files](#include-source-files)
- [Create a container](#create-a-container)
- [Initialize Slider](#initialize-slider) with the object constructor

~~~html
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with DHTMLX Slider</title>         
        <script type="text/javascript" src="../../codebase/suite.js"></script>
        <link rel="stylesheet" href="../../codebase/suite.css">
    </head>
    <body>
        <div id="slider_container"></div>
        <script>
            // creating DHTMLX Slider 
            const slider = new dhx.Slider("slider_container", {
                min: 0,
                max: 100,
                step: 1,
                value: 30
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

Add a container for Slider and give it an id, for example "slider_container":

~~~html title="index.html"
<div id="slider_container"></div>
~~~

## Initialize Slider

Initialize Slider with the `dhx.Slider` object constructor. The constructor has two parameters:

- the HTML container for Slider,
- optional, an object with [configuration properties](#configuration-properties). If this argument is not passed to the constructor, the settings will be default.

~~~js title="index.js"
// creating DHTMLX Slider
const slider = new dhx.Slider("slider_container", {
    min: 0,
    max: 100,
    step: 1
});
~~~

### Configuration properties

There is a set of properties you can specify for Slider to optimize its configuration for your needs.

See the detailed information on configuration properties of Slider in the [Slider API overview](slider/api/api_overview.md#properties) article.

## Example

<iframe src="https://snippet.dhtmlx.com/wipdmzbp?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="300"></iframe>