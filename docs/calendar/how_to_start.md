---
sidebar_label: Initialization
title: JavaScript Calendar - Initialization 
hide_title: true
description: You can explore the initialization of Calendar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Initialization

To use dhtmlxCalendar in your application, you need to take the following simple steps:

- [Download the dhtmlxCalendar package](https://dhtmlx.com/docs/products/dhtmlxCalendar/download.shtml) and unpack it into a folder of your project
- [Include source files](#include-source-files)
- [Initialize Calendar](#initialize-calendar) with the object constructor
- [Select initial date (optional)](#select-initial-date-optional)

~~~html
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with dhtmlxCalendar</title>         
        <script type="text/javascript" src="../../codebase/calendar.js"></script>
        <link rel="stylesheet" href="../../codebase/calendar.css">
    </head>
    <body>
        <div id="calendar_container"></div>
        <script>
            // creating dhtmlxCalendar 
            var calendar = new dhx.Calendar("calendar_container");
        </script>
    </body>
</html>
~~~

**Related sample**: [Calendar. Basic Initialization](https://snippet.dhtmlx.com/xcw19e52)

## Include source files

Create an HTML file and place full paths to JS and CSS files of dhtmlxCalendar into the header of the created file. The Calendar component can be used standalone or as a part of the Suite library.

**If you use dhtmlxCalendar standalone**, you need to include 2 files:

- *calendar.js*
- *calendar.css*

~~~html
<link type="text/css" href="../codebase/calendar.css">
<script src="../codebase/calendar.js" type="text/javascript"></script>
~~~

**If you use dhtmlxCalendar as a part of the Suite package**, you need to include JS/CSS files of the dhtmlxSuite library:

- suite.js
- suite.css

~~~html
<link type="text/css" href="../codebase/suite.css">
<script src="../codebase/suite.js" type="text/javascript"></script>
~~~

## Initialize Calendar

You can initialize Calendar in a container or in a popup.

### Initialization in a container

In this case you initialize Calendar with the `dhx.Calendar` object constructor. The constructor takes two parameters: 

- the HTML container for Calendar,

~~~html title="index.html"
<div id="calendar_container"></div>
~~~

- an object with configuration properties (see the full list below). If this argument is not passed to the constructor, the settings will be default.

~~~js title="script.js"
// creating dhtmlxCalendar
var calendar = new dhx.Calendar("calendar_container",{
   // config options
});
~~~

**Related sample**: [Calendar. Basic Initialization](https://snippet.dhtmlx.com/xcw19e52)

### Initialization in a popup

This variant presupposes that you create a popup first and then attach a calendar into it, thus creating a [date picker](calendar/datepicker.md).

![](../assets/calendar/date_picker.png)

- create an input to enter a date into and give it the id "date-input":

~~~html
<input type="text" id="date-input" style="width: 200px;" readonly/>
~~~

- use corresponding object constructors to create a calendar and a popup objects. Note that in this case *null* is used instead of container for Calendar:

~~~js
var calendar = new dhx.Calendar(null, {dateFormat: "%d/%m/%y"});
var popup = new dhx.Popup();
~~~

- attach the calendar to the popup using the [](popup/api/popup_attach_method.md) method of Popup:

~~~js
popup.attach(calendar);
~~~

- use the [](popup/api/popup_show_method.md) method of Popup inside a click handler to define that a popup with calendar will open on click in the "date-input" input:

~~~js
var dateInput = document.getElementById("date-input");
dateInput.addEventListener("click", function() {
	popup.show(dateInput);
});
~~~

- define the logic of closing the popup with calendar using the [](popup/api/popup_hide_method.md) method of Popup. For example, on selecting a new date in the calendar:

~~~js
calendar.events.on("change", function() {
	dateInput.value = calendar.getValue();
	popup.hide();
});
~~~

**Related sample**: [Calendar. Date Picker](https://snippet.dhtmlx.com/mj7jr6ro)

### Configuration properties

The detailed information on Calendar configuration options can be found in the [Calendar API overview](calendar/api/api_overview.md#properties) article.

## Select initial date (optional)

You can specify what date should be selected in the calendar both before and after initialization of the component:

- via the [](calendar/api/calendar_value_config.md) configuration option:

~~~js
var calendar = new dhx.Calendar("calendar_container", {
    value: new Date(2019,1,10)
});
~~~

- with the help of the [](calendar/api/calendar_setvalue_method.md) method:

~~~js
var calendar = new dhx.Calendar("calendar_container", {
    // configuration options
});
calendar.setValue(new Date(2019,1,10));
~~~

**Related sample**: [Calendar. Preset Selected Date](https://snippet.dhtmlx.com/vmg11002)
