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

### Configuration properties

There is a set of properties you can specify for DataView to optimize its configuration for your needs.

The detailed information on DataView configuration options can be found in the [Dataview API overview](dataview/api/api_overview.md#properties) article.

Load data into DataView
---------------------

Finally, you are able to load DataView with data. You can load inline or external data into DataView.

- to load data from a local source, use the [](data_collection/api/datacollection_parse_method.md) method of the Data Collection object:

~~~js
var dataview = new dhx.DataView("dataview_container",{
	 itemsInRow: 5
});

dataview.data.parse(data);
~~~

- to load data from an external file, use the [](data_collection/api/datacollection_load_method.md) method of the Data Collection object:

~~~js
var dataview = new dhx.DataView("dataview_container",{
	itemsInRow: 5
});

dataview.data.load("../common/dataset.json");
~~~

{{editor    https://snippet.dhtmlx.com/7rjmp5ol	Dataview. Basic Initialization}}

