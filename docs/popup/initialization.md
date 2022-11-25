---
sidebar_label: Initialization
title: JavaScript Popup - Initialization 
description: You can explore the initialization of Popup in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Initialization

:::info
[Download the DHTMLX Popup package](https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml) as a part of the DHTMLX Suite library
:::

To add dhtmlxPopup into an application, you need to take the following simple steps:

- [Include source files](#include-source-files)
- [Initialize Popup](#initialize-popup) with the object constructor
- [Set content into Popup](#set-content)

~~~html
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with dhtmlxPopup</title>         
        <script type="text/javascript" src="../../codebase/suite.js"></script>
        <link rel="stylesheet" href="../../codebase/suite.css">
    </head>
    <body>       
        <script>
            // creating dhtmlxPopup
            const popup = new dhx.Popup();
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

## Initialize Popup

Initialize Popup with the `dhx.Popup` object constructor. 

~~~js
<div id="popup_container"></div>
~~~

~~~js
// creating dhtmlxPopup
const popup = new dhx.Popup();

popup.show("popup_container");
~~~

To show a created popup on a page, you should call the [](popup/api/popup_show_method.md) method after initialization of the component.

### Set content

There are several ways of adding content into DHTMLX Popup:

- by using [attachHTML()](popup/api/popup_attachhtml_method.md) to attach some HTML content into a popup 

<iframe src="https://snippet.dhtmlx.com/ajv5qqxq?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="300"></iframe>

- by calling [attach()](popup/api/popup_attach_method.md) to add other DHTMLX components into a popup

<iframe src="https://snippet.dhtmlx.com/7x6hlbqx?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>
