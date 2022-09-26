---
sidebar_label: Initialization
title: JavaScript Message - Initialization 
description: You can explore the initialization of Message in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Initialization

:::info
[Download the DHTMLX Message package](https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml) as a part of the DHTMLX Suite library
:::

To add a message on a page, you should take the following simple steps:

- [Include source files](#include-source-files)
- [Create a container](#create-a-container)
- [Create necessary message box](#create-necessary-message-box)

~~~html
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with dhtmlxMessage</title>         
        <script type="text/javascript" src="../../codebase/suite.js"></script>
        <link rel="stylesheet" href="../../codebase/suite.css">
    </head>
    <body>
    	<!--optional-->
        <div id="message_container"></div>
        <script>
            // creating dhtmlxMessage 
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

Unpack the downloaded package into a folder of your project.

After that, create an HTML file and place full paths to JS and CSS files of the dhtmlxSuite library into the header of the file. The files are:

- *suite.js*
- *suite.css*

~~~html
<script type="text/javascript" src="../../codebase/suite.js"></script>
<link rel="stylesheet" href="../../codebase/suite.css">
~~~

## Create a container

:::info
This is an optional step. By default a message appears in the top right corner of the screen.
:::

Add a container for Message and give it an id, for example "message_container":

~~~html title="index.html"
<div id="message_container"></div>
~~~

## Create necessary message box

Create a desired message box with the corresponding method. The listed methods take an [**object with configuration options of message boxes**](message/configuration.md) as a parameter.

- **dhx.message()** - to create a message

~~~js
dhx.message({
	text:"Message text", 
    icon:"dxi-clock", 
    css:"expire", 
    expire:1000
});
~~~

**Related sample**: [Message. Show Message](https://snippet.dhtmlx.com/rsxdlicg)

- **dhx.alert()** - to create an alert message box

~~~js
dhx.alert({
	header:"Alert Header",
    text:"Alert text",
    buttonsAlignment:"center"
});
~~~

**Related sample**: [Message. Show Alert](https://snippet.dhtmlx.com/m4xka888)

- **dhx.confirm()** - to create a confirm message box 

~~~js
dhx.confirm({
	header:"Confirm Header",
    text:"Confirm text",
    buttons:["decline", "accept"],
    buttonsAlignment:"center"
});
~~~

**Related sample**: [Message. Show Confirm](https://snippet.dhtmlx.com/iss7twe6)

- **dhx.tooltip()** - to create a tooltip. The method takes two parameters:
    - **text** - (*string*) a string with the text of tooltip
    - **config** - (*object*) an object with [tooltip configuration properties](message/configuration.md#tooltip)
        
~~~js
dhx.tooltip("Current Value 1", {node: "first", position: "center"});
~~~

**Related sample**: [Message. Show Tooltip](https://snippet.dhtmlx.com/c6jm8if6)

### Configuration properties

There is a set of properties you can specify for message boxes to optimize their configuration for your needs. Read details in the [related article](message/configuration.md).
