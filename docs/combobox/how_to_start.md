---
sidebar_label: Initialization
title: Initialization
---          

This article gives you detailed instructions on how to create dhtmlxCombo on a page. Follow the steps below:

- [Download the dhtmlxComboBox package](https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml) and unpack it into a folder of your project
- [Include source files](#include-source-files)
- [Create a container](#createacontainer)
- [Initialize ComboBox](#initializecombo) with the object constructor
- [Load data into ComboBox](#loaddataintocombobox)

~~~html title="index.html"
<!DOCTYPE html>
<html>
	<head>
    	<title>How to Start with dhtmlxComboBox</title>
		<link rel="stylesheet" type="text/css" href="/codebase/suite.css">
        <script type="text/javascript" src="/codebase/suite.js"></script>
   </head>
   <body>
        <div id="combo_container"></div>
        <script>            
            var combo = new dhx.Combobox("combo_container", {// configuration});
        </script>
    </body>
</html>
~~~

{{editor    https://snippet.dhtmlx.com/69jnq5cn	Combobox. Basic Initialization}}

Include source files
----------------

Create an HTML file and place full paths to JS and CSS files of the dhtmlxSuite library into the header of the file. The files are:

- *suite.js*
- *suite.css*

~~~html title="index.html"
<script type="text/javascript" src="../../codebase/suite.js"></script>
<link rel="stylesheet" href="../../codebase/suite.css">
~~~

Create a container 
-------------

Add a container for ComboBox and give it an id, for example "combo_container":


~~~html title="index.html"
<div id="combo_container"></div>
~~~
 
Initialize ComboBox
-----------

To initialize dhtmlxComboBox, you should use the `dhx.Combobox` constructor. The constructor function takes two parameters:

- a container to place a Combo Box into. The one we have created at the previous step.
- an object with configuration properties. See the full list below.

~~~js
var combo = new dhx.Combobox("combo_container", {// config options});
~~~

{{editor    https://snippet.dhtmlx.com/69jnq5cn	Combobox. Basic Initialization}}

### Configuration properties

See the detailed description of Combo configuration options in the [Combobox API overview](combobox/api/api_overview.md#properties) article.

Load data into ComboBox
-------------

There are two handy ways of loading data, i.e. a set of options into ComboBox:

- from an external file with the help of the [load()](data_collection/api/datacollection_load_method.md) method of Data collection:

~~~js
var combo = new dhx.Combobox("combo_container");
combo.data.load("../common/dataset.json");
~~~

- from a local source using the [parse()](data_collection/api/datacollection_parse_method.md) method of Data collection:

~~~js
var countries = [
    {
        value: "Austria",
        src: "../common/flags/at.png"
    },
    {
        value: "Belgium",
        src: "../common/flags/be.png"
    },
    {
        value: "Bulgaria",
        src: "../common/flags/bg.png"
    },
    {
        value: "Cyprus",
        src: "../common/flags/cy.png"
    }
]

var combo = new dhx.Combobox("combo_container");
combo.data.parse(countries);
~~~

{{editor    https://snippet.dhtmlx.com/69jnq5cn	Combobox. Basic Initialization}}

Detailed information on loading data into ComboBox is given in the article combo/adding_options.md.








