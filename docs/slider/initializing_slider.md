---
sidebar_label: Initialization
title: Initialization
---          

To initialize dhtmlxSlider on a page, you need to take the following simple steps:

- [Download the Slider package](https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml) and unpack it into a folder of your project
- [Include source files](#includesourcefiles)
- [Create a container](#createcontainer)
- [Initialize Slider](#initializeslider) with the object constructor

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

There is a set of properties you can specify for Slider to optimize its configuration for your needs. Read the details below.

Configuration properties
------------------------

You can specify the following properties in the configuration object of Slider:

todotw скорее всего можно просто сослаться на API
{{api

- slider/api/slider_css_config.md - adds style classes for the component
- slider/api/slider_helpmessage_config.md - adds an icon with a question mark next to Slider
- slider/api/slider_hiddenlabel_config.md - adds a hidden label for a Slider that will be used while sending a form to the server
- slider/api/slider_inverse_config.md - enables/disables the inverse slider mode
- slider/api/slider_label_config.md - specifies the label of a slider
- slider/api/slider_labelposition_config.md - defines the position of a label of a slider: "left"|"top"
- slider/api/slider_labelwidth_config.md - sets the width of a label
- slider/api/slider_majortick_config.md - sets interval of rendering numeric values on the slider scale
- slider/api/slider_max_config.md - the maximal value of a slider, 100 by default
- slider/api/slider_min_config.md - the minimal value of a slider, 0 by default
- slider/api/slider_mode_config.md - the direction of the Slider scale, "horizontal" by default
- slider/api/slider_range_config.md - enables/disables the possibility to select a range of values on the slider
- slider/api/slider_step_config.md - the step the slider thumb will be moved with, 1 by default
- slider/api/slider_tick_config.md - sets the interval of steps for rendering the slider scale
- slider/api/slider_ticktemplate_config.md - sets a template for rendering values on the scale
- slider/api/slider_tooltip_config.md - enables a tooltip on hovering over the slider thumb, true by default
- slider/api/slider_value_config.md - the value the thumb will be set at on initialization of the slider

}}

The detailed information on configuration options can be found in the slider/configuring_slider.md article.