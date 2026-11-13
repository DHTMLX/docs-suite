---
sidebar_label: Initialization
title: JavaScript Timepicker - Initialization 
description: You can explore the initialization of Timepicker in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Initialization

:::info
[Download the DHTMLX Timepicker package](https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml) as part of the DHTMLX Suite library.
:::

Follow these steps to add DHTMLX Timepicker to an application:

- [Include source files](#include-source-files)
- [Create a container](#create-container)
- [Initialize Timepicker](#initialize-timepicker) with the object constructor
- [Set the initial value (optional)](#set-initial-value-optional)

~~~html
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with DHTMLX TimePicker</title>         
        <script type="text/javascript" src="../../codebase/suite.js"></script>
        <link rel="stylesheet" href="../../codebase/suite.css">
    </head>
    <body>
        <div id="timepicker_container"></div>
        <script>
            // creating DHTMLX TimePicker 
            const timepicker = new dhx.Timepicker("timepicker_container", {
                // config options
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

## Create a container {#create-container}

Add a container for Timepicker and give it an id, for example `timepicker_container`:

~~~html title="index.html"
<div id="timepicker_container"></div>
~~~

## Initialize Timepicker

Initialize Timepicker with the `dhx.Timepicker` object constructor. The constructor takes two parameters:

- The HTML container for Timepicker
- An object with [configuration properties](#configuration-properties) (optional). If you omit this argument, Timepicker uses the default settings.

~~~js title="index.js"
// creating DHTMLX TimePicker
const timepicker = new dhx.Timepicker("timepicker_container", {
    // config options
});
~~~

### Configuration properties

The [Timepicker API overview](timepicker/api/api_overview.md#properties) article describes the properties you can specify to adapt Timepicker to your needs.

## Set the initial value (optional) {#set-initial-value-optional}

You can set the initial value of Timepicker in the [`value`](timepicker/api/timepicker_value_config.md) configuration property:

~~~js {4}
const timepicker = new dhx.Timepicker("timepicker_container", {
    controls: true,
    css: "dhx_widget--bordered",
    value: new Date,
});
~~~

To change the value after you initialize Timepicker, use the [`setValue()`](timepicker/api/timepicker_setvalue_method.md) method:

~~~js
// set the value as a string
timepicker.setValue("00:39");
// set the value as a Date object
timepicker.setValue(new Date('January 10, 2019 17:54:00'));
// set the value as an array
timepicker.setValue([6,20,"AM"]);
~~~

## Example

<iframe src="https://snippet.dhtmlx.com/3d5u4cxx?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>