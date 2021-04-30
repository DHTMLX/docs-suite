---
sidebar_label: Initialization
title: Initialization
---          

To initialize dhtmlxTree on a page, you need to take the following simple steps:

- [Download the Tree package](https://dhtmlx.com/docs/products/dhtmlxTree/download.shtml) and unpack it into a folder of your project
- [Include source files](#include-source-files)
- [Create a container](#create-a-container)
- [Initialize Tree](#initialize-tree) with the object constructor
- [Load data into Tree](#loaddataintotree)

~~~html
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with dhtmlxTree</title>         
        <script type="text/javascript" src="../../codebase/tree.js"></script>
        <link rel="stylesheet" href="../../codebase/tree.css">
    </head>
    <body>
        <div id="tree_container"></div>
        <script>
            // creating dhtmlxTree
            var tree = new dhx.Tree("tree_container",{
    			// config options
			});
        </script>
    </body>
</html>
~~~

{{editor	https://snippet.dhtmlx.com/oz4jd5hc	Tree. Basic Initialization}}

Include source files
--------------------

Create an HTML file and place full paths to JS and CSS files of dhtmlxTree into the header of the created file. The Tree component can be used standalone or as a part of the Suite library.

**If you use dhtmlxTree standalone**, you need to include 2 files:

- *tree.js*
- *tree.css*

~~~html
<script type="text/javascript" src="../../codebase/tree.js"></script>
<link rel="stylesheet" href="../../codebase/tree.css">
~~~


**If you use dhtmlxTree as a part of the Suite package**, you need to include JS/CSS files of the dhtmlxSuite library:

- suite.js
- suite.css

~~~html
<link type="text/css" href="../codebase/suite.css">
<script src="../codebase/suite.js" type="text/javascript"></script>
~~~



Create a container 
-----------------

Add a container for Tree and give it an id, for example "tree_container":

~~~html title="index.html"
<div id="tree_container"></div>
~~~

Initialize Tree
----------------------

Initialize Tree with the `dhx.Tree` object constructor. The constructor has two parameters:

- the HTML container for Tree,
- optional, an object with configuration properties (see the full list below). If this argument is not passed to the constructor, the settings will be default.

~~~js title="script.js"
// creating dhtmlxTree
var tree = new dhx.Tree("tree_container", {
    checkbox: true
});
~~~


### Configuration properties

There is a set of properties you can specify for Tree to optimize its configuration for your needs.

See the detailed information on configuration properties of Tree in the [Tree API overview](tree/api/api_overview.md#properties) article.

Load data into Tree
---------------------

Finally, you are to load the tree with data. You can load inline or external data into the tree.

- to load data from a local source, use the **parse()** method of the Tree Collection object:

~~~js
var tree = new dhx.Tree("tree_container",{
	 // config options
});

tree.data.parse(data);
~~~

{{editor	https://snippet.dhtmlx.com/oz4jd5hc	Tree. Basic Initialization}}

- to load data from an external file, use the **load()** method of the Tree Collection object:

~~~js
var tree = new dhx.Tree("tree_container",{
	// config options
});

tree.data.load("../common/dataset.json");
~~~

{{editor	https://snippet.dhtmlx.com/oz4jd5hc	Tree. Basic Initialization}}
