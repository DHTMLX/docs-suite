---
sidebar_label: Initialization
title: JavaScript Timepicker - Initialization 
description: You can explore the initialization of Timepicker in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Initialization

:::info
[Download the DHTMLX TimePicker package](https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml) as a part of the DHTMLX Suite library
:::

To initialize dhtmlxTimePicker on a page, you need to take the following simple steps:

- [Include source files](#include-source-files)
- [Create a container](#create-container)
- [Initialize TimePicker](#initialize-timepicker) with the object constructor
- [Set initial value (optional)](#set-initial-value-optional)

~~~html
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with dhtmlxTimePicker</title>         
        <script type="text/javascript" src="../../codebase/suite.js"></script>
        <link rel="stylesheet" href="../../codebase/suite.css">
    </head>
    <body>
        <div id="timepicker_container"></div>
        <script>
            // creating dhtmlxTimePicker 
            const timepicker = new dhx.Timepicker("timepicker_container", {
				// config options
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

## Create container

Add a container for TimePicker and give it an id, for example "timepicker_container":

~~~html title="index.html"
<div id="timepicker_container"></div>
~~~

## Initialize TimePicker

Initialize TimePicker with the **`dhx.Timepicker`** object constructor. The constructor has two parameters:

- the HTML container for TimePicker,
- optional, an object with [configuration properties](#configuration-properties). If this argument is not passed to the constructor, the settings will be default.

~~~js title="index.js"
// creating dhtmlxTimePicker
const timepicker = new dhx.Timepicker("timepicker_container", {
    // config options
});
~~~

### Configuration properties

There is a set of properties you can specify for TimePicker to optimize its configuration for your needs. 

The detailed information on TimePicker configuration options can be found in the [TimePicker API overview](timepicker/api/api_overview.md#properties) article.

## Set initial value (optional)

You can set initial value for TimePicker using the **setValue()** method. It takes as a parameter the value to be set as a object Date, a string, or an array. Check details in the API reference.

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