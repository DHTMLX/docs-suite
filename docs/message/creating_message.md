---
sidebar_label: Initialization
title: Initialization
---          

To add a message on a page, you should take the following simple steps:

- [Include the source files](#includesourcefiles)
- [Create a container](#createcontainer) (optional)
- [Create the necessary type of a message box](#createnecessarymessagebox)

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


Include source files
--------------------

Create an HTML file and place full paths to JS and CSS files of the dhtmlxSuite library into the header of the file. The files are:

- *suite.js*
- *suite.css*

~~~html
<script type="text/javascript" src="../../codebase/suite.js"></script>
<link rel="stylesheet" href="../../codebase/suite.css">
~~~

Create container 
-----------------

{{note This is an optional step. By default a message appears in the top right corner of the screen.}}

Add a container for Message and give it an id, for example "message_container":

~~~html title="index.html"
<div id="message_container"></div>
~~~

Create necessary message box
----------------------

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

{{editor	https://snippet.dhtmlx.com/rsxdlicg	Message. Show Message}}

- **dhx.alert()** - to create an alert message box

~~~js
dhx.alert({
	header:"Alert Header",
    text:"Alert text",
    buttonsAlignment:"center"
});
~~~

{{editor	https://snippet.dhtmlx.com/m4xka888	Message. Show Alert}}

- **dhx.confirm()** - to create a confirm message box 

~~~js
dhx.confirm({
	header:"Confirm Header",
    text:"Confirm text",
    buttons:["decline", "accept"],
    buttonsAlignment:"center"
});
~~~

{{editor	https://snippet.dhtmlx.com/iss7twe6	Message. Show Confirm}}

- **dhx.tooltip()** - to create a tooltip. The method takes two parameters:
    - **text** - (*string*) a string with the text of tooltip
    - **config** - (*object*) an object with [tooltip configuration properties](message/configuration.md#tooltip)
        
~~~js
dhx.tooltip("Current Value 1", {node: "first", position: "center"});
~~~

{{editor	https://snippet.dhtmlx.com/c6jm8if6	Message. Show Tooltip}}

### Configuration properties

There is a set of properties you can specify for message boxes to optimize their configuration for your needs. Read details in the [related article](message/configuration.md).



