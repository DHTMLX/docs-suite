---
sidebar_label: Initialization
title: Initialization
---          

To add dhtmlxPopup into an application, you need to take the following simple steps:

- [Download the Popup package](https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml) and unpack it into a folder of your project
- [Include source files](#include-source-files)
- [Initialize Popup](#initialize-popup) with the object constructor
- [Set content into Popup](#attachcontentintopopup)

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
            var popup = new dhx.Popup();
        </script>
    </body>
</html>
~~~

## Include source files

Create an HTML file and place full paths to JS and CSS files of the dhtmlxSuite library into the header of the file. The files are:

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
var popup = new dhx.Popup();

popup.show("popup_container");
~~~

To show a created popup on a page, you should call the [](popup/api/popup_show_method.md) method after initialization of the component.
    
### Set content

There are several ways of adding content into the dhtmlxPopup:

- by using [attachHTML()](popup/api/popup_attachhtml_method.md) to attach some HTML content into a popup 

~~~js
var popup = new dhx.Popup();
popup.attachHTML("<h1>Hello, I'm popup</h1>");
popup.show("popup");
~~~

**Related sample**: [Popup. Html Content](https://snippet.dhtmlx.com/ajv5qqxq)

- by calling [attach()](popup/api/popup_attach_method.md) to add other DHTMLX components into a popup

~~~js
popup.attach("Timepicker");
popup.show();
~~~

**Related sample**: [Popup. Attach Timepicker](https://snippet.dhtmlx.com/7x6hlbqx)

