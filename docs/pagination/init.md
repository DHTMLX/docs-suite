---
sidebar_label: Initialization
title: Initialization
---          

To add dhtmlxPagination into an application, you need to take the following simple steps:

- [Download the dhtmlxPagination](https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml) package and unpack it into a folder of your project
- [Include source files](#includesourcefiles)
- [Create two containers](#createcontainers)
- [Add a related component](#addarelatedwidget)
- [Initialize Pagination](#initializepagination) with the object constructor

~~~html
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with dhtmlxPagination</title>         
        <script type="text/javascript" src="../../codebase/suite.js"></script>
        <link rel="stylesheet" href="../../codebase/suite.css">
    </head>
    <body>
        <div id="widget_container"></div>
        <div id="pagination_container"></div>
        <script>
            // creating a related component
            const widget = new dhx.List("widget_container", {
				css: "dhx_widget--bordered",
				keyNavigation: true
			});

			widget.data.parse(widget_data);

            // creating dhtmlxPagination
			const pagination = new dhx.Pagination("pagination_container", {
				css: "dhx_widget--bordered",
				data: widget.data
			});
        </script>
    </body>
</html>
~~~

[Pagination. Pagination with List](https://snippet.dhtmlx.com/6sju9jl5)

[Pagination. Pagination with Dataview](https://snippet.dhtmlx.com/xmf0lx8z)

[Pagination. Pagination with Tree](https://snippet.dhtmlx.com/a0jhoipw)

[Pagination. Pagination with Grid](https://snippet.dhtmlx.com/0sku3cfa)

[Pagination. Pagination with TreeGrid](https://snippet.dhtmlx.com/uxz8lh7m)

Include source files
--------------------

Create an HTML file and place full paths to JS and CSS files of the dhtmlxSuite library into the header of the file. The files are:

- *suite.js*
- *suite.css*

~~~html
<script type="text/javascript" src="../../codebase/suite.js"></script>
<link rel="stylesheet" href="../../codebase/suite.css">
~~~

Create containers
-------------------

Add two containers:

- for a related component and give it an id, e.g. "widget_container"
- for Pagination and give it an id, e.g. "pagination_container":

~~~html title="index.html"
<div id="widget_container"></div>
<div id="pagination_container"></div>
~~~

Add a related widget
---------------------------------

{{note dhtmlxPagination can be used in conjunction with data components like [List](list/index.md), [DataView](dataview/index.md), [Tree](tree/index.md), [Grid](grid/index.md), or [TreeGrid](treegrid/index.md).}}

Choose the widget you want to link to the Pagination component, for example, dhtmlxList. 

1\. Initialize the widget with the object constructor, like this: 

~~~js title="script.js"
// creating a related dhtmlxList widget
const widget = new dhx.List("widget_container", {
    css: "dhx_widget--bordered",
    keyNavigation: true
});
~~~

The constructor has two parameters:

- the HTML container for List,
- an object with the List configuration properties (see the full list [here](list/api/refs/list_properties.md)). 

2\. Load data into the widget:

~~~js title="script.js"
// loading data into the created dhtmlxList 
widget.data.parse(widget_data);
~~~

 

Initialize Pagination
---------------------

Initialize pagination with the *dhx.Pagination* object constructor. The constructor takes two parameters:

- the HTML container for Pagination, 
- optional, an object with configuration properties (see the full list below). If this argument is not passed to the constructor, the settings will be default.

~~~js title="script.js"
// creating dhtmlxPagination
const pagination = new dhx.Pagination("pagination_container", {
	css: "dhx_widget--bordered",
	data: widget.data
});
~~~

There is a set of properties you can specify for Pagination to optimize its configuration for your needs. Read the details below.

### Configuration properties

There is a list of properties that you can specify in the Pagination configuration object (the second parameter of the constructor function):

todotw скорее всего можно просто сослаться на API
{{api

- pagination/api/pagination_css_config.md - adds style classes to the pagination
- pagination/api/pagination_data_config.md - the data collection of a widget to set into the pagination
- pagination/api/pagination_inputwidth_config.md - optional, sets the width for the input of the pagination
- pagination/api/pagination_page_config.md - optional, the index of the initial page set in the pagination
- pagination/api/pagination_pagesize_config.md - optional, the number of items displayed per page

}}
