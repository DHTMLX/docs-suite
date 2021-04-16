---
sidebar_label: Initialization
title: Initialization
---          

To initialize dhtmlxDataView on a page, you need to take the following simple steps:

- [Download the DataView package](https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml) and unpack it into a folder of your project
- [Include source files](#includesourcefiles)
- [Create a container](#createacontainer)
- [Initialize DataView](#initializedataview) with the object constructor
- [Load data into DataView](#loaddataintodataview)

~~~html title="index.html"
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with dhtmlxDataView</title>         
        <script type="text/javascript" src="../../codebase/suite.js"></script>
        <link rel="stylesheet" href="../../codebase/suite.css">
    </head>
    <body>
        <div id="dataview_container"></div>
        <script>
            // creating dhtmlxDataView
            var dataview = new dhx.DataView("dataview_container",{
    			itemsInRow: 5
			});
        </script>
    </body>
</html>
~~~

{{editor    https://snippet.dhtmlx.com/7rjmp5ol	Dataview. Basic Initialization}}

Include source files
--------------------

Create an HTML file and place full paths to JS and CSS files of the dhtmlxSuite library into the header of the file. The files are:

- suite.js
- suite.css

~~~html title="index.html"
<script type="text/javascript" src="../../codebase/suite.js"></script>
<link rel="stylesheet" href="../../codebase/suite.css">
~~~

Create a container 
-----------------

Add a container for DataView and give it an id, for example "dataview_container":

~~~html title="index.html"
<div id="dataview_container"></div>
~~~

Initialize DataView
---------------------------------

Initialize DataView with the `dhx.DataView` object constructor. The constructor has two parameters:

- the HTML container for DataView,
- optional, an object with configuration properties (see the full list below). If this argument is not passed to the constructor, the settings will be default.

~~~js title="script.js"
// creating dhtmlxDataView
var dataview = new dhx.DataView("dataview_container", {
    itemsInRow: 5
});
~~~

There is a set of properties you can specify for DataView to optimize its configuration for your needs. Read the details below.

### Configuration properties


You can specify the following properties in the configuration object of DataView:

todotw скорее всего можно просто сослаться на API
{{api

- dataview/api/dataview_css_config.md - adds a CSS class(es) to the component
- dataview/api/dataview_data_config.md - specifies an array of data objects to set into the dataview 
- dataview/api/dataview_dragcopy_config.md - defines that an item is copied to a target during drag-n-drop
- dataview/api/dataview_dragmode_config.md - enables drag-n-drop in DataView
- dataview/api/dataview_editable_config.md - enables editing in DataView
- dataview/api/dataview_eventhandlers_config.md - adds event handlers to HTML elements of a custom template of DataView items
- dataview/api/dataview_gap_config.md - sets margins for DataView items
- dataview/api/dataview_height_config.md - sets the height of Dataview
- dataview/api/dataview_itemheight_config.md - sets the height of an item
- dataview/api/dataview_itemsinrow_config.md - specifies the number of data items in a row
- dataview/api/dataview_keynavigation_config.md - enables/disables navigation in DataView by arrow keys
- dataview/api/dataview_multiselection_config.md - enables selection of multiple DataView items
- dataview/api/dataview_selection_config.md - enables selection of DataView items
- dataview/api/dataview_template_config.md - specifies a template for DataView items

}}

Load data into DataView
---------------------

Finally, you are to load DataView with data. You can load inline or external data into DataView.

- to load data from a local source, use the [](data_collection/api/parse.md) method of the Data Collection object:

~~~js
var dataview = new dhx.DataView("dataview_container",{
	 itemsInRow: 5
});

dataview.data.parse(data);
~~~

- to load data from an external file, use the [](data_collection/api/load.md) method of the Data Collection object:

~~~js
var dataview = new dhx.DataView("dataview_container",{
	itemsInRow: 5
});

dataview.data.load("../common/dataset.json");
~~~

{{editor    https://snippet.dhtmlx.com/7rjmp5ol	Dataview. Basic Initialization}}

