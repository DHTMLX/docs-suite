---
sidebar_label: Initialization
title: JavaScript Calendar - Initialization 
description: You can explore the initialization of Calendar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Initialization

To use DHTMLX Calendar in your application, you need to take the following simple steps:

- [Download the DHTMLX Calendar package](https://dhtmlx.com/docs/products/dhtmlxCalendar/download.shtml) and unpack it into a folder of your project
- [Include source files](#include-source-files)
- [Initialize Calendar](#initialize-calendar) with the object constructor
- [Select initial date (optional)](#select-initial-date-optional)

~~~html
<!DOCTYPE html>
<html>
    <head>
        <title>How to start with DHTMLX Calendar</title>         
        <script type="text/javascript" src="../../codebase/calendar.js"></script>
        <link rel="stylesheet" href="../../codebase/calendar.css">
    </head>
    <body>
        <div id="calendar_container"></div>
        <script>
            // creating Calendar 
            const calendar = new dhx.Calendar("calendar_container");
        </script>
    </body>
</html>
~~~

## Include source files

[Download the DHTMLX Calendar package](https://dhtmlx.com/docs/products/dhtmlxCalendar/download.shtml) and unpack it into a folder of your project.

Create an HTML file and place full paths to JS and CSS files of DHTMLX Calendar into the header of the created file. The Calendar component can be used standalone or as a part of the Suite library.

**If you use DHTMLX Calendar standalone**, you need to include 2 files:

- *calendar.js*
- *calendar.css*

~~~html title="index.html"
<link type="text/css" href="../codebase/calendar.css">
<script src="../codebase/calendar.js" type="text/javascript"></script>
~~~

**If you use DHTMLX Calendar as a part of the Suite package**, you need to include JS/CSS files of the DHTMLX Suite library:

- suite.js
- suite.css

~~~html title="index.html"
<link type="text/css" href="../codebase/suite.css">
<script src="../codebase/suite.js" type="text/javascript"></script>
~~~

## Initialize Calendar

You can initialize Calendar in a container or in a popup.

### Initialization in a container

In this case you need to add a container for Calendar and give it an id, for example "calendar_container":

~~~html title="index.html"
<div id="calendar_container"></div>
~~~

and initialize Calendar with the `dhx.Calendar` object constructor like this:

~~~js title="index.js"
// creating Calendar
const calendar = new dhx.Calendar("calendar_container", {
    css: "dhx_widget--bordered",
   // more config options
});
~~~

**Related sample**: [Calendar. Initialization](https://snippet.dhtmlx.com/xcw19e52)

The constructor takes two parameters: 

- the HTML container for Calendar
- an object with configuration properties ([see the full list below](#configuration-properties)). If this argument is not passed to the constructor, the settings will be default.

### Initialization in a popup

This variant presupposes that you create a popup first and then attach a calendar into it, thus creating a date picker.

<iframe src="https://snippet.dhtmlx.com/mj7jr6ro?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

Read the details in the [DatePicker](calendar/datepicker.md) article.

### Configuration properties

Check the full list of Calendar configuration properties in the [Calendar API overview](calendar/api/api_overview.md#properties) article.

## Select initial date (optional)

You can specify what date should be selected in the calendar before initialization of the component via the [](calendar/api/calendar_value_config.md) configuration option:

~~~js
const calendar = new dhx.Calendar("calendar_container", {
    value: new Date(2019,1,10)
});
~~~

**Related sample**: [Calendar. Date initialization](https://snippet.dhtmlx.com/fyg6l65t)

If you need to select a specific date after initialization of Calendar, use the [](calendar/api/calendar_setvalue_method.md) method:

~~~js
const calendar = new dhx.Calendar("calendar_container", {
    // configuration options
});
calendar.setValue(new Date(2022,1,10));
~~~

**Related sample**: [Calendar. Preset selected date](https://snippet.dhtmlx.com/vmg11002)
