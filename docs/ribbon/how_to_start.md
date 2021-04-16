---
sidebar_label: Initialization
title: Initialization
---          

To add dhtmlxRibbon into an application, you need to take the following simple steps:

- [Download the Ribbon package](https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml) and unpack it into a folder of your project
- [Include source files](#includesourcefiles)
- [Create a container](#createacontainer)
- [Initialize Ribbon](#initializeribbon) with the object constructor
- [Load data into Ribbon](#loaddataintoribbon)

~~~html
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with dhtmlxRibbon</title>         
        <script type="text/javascript" src="../../codebase/suite.js"></script>
        <link rel="stylesheet" href="../../codebase/suite.css">
    </head>
    <body>
        <div id="ribbon_container"></div>
        <script>
            // creating dhtmlxRibbon
            var ribbon = new dhx.Ribbon("ribbon_container");
        </script>
    </body>
</html>
~~~

{{editor	https://snippet.dhtmlx.com/1gd5tbcf	Ribbon. Basic Initialization}}

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
-------------------

Add a container for the Ribbon and give it an id, e.g. "ribbon_container":

~~~html
<div id="ribbon_container"></div>
~~~

Initialize Ribbon
---------------------

Initialize Ribbon with the `dhx.Ribbon` object constructor. The constructor takes two parameters:

- the HTML object on the page that serves as the toolbar container
- an object with configuration properties (see the full list below)

~~~js
var ribbon = new dhx.Ribbon("ribbon_container", {
    // config options
});
~~~

{{editor	https://snippet.dhtmlx.com/1gd5tbcf	Ribbon. Basic Initialization}}

### Configuration properties:

todotw скорее всего можно просто сослаться на API
{{api

- ribbon/api/ribbon_css_config.md - adds style classes to Ribbon
- ribbon/api/ribbon_data_config.md - specifies an array of data objects to set into Ribbon
- ribbon/api/ribbon_menucss_config.md - adds style classes to all containers of Ribbon controls with nested items

}}

Load data into Ribbon
------------------

There are two handy ways of loading data, i.e. a set of controls into Ribbon:

- from an external file with the help of the **load()** method of tree collection:

~~~js
var ribbon = new dhx.Ribbon("ribbon_container");
ribbon.data.load("../common/dataset.json");
~~~

- from a local source using the **parse()** method of tree collection:

~~~js
var data = [
	{
    	type: "block",
    	items: [
    		{
    			value: "New",
    			icon: "dxi dxi-file-outline",
                size: "small"              
            }
    	]
    },
    {
    	type: "block",
    	direction: "col",
    	items: [
    		{
    			value: "Add",
    			icon: "dxi dxi-plus",
    			size: "small"
    		},
    		{
            	value: "Remove",
            	icon: "dxi dxi-delete",
            	size: "small"
    		}
    	]
    }

];

var ribbon = new dhx.Ribbon("ribbon_container", {css: "dhx_widget--bordered"});
ribbon.data.parse(data);
~~~

Detailed information on loading data into Ribbon is given in the article [](ribbon/loading_json.md).

