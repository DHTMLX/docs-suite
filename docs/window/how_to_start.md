---
sidebar_label: Initialization
title: JavaScript Window - Initialization 
description: You can explore the initialization of Window in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Initialization

:::info
[Download the DHTMLX Window package](https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml) as a part of the DHTMLX Suite library
:::

To initialize DHTMLX Window on a page, you need to take the following simple steps:

- [Include source files](#include-source-files)
- [Initialize Window](#initialize-window) with the object constructor
- [Set content](#set-content) into a created window

~~~html title="index.html"
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with DHTMLX Window</title>         
        <script type="text/javascript" src="../../codebase/suite.js"></script>
        <link rel="stylesheet" href="../../codebase/suite.css">
    </head>
    <body>
        <script>
            // creating DHTMLX Window 
            const dhxWindow = new dhx.Window({
                title: "DHX Window",
				modal: false,
				resizable: true,
				movable: true
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

~~~html title="index.html"
<script type="text/javascript" src="../../codebase/suite.js"></script>
<link rel="stylesheet" href="../../codebase/suite.css">
~~~

## Initialize Window

Initialize Window with the `dhx.Window` object constructor. The constructor takes an optional parameter:

- an object with configuration properties (see the full list below). If this argument is not passed to the constructor, the settings will be default.

{{note Don't use **window** as a variable name for dhxWindow object, since it is reserved for the browser window.}}

~~~js title="index.js"
// creating DHTMLX Window
const dhxWindow = new dhx.Window({
    modal: false,
	resizable: true,
	movable: true
});
dhxWindow.show();
~~~


{{note To show a created window on a page, you should call the [show()](window/api/window_show_method.md) method after initialization of the component.}}

### Configuration properties

There is a set of properties you can specify for Window to optimize its configuration for your needs.

The detailed information on Window configuration options can be found in the [Window API overview](window/api/api_overview.md#properties) article.

## Set content

There are several ways of adding content into the DHTMLX Window:

- via the [](window/api/window_html_config.md) property to attach some HTML content into a window before initialization

<iframe src="https://snippet.dhtmlx.com/6qqezjxe?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>

- by using [](window/api/window_attachhtml_method.md) to attach some HTML content into a window on the fly

<iframe src="https://snippet.dhtmlx.com/6uelt44m?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>

- by calling [](window/api/window_attach_method.md) to attach other DHTMLX components

<iframe src="https://snippet.dhtmlx.com/t9ncuuou?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>

