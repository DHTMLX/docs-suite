---
sidebar_label: Initialization
title: Initialization
---          

To initialize dhtmlxTree on a page, you need to take the following simple steps:

- [Download the Tree package](https://dhtmlx.com/docs/products/dhtmlxTree/download.shtml) and unpack it into a folder of your project
- [Include source files](#includesourcefiles)
- [Create a container](#createacontainer)
- [Initialize Tree](#initializetree) with the object constructor
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

There is a set of properties you can specify for Tree to optimize its configuration for your needs. Read the details below.


### Configuration properties


You can specify the following properties in the configuration object of List:

todotw скорее всего можно просто сослаться на API
{{api

- tree/api/tree_autoload_config.md - defines that the structure of a tree is being built while opening items
- tree/api/tree_checkbox_config.md - adds checkboxes to tree items
- tree/api/tree_css_config.md - adds a CSS class(es) to the component
- tree/api/tree_data_config.md - sets a data set for a tree
- tree/api/tree_dragcopy_config.md - defines that an item is copied to a target during drag-n-drop
- tree/api/tree_dragmode_config.md - enables drag-n-drop in Tree
- tree/api/tree_dropbehaviour_config.md - defines the behaviour of a dragged item
- tree/api/tree_editable_config.md - enables editing of Tree items on a double-click
- tree/api/tree_icon_config.md - allows adding custom icons for tree items
- tree/api/tree_keynavigation_config.md - enables key navigation in a tree
- tree/api/tree_rootid_config.md - sets an id for the root element
- tree/api/tree_selection_config.md - enables selection of Tree items

}}

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
