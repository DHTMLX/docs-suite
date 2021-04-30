---
sidebar_label: Initialization
title: Initialization
---          

To initialize dhtmlxSlider on a page, you need to take the following simple steps:

- [Download the Slider package](https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml) and unpack it into a folder of your project
- [Include source files](#include-source-files)
- [Create a container](#create-container)
- [Initialize Slider](#initialize-slider) with the object constructor

~~~html
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with dhtmlxSlider</title>         
        <script type="text/javascript" src="../../codebase/suite.js"></script>
        <link rel="stylesheet" href="../../codebase/suite.css">
    </head>
    <body>
        <div id="slider_container"></div>
        <script>
            // creating dhtmlxSlider 
            var slider = new dhx.Slider("slider_container", {
				min: 0,
				max: 100,
				step: 1,
				value: 30
			});
        </script>
    </body>
</html>
~~~

{{editor	https://snippet.dhtmlx.com/wipdmzbp	Slider.Basic Initialization}}

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

Add a container for Slider and give it an id, for example "slider_container":

~~~html title="index.html"
<div id="slider_container"></div>
~~~

Initialize Slider
----------------------

Initialize Slider with the `dhx.Slider` object constructor. The constructor has two parameters:

- the HTML container for Slider,
- optional, an object with configuration properties (see the full list below). If this argument is not passed to the constructor, the settings will be default.

~~~js title="script.js"
// creating dhtmlxSlider
var slider = new dhx.Slider("slider_container", {
    min: 0,
	max: 100,
	step: 1
});
~~~

{{editor	https://snippet.dhtmlx.com/wipdmzbp	Slider.Basic Initialization}}

### Configuration properties

There is a set of properties you can specify for Slider to optimize its configuration for your needs.

See the detailed information on configuration properties of Slider in the [Slider API overview](slider/api/api_overview.md#properties) article.

