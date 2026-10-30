---
sidebar_label: Initialization
title: JavaScript Popup - Initialization 
description: You can explore the initialization of Popup in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Initialization

:::info
[Download the DHTMLX Popup package](https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml) as part of the DHTMLX Suite library.
:::

Follow these steps to add DHTMLX Popup to an application:

- [Include source files](#include-source-files)
- [Initialize Popup](#initialize-popup) with the object constructor
- [Add content to Popup](#set-content)

~~~html
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with DHTMLX Popup</title>         
        <script type="text/javascript" src="../../codebase/suite.js"></script>
        <link rel="stylesheet" href="../../codebase/suite.css">
    </head>
    <body>       
        <script>
            // creating DHTMLX Popup
            const popup = new dhx.Popup();
        </script>
    </body>
</html>
~~~

## Include source files

Unpack the downloaded package into your project folder.

Create an HTML file and add the paths to the JS and CSS files of the DHTMLX Suite library in its header. The files are:

- `suite.js`
- `suite.css`

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
// creating DHTMLX Popup
const popup = new dhx.Popup();

popup.show("popup_container");
~~~

To show the popup on a page, call the [](popup/api/popup_show_method.md) method after you initialize the component.

### Set content

You can add content to DHTMLX Popup in the following ways:

- Use the [`attachHTML()`](popup/api/popup_attachhtml_method.md) method to attach HTML content to Popup:

<iframe src="https://snippet.dhtmlx.com/ajv5qqxq?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="300"></iframe>

- Use the [`attach()`](popup/api/popup_attach_method.md) method to attach other DHTMLX components to Popup:

<iframe src="https://snippet.dhtmlx.com/7x6hlbqx?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>
