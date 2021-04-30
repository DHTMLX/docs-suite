---
sidebar_label: Initialization
title: Initialization
---          

To initialize dhtmlxList on a page, you need to take the following simple steps:

- [Download the List package](https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml) and unpack it into a folder of your project
- [Include source files](#include-source-files)
- [Create a container](#create-a-container)
- [Initialize List](#initialize-list) with the object constructor
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

### Configuration properties

There is a set of properties you can specify for List to optimize its configuration for your needs.

The detailed information on List configuration options can be found in the [List API overview](list/api/api_overview.md#properties) article.

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