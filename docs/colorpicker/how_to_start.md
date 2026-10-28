---
sidebar_label: Initialization
title: JavaScript Colorpicker - Initialization 
description: You can explore the initialization of Colorpicker in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Initialization

:::info
[Download the DHTMLX Colorpicker package](https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml) as part of the DHTMLX Suite library
:::

You can initialize DHTMLX Colorpicker in two ways: inside a container or inside a popup.

To create DHTMLX Colorpicker on a page, follow these steps:

- [Include source files](#include-source-files)
- [Initialize Colorpicker](#initialize-colorpicker) with the object constructor
- [Select the initial color (optional)](#select-initial-color-optional)

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

Unpack the downloaded package into your project folder.

Create an HTML file and place full paths to the DHTMLX Suite JS and CSS files in its header. The files are:

- `suite.js`
- `suite.css`

~~~html title="index.html"
<script type="text/javascript" src="../../codebase/suite.js"></script>
<link rel="stylesheet" href="../../codebase/suite.css">
~~~

## Initialize Colorpicker

You can initialize Colorpicker in a container or in a popup.

### Initialization in a container

In this case, add a container for Colorpicker and give the container an id, for example "colorpicker_container":

~~~html title="index.html"
<div id="colorpicker_container"></div>
~~~

Initialize Colorpicker with the `dhx.Colorpicker` object constructor:

~~~js title="index.js"
// creating ColorPicker
const colorpicker = new dhx.Colorpicker("colorpicker_container", {
    css: "dhx_widget--bordered",
   // more config options
});
~~~

**Related sample**: [Colorpicker. Initialization](https://snippet.dhtmlx.com/ezk8rk4m)

The constructor takes two parameters:

- The HTML container for Colorpicker.
- An object with configuration properties ([see the full list below](#configuration-properties)). If you omit this argument, Colorpicker uses default settings.


### Initialization in a popup

In this case, you create a popup first and then attach Colorpicker to it.

- Use the object constructors to create the Colorpicker and Popup objects. Pass `null` instead of a container for Colorpicker:

~~~js
const colorpicker = new dhx.Colorpicker(null, { customColors: ["#f2f2f2"] });
const popup = new dhx.Popup();
~~~

- Attach Colorpicker to the popup with the [](popup/api/popup_attach_method.md) method of Popup:

~~~js
popup.attach(colorpicker);
~~~

- Use the [show()](popup/api/popup_show_method.md) and [hide()](popup/api/popup_hide_method.md) methods of Popup to show and hide the popup with Colorpicker. For example:

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

The [Colorpicker API overview](colorpicker/api/api_overview.md#properties) article describes Colorpicker configuration options in detail.

## Select initial color (optional)

Use the [](colorpicker/api/colorpicker_setvalue_method.md) method to select a color in the palette after Colorpicker initialization:

~~~js
const colorpicker = new dhx.Colorpicker("colorpicker_container", {
   // config options
});
colorpicker.setValue("#BDF0E9");
~~~

**Related sample**: [Colorpicker. Set value](https://snippet.dhtmlx.com/h6oc5qsq)
