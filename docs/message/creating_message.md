---
sidebar_label: Initialization
title: JavaScript Message - Initialization 
description: You can explore the initialization of Message in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Initialization

:::info
[Download the DHTMLX Message package](https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml) as part of the DHTMLX Suite library.
:::

Follow these steps to add a message box to a page:

- [Include source files](#include-source-files)
- [Create a container](#create-a-container)
- [Create a message box](#create-necessary-message-box)

~~~html
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with DHTMLX Message</title>         
        <script type="text/javascript" src="../../codebase/suite.js"></script>
        <link rel="stylesheet" href="../../codebase/suite.css">
    </head>
    <body>
        <!--optional-->
        <div id="message_container"></div>
        <script>
            // creating DHTMLX Message 
            dhx.message({
                node:"message_container",
                text:"This is an error message",
                css:"dhx_message--error",
                icon:"dxi-close"
            });
        </script>
    </body>
</html>
~~~

## Include source files

Unpack the downloaded package into your project folder.

Create an HTML file and add the paths to the following DHTMLX Suite files in its header:

- `suite.js`
- `suite.css`

~~~html
<script type="text/javascript" src="../../codebase/suite.js"></script>
<link rel="stylesheet" href="../../codebase/suite.css">
~~~

## Create a container

:::info
This is an optional step. The default message position is the top-right corner of the screen.
:::

Add a container for Message and give it an id, for example `message_container`:

~~~html title="index.html"
<div id="message_container"></div>
~~~

## Create a message box {#create-necessary-message-box}

Each message box has its own constructor that takes an [**object with configuration options of message boxes**](message/configuration.md) as a parameter. Use one of the following constructors to create a message box:

- `dhx.message(): {close() => void};` — to create a message. The constructor returns an object with the `close()` method:

~~~js
const message = dhx.message({
    text:"Message text", 
    icon:"dxi-clock", 
    css:"expire", 
    expire:1000
});

console.log(message); // -> {close: function}
~~~

**Related sample**: [Message. Show Message](https://snippet.dhtmlx.com/rsxdlicg)

- `dhx.alert()` — to create an alert message box:

~~~js
dhx.alert({
    header:"Alert Header",
    text:"Alert text",
    buttonsAlignment:"center"
});
~~~

**Related sample**: [Message. Show Alert](https://snippet.dhtmlx.com/m4xka888)

- `dhx.confirm()` — to create a confirm message box:

~~~js
dhx.confirm({
    header:"Confirm Header",
    text:"Confirm text",
    buttons:["decline", "accept"],
    buttonsAlignment:"center"
});
~~~

**Related sample**: [Message. Show Confirm](https://snippet.dhtmlx.com/iss7twe6)

- `dhx.tooltip()` — to create a tooltip. The constructor takes two parameters:
    - `text` — (`string`) the text of the tooltip
    - `config` — (`object`) an object with [tooltip configuration properties](message/configuration.md#tooltip)
        
~~~js
dhx.tooltip("Current Value 1", {node: "first", position: "center"});
~~~

**Related sample**: [Message. Show Tooltip](https://snippet.dhtmlx.com/c6jm8if6)

### Configuration properties

The [Configuration](message/configuration.md) article describes the properties that you can specify for message boxes and tooltips.
