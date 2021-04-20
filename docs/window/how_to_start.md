---
sidebar_label: Initialization
title: Initialization
---          

To initialize dhtmlxWindow on a page, you need to take the following simple steps:

- [Download the dhtmlxWindow package](https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml) and unpack it into a folder of your project
- [Include source files](#includesourcefiles)
- [Initialize Window](#initializewindow) with the object constructor
- [Set content](#setcontent) into a created window

~~~html title="index.html"
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with dhtmlxWindow</title>         
        <script type="text/javascript" src="../../codebase/suite.js"></script>
        <link rel="stylesheet" href="../../codebase/suite.css">
    </head>
    <body>
        <script>
            // creating dhtmlxWindow 
            var dhxWindow = new dhx.Window({
                title: "DHX Window",
				modal: false,
				resizable: true,
				movable: true
			});
        </script>
    </body>
</html>
~~~

{{editor	https://snippet.dhtmlx.com/6qqezjxe	Window. Basic Initialization}}

Include source files
--------------------

Create an HTML file and place full paths to JS and CSS files of the dhtmlxSuite library into the header of the file. The files are:

- *suite.js*
- *suite.css*

~~~html title="index.html"
<script type="text/javascript" src="../../codebase/suite.js"></script>
<link rel="stylesheet" href="../../codebase/suite.css">
~~~


Initialize Window
----------------------

Initialize Window with the `dhx.Window` object constructor. The constructor takes an optional parameter:

- an object with configuration properties (see the full list below). If this argument is not passed to the constructor, the settings will be default.

{{note Don't use **window** as a variable name for dhxWindow object, since it is reserved for the browser window.}}

~~~js title="script.js"
// creating dhtmlxWindow
var dhxWindow = new dhx.Window({
    modal: false,
	resizable: true,
	movable: true
});
dhxWindow.show();
~~~

{{editor	https://snippet.dhtmlx.com/6qqezjxe	Window. Basic Initialization}}

{{note To show a created window on a page, you should call the [show()](window/api/window_show_method.md) method after initialization of the component.}}

### Configuration properties

There is a set of properties you can specify for Window to optimize its configuration for your needs.

The detailed information on Window configuration options can be found in the [Window API overview](window/api/api_overview.md#properties) article.

Set content
--------------

There are several ways of adding content into the dhtmlxWindow:

- by using [](window/api/window_attachhtml_method.md) to attach some HTML content into a window on the fly

~~~js
var dhxWindow = new dhx.Window({title: "Window"});
var html = "<h1>Header</h1><p>paragraph</p>";
dhxWindow.attachHTML(html);
dhxWindow.show();
~~~

{{editor	https://snippet.dhtmlx.com/6uelt44m	Window. Attach HTML To Window}}

- by calling [](window/api/window_attach_method.md) to attach other DHTMLX components

~~~js
dhxWindow.attach("richtext",{mode: "document"});
dhxWindow.show();
~~~

{{editor	https://snippet.dhtmlx.com/t9ncuuou	Window. Attaching Other Components}}


- via the [](window/api/window_html_config.md) property to attach some HTML content into a window before initialization

~~~js
var dhxWindow = new dhx.Window({
	htmlContent:"<h1>Header</h1><p>paragraph</p>"
});
~~~




