---
sidebar_label: Initialization
title: JavaScript Window - Initialization 
description: You can explore the initialization of Window in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Initialization

:::info
[Download the DHTMLX Window package](https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml) as part of the DHTMLX Suite library.
:::

Follow these steps to add DHTMLX Window to an application:

- [Include source files](#include-source-files)
- [Initialize Window](#initialize-window) with the object constructor
- [Add content to Window](#set-content)

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

Unpack the downloaded package into your project folder.

Create an HTML file and add the paths to the JS and CSS files of the DHTMLX Suite library in its header. The files are:

- `suite.js`
- `suite.css`

~~~html title="index.html"
<script type="text/javascript" src="../../codebase/suite.js"></script>
<link rel="stylesheet" href="../../codebase/suite.css">
~~~

## Initialize Window

Initialize Window with the `dhx.Window` object constructor. The constructor takes an optional parameter:

- An object with [configuration properties](#configuration-properties) (optional). If you omit this argument, Window uses the default settings.

:::note
Don't use `window` as the variable name of a Window instance. The browser reserves this name for the global `window` object.
:::

~~~js title="index.js"
// creating DHTMLX Window
const dhxWindow = new dhx.Window({
    modal: false,
    resizable: true,
    movable: true
});
dhxWindow.show();
~~~


:::note
To show a window on a page, call the [`show()`](window/api/window_show_method.md) method after you initialize the component.
:::

### Configuration properties

The [Window API overview](window/api/api_overview.md#properties) article describes the properties you can specify to adapt Window to your needs.

## Set content

You can add content to DHTMLX Window in the following ways:

- Use the [](window/api/window_html_config.md) property to set the HTML content of a window on initialization:

<iframe src="https://snippet.dhtmlx.com/6qqezjxe?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>

- Use the [](window/api/window_attachhtml_method.md) method to attach HTML content to a window dynamically:

<iframe src="https://snippet.dhtmlx.com/6uelt44m?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>

- Use the [](window/api/window_attach_method.md) method to attach other DHTMLX components to a window:

<iframe src="https://snippet.dhtmlx.com/t9ncuuou?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>
