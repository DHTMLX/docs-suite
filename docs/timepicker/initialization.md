---
sidebar_label: Initialization
title: Initialization
---          

To initialize dhtmlxTimePicker on a page, you need to take the following simple steps:

- [Download the TimePicker package](https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml) and unpack it into a folder of your project
- [Include source files](#includesourcefiles)
- [Create a container](#createcontainer)
- [Initialize TimePicker](#initializetimepicker) with the object constructor
- [Set initial value (optional)](#setinitialvalueoptional)

~~~html
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with dhtmlxTimePicker</title>         
        <script type="text/javascript" src="../../codebase/suite.js"></script>
        <link rel="stylesheet" href="../../codebase/suite.css">
    </head>
    <body>
        <div id="timepicker_container"></div>
        <script>
            // creating dhtmlxTimePicker 
            var timepicker = new dhx.Timepicker("timepicker_container", {
				// config options
			});
        </script>
    </body>
</html>
~~~

{{editor	https://snippet.dhtmlx.com/scq85iip	Timepicker. Basic Initialization}}


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

Add a container for TimePicker and give it an id, for example "timepicker_container":

~~~html title="index.html"
<div id="timepicker_container"></div>
~~~

Initialize TimePicker
----------------------

Initialize TimePicker with the **`dhx.Timepicker`** object constructor. The constructor has two parameters:

- the HTML container for TimePicker,
- optional, an object with configuration properties (see the full list below). If this argument is not passed to the constructor, the settings will be default.

~~~js title="script.js"
// creating dhtmlxTimePicker
var timepicker = new dhx.Timepicker("timepicker_container", {
    // config options
});
~~~

There is a set of properties you can specify for TimePicker to optimize its configuration for your needs. Read the details below.


### Configuration properties

You can specify the following properties in the configuration object of TimePicker:

todotw скорее всего можно просто сослаться на API
{{api

- timepicker/api/timepicker_controls_config.md - defines whether a timepicker is equipped with the Close and Save buttons
- timepicker/api/timepicker_css_config.md -  adds style classes for the component
- timepicker/api/timepicker_timeformat_config.md - defines what clock format is activated: the 12-hour or 24-hour one
- timepicker/api/timepicker_value_config.md - the time value to be set on initialization of the timepicker
- timepicker/api/timepicker_valueformat_config.md - defines the format of the value to be applied when working with TimePicker events
}}

The detailed information on configuration options can be found in the [](timepicker/configuration.md) article.

Set initial value (optional)
--------------------

You can set initial value for TimePicker using the **setValue()** method. It takes as a parameter the value to be set as a object Date, a string, or an array. Check details in the API reference.

~~~js
// set the value as a string
timepicker.setValue("00:39");
// set the value as a Date object
timepicker.setValue(new Date('January 10, 2019 17:54:00'));
// set the value as an array
timepicker.setValue([6,20,"AM"]);
~~~


