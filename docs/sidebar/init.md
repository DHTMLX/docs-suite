---
sidebar_label: Initialization
title: Initialization
---          

To add dhtmlxSidebar into an application, you need to take the following simple steps:

- [Download the Sidebar package](https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml) and unpack it into a folder of your project
- [Include source files](#include-source-files)
- [Create a container](#create-a-container)
- [Initialize Sidebar](#initialize-sidebar) with the object constructor
- [Load data into Sidebar](#load-data-into-sidebar)

~~~html
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with dhtmlxSidebar</title>         
        <script type="text/javascript" src="../../codebase/suite.js"></script>
        <link rel="stylesheet" href="../../codebase/suite.css">
    </head>
    <body>
        <div id="sidebar_container"></div>
        <script>
            // creating dhtmlxSidebar
            var sidebar = new dhx.Sidebar("sidebar_container");
        </script>
    </body>
</html>
~~~

{{editor	https://snippet.dhtmlx.com/x0qpt7pk	Sidebar. Basic Initialization}}

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

Add a container for the Sidebar and give it an id, e.g. "sidebar_container":

~~~html
<div id="sidebar_container"></div>
~~~

Initialize Sidebar
---------------------

Initialize Sidebar with the `dhx.Sidebar` object constructor. The constructor takes two parameters:

- the HTML object on the page that serves as the sidebar container
- an object with [configuration properties](#configuration-properties). If this argument is not passed to the constructor, the settings will be default

~~~js
var sidebar = new dhx.Sidebar("sidebar_container",{
	// config options
});
~~~

{{editor	https://snippet.dhtmlx.com/x0qpt7pk	Sidebar. Basic Initialization}}

### Configuration properties

The detailed information on Sidebar configuration options can be found in the [Sidebar API overview](sidebar/api/api_overview.md#properties) article.

Load data into Sidebar
------------------

There are two handy ways of loading data, i.e. a set of controls into Sidebar:

- from an external file with the help of the **load()** method of tree collection:

~~~js
var sidebar = new dhx.Sidebar("sidebar_container");
sidebar.data.load("../common/dataset.json");
~~~

{{editor	https://snippet.dhtmlx.com/mq4ggjmm	Sidebar. Init Load}}

- from a local source using the **parse()** method of tree collection:

~~~js
var data = [
    {
        "id": "dashboard",
        "value": "Dashboard",
        "icon": "mdi mdi-view-dashboard"
    },
    {
        "id": "statistics",
        "value": "Statistics",
        "icon": "mdi mdi-chart-line"
    },
    {
        "id": "reports",
        "value": "Reports",
        "icon": "mdi mdi-file-chart"
    }
];

var sidebar = new dhx.Sidebar("sidebar_container", {css: "dhx_widget--border_right" });
sidebar.data.parse(data);
~~~

Detailed information on loading data into Sidebar is given in the article [](sidebar/data_loading.md).

