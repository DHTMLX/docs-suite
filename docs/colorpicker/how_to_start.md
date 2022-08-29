---
sidebar_label: Initialization
title: JavaScript Colorpicker - Initialization 
description: You can explore the initialization of Colorpicker in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Initialization

:::info
[Download the DHTMLX Colorpicker package](https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml) as a part of the DHTMLX Suite library
:::

There are two ways of initializing DHTMLX Colorpicker: inside a container or inside a popup. Both ways are described below in detail.

In general, to create DHTMLX Colorpicker on a page, you need to take the following simple steps:

- [Include source files](#include-source-files)
- [Initialize Colorpicker](#initialize-colorpicker) with the object constructor
- [Set initially selected color (optional)](#select-initial-color-optional)

~~~html
<!DOCTYPE html>
<html>
    <head>
        <title>How to start with DHTMLX ColorPicker</title>         
        <script type="text/javascript" src="../../codebase/suite.js"></script>
        <link rel="stylesheet" href="../../codebase/suite.css">
    </head>
    <body>
    	<div id="colorpicker_container"></div>
        <script>
            // creating Colorpicker 
            const colorpicker = new dhx.Colorpicker("colorpicker_container", {
                // config options
			});
        </script>
    </body>
</html>
~~~

## Include source files

Unpack the downloaded package into a folder of your project.

After that, create an HTML file and place full paths to JS and CSS files of the DHTMLX Suite library into the header of the file. The files are:

- *suite.js*
- *suite.css*

~~~html title="index.html"
<script type="text/javascript" src="../../codebase/suite.js"></script>
<link rel="stylesheet" href="../../codebase/suite.css">
~~~

## Initialize Colorpicker

You can initialize Colorpicker in a container or in a popup.

### Initialization in a container

In this case you need to add a container for Colorpicker and give it an id, for example "colorpicker_container":

~~~html title="index.html"
<div id="colorpicker_container"></div>
~~~

and initialize Colorpicker with the `dhx.Colorpicker` object constructor like this:

~~~js title="index.js"
// creating ColorPicker
const colorpicker = new dhx.Colorpicker("colorpicker_container", {
    css: "dhx_widget--bordered",
   // more config options
});
~~~

**Related sample**: [Colorpicker. Initialization](https://snippet.dhtmlx.com/ezk8rk4m)

The constructor takes two parameters:

- the HTML container for ColorPicker
- an object with configuration properties ([see the full list below](#configuration-properties)). If this argument is not passed to the constructor, the settings will be default.


### Initialization in a popup

This variant presupposes that you create a popup first and then attach a colorpicker into it. 

- use corresponding object constructors to create a colorpicker and a popup objects. Note that in this case *null* is used instead of container for Colorpicker:

~~~js
const colorpicker = new dhx.Colorpicker(null, { customColors: ["#f2f2f2"] });
const popup = new dhx.Popup();
~~~

- attach the colorpicker to the popup using the [](../popup/api/popup_attach_method.md) method of Popup:

~~~js
popup.attach(colorpicker);
~~~

- use the [show()](../../popup/api/popup_show_method/) and [hide()](../../popup/api/popup_hide_method/) methods of Popup to control when a popup with color picker should be shown/hidden. For example:

~~~js
popup.show("showButton");

const colorExample = document.querySelector(".dhx_color-sample");
colorpicker.events.on("colorChange", function (color) {
	colorExample.style.backgroundColor = color;
	popup.hide();
});
~~~

**Related sample**: [Colorpicker. Colorpicker inside Popup](https://snippet.dhtmlx.com/kw3e0h4j)

### Configuration properties

The detailed information on Colorpicker configuration options can be found in the [Colorpicker API overview](colorpicker/api/api_overview.md#properties) article.

## Select initial color (optional)

You can specify the color that should be selected in the palette after Colorpicker initialization with the help of the [](colorpicker/api/colorpicker_setvalue_method.md) method:

~~~js
const colorpicker = new dhx.Colorpicker("colorpicker_container", {
   // config options
});
colorpicker.setValue("#BDF0E9");
~~~

**Related sample**: [Colorpicker. Set value](https://snippet.dhtmlx.com/h6oc5qsq)
