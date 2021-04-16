---
sidebar_label: Initialization
title: Initialization
---          

To initialize dhtmlxList on a page, you need to take the following simple steps:

- [Download the List package](https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml) and unpack it into a folder of your project
- [Include source files](#includesourcefiles)
- [Create a container](#createacontainer)
- [Initialize List](#initializelist) with the object constructor
- [Load data into List](#loaddataintolist)

~~~html
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with dhtmlxList</title>         
        <script type="text/javascript" src="../../codebase/suite.js"></script>
        <link rel="stylesheet" href="../../codebase/suite.css">
    </head>
    <body>
        <div id="list_container"></div>
        <script>
            // creating dhtmlxList
            var list = new dhx.List("list_container",{
    			itemHeight: 30
			});
        </script>
    </body>
</html>
~~~


{{editor	https://snippet.dhtmlx.com/anj2keoc	List. Basic Initialization}}

Include source files
--------------------

Create an HTML file and place full paths to JS and CSS files of the dhtmlxSuite library into the header of the file. The files are:

- *suite.js*
- *suite.css*

~~~html
<script type="text/javascript" src="../../codebase/suite.js"></script>
<link rel="stylesheet" href="../../codebase/suite.css">
~~~


Create a container 
-----------------

Add a container for List and give it an id, for example "list_container":

~~~html title="index.html"
<div id="list_container"></div>
~~~

Initialize List
----------------------

Initialize List with the `dhx.List` object constructor. The constructor has two parameters:

- the HTML container for List,
- optional, an object with configuration properties (see the full list below). If this argument is not passed to the constructor, the settings will be default.

~~~js title="script.js"
// creating dhtmlxList
var list = new dhx.List("list_container", {
    itemHeight:30
});
~~~

{{editor	https://snippet.dhtmlx.com/anj2keoc	List. Basic Initialization}}

There is a set of properties you can specify for List to optimize its configuration for your needs. Read the details below.


### Configuration properties


You can specify the following properties in the configuration object of List:

todotw скорее всего можно просто сослаться на API
{{api

- list/api/list_css_config.md - adds a CSS class(es) to the component
- list/api/list_data_config.md - specifies an array of data objects to set into the dataview
- list/api/list_dragcopy_config.md - defines that an item is copied to a target during drag-n-drop
- list/api/list_dragmode_config.md - enables drag-n-drop in List
- list/api/list_editable_config.md - enables editing in List
- list/api/list_eventhandlers_config.md - adds event handlers to HTML elements of a custom template of List items
- list/api/list_height_config.md - sets the height of List
- list/api/list_itemheight_config.md - sets the height of a List item
- list/api/list_keynavigation_config.md - enables/disables navigation in List by arrow keys
- list/api/list_multiselection_config.md - enables selection of multiple List items
- list/api/list_selection_config.md - enables selection of a List item
- list/api/list_template_config.md - specifies a template for List items
- list/api/list_virtual_config.md - enables dynamic rendering of List items

}}

Load data into List
---------------------

Finally, you are to load the list with data. You can load inline or external data into the list.

- to load data from a local source, use the **parse()** method of the Data Collection object:

~~~js
var list = new dhx.List("list_container",{
	 itemHeight:30
});

list.data.parse(data);
~~~

{{editor	https://snippet.dhtmlx.com/0xmyywi1	List. Parse Data}}

- to load data from an external file, use the **load()** method of the Data Collection object:

~~~js
var list = new dhx.List("list_container",{
	itemHeight:30
});

list.data.load("../common/dataset.json");
~~~

{{editor	https://snippet.dhtmlx.com/1it5kfhq	List. Load Data}}