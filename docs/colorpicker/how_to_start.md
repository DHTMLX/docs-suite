---
sidebar_label: Initialization
title: Initialization
---          

There are two ways of initializing dhtmlxColorPicker: inside a container or inside a popup. Both ways are described below in detail.

In general, to create dhtmlxColorPicker on a page, you need to take the following simple steps:

- [Download the dhtmlxColorPicker package](https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml) and unpack it into a folder of your project
- [Include source files](#include-source-files)
- [Initialize ColorPicker](#initialize-colorpicker) with the object constructor    
- [Set initially selected color (optional)](#selectinitialcoloroptional)
    
   
~~~html
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with dhtmlxColorPicker</title>         
        <script type="text/javascript" src="../../codebase/suite.js"></script>
        <link rel="stylesheet" href="../../codebase/suite.css">
    </head>
    <body>
    	<div id="colorpicker_container"></div>
        <script>
            // creating dhtmlxColorPicker 
            var colorpicker = new dhx.ColorPicker("colorpicker_container",{
                // config options
			});
        </script>
    </body>
</html>
~~~

{{editor    https://snippet.dhtmlx.com/ezk8rk4m	Colorpicker. Basic Initialization}}
  
Include source files 
-----------------------

Create an HTML file and place full paths to JS and CSS files of the dhtmlxSuite library into the header of the file. The files are:

- *suite.js*
- *suite.css*

~~~html
<script type="text/javascript" src="../../codebase/suite.js"></script>
<link rel="stylesheet" href="../../codebase/suite.css">
~~~


Initialize ColorPicker
----------------------

You can initialize ColorpIcker in a container or in a popup.

### Initialization in a container

In this case you initialize ColorPicker with the `dhx.Colorpicker` object constructor. The constructor takes two parameters: 

- the HTML container for ColorPicker,

~~~html
<div id="colorpicker_container"></div>
~~~

- an object with configuration properties (see the full list below). If this argument is not passed to the constructor, the settings will be default.

~~~js
// creating dhtmlxColorPicker
var colorpicker = new dhx.ColorPicker("colorpicker_container",{
   // config options
});
~~~

{{editor    https://snippet.dhtmlx.com/ezk8rk4m	Colorpicker. Basic Initialization}}


### Initialization in a popup

This variant presupposes that you create a popup first and then attach a colorpicker into it. 

- use corresponding object constructors to create a colorpicker and a popup objects. Note that in this case *null* is used instead of container for ColorPicker:

~~~js
var colorpicker = new dhx.Colorpicker(null, { customColors: ["#f2f2f2"] });
var popup = new dhx.Popup();
~~~

- attach the colorpicker to the popup using the [](popup/api/popup_attach_method.md) method of Popup:

~~~js
popup.attach(colorpicker);
~~~

- use the [](popup/api/popup_show_method.md) / [](popup/api/popup_hide_method.md) methods of Popup to control when a popup with color picker should be shown/hidden. For example:

~~~js
popup.show("showButton");

var colorExample = document.querySelector(".dhx_color-sample");
	colorpicker.events.on("colorChange", function (color) {
		colorExample.style.backgroundColor = color;
		popup.hide();
});
~~~

{{editor    https://snippet.dhtmlx.com/kw3e0h4j	Colorpicker. Colorpicker Inside Popup}}

### Configuration properties

The detailed information on ColorPicker configuration options can be found in the [Colorpicker API overview](colorpicker/api/api_overview.md#properties) article.

Select initial color (optional)
----------------

You can specify the color that should be selected in the palette after ColorPicker initialization with the help of the [](colorpicker/api/colorpicker_setvalue_method.md) method:

~~~js
var colorpicker = new dhx.ColorPicker({
   // config options
});
colorpicker.setValue("#BDF0E9");
~~~

{{editor    https://snippet.dhtmlx.com/h6oc5qsq	Colorpicker. Set Value}}
