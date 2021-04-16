---
sidebar_label: Initialization
title: Initialization
---          

This article gives you detailed instructions on how to create dhtmlxCombo on a page. Follow the steps below:

- [Download the dhtmlxComboBox package](https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml) and unpack it into a folder of your project
- [Include source files](#includesourcefiles)
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

todotw скорее всего можно просто сослаться на API
{{api

- combo/api/combobox_css_config.md - adds style classes for the component
- combo/api/combobox_data_config.md - specifies an array of data objects to set into the combobox
- combo/api/combobox_disabled_config.md - makes ComboBox disabled
- combo/api/combobox_filter_config.md -  sets a custom function for filtering ComboBox options
- combo/api/combobox_helpmessage_config.md - adds an icon with a question mark next to the Combo input
- combo/api/combobox_hiddenlabel_config.md - adds a hidden label for a ComboBox input that will be used while sending a form to the server
- combo/api/combobox_itemheight_config.md - sets the height of a cell in the list of options
- combo/api/combobox_itemscount_config.md - shows the total number of selected options
- combo/api/combobox_label_config.md - adds a label for ComboBox
- combo/api/combobox_labelposition_config.md - defines the position of a label of a combobox: "left"|"top"
- combo/api/combobox_labelwidth_config.md - sets the width of a label
- combo/api/combobox_listheight_config.md - sets the height of the list of options
- combo/api/combobox_multiselection_config.md - enables selection of multiple options in ComboBox
- combo/api/combobox_placeholder_config.md - sets a placeholder in the input of ComboBox
- combo/api/combobox_readonly_config.md - makes ComboBox readonly (it is only possible to select options from the list, without entering words in the input)
- combo/api/combobox_selectallbutton_config.md - defines whether the Select All button should be shown
- combo/api/combobox_template_config.md - sets a template of displaying options in the popup list
- combo/api/combobox_value_config.md - specifies the values that will appear in the input on initialization of the combobox
- combo/api/combobox_virtual_config.md - enables dynamic loading of data on scrolling the list of options

}}

See the detailed description of Combo configuration options in the [](combo/configuration.md) article.

Load data into ComboBox
-------------

There are two handy ways of loading data, i.e. a set of options into ComboBox:

- from an external file with the help of the [](data_collection/api/load.md) method of Data collection:

~~~js
var combo = new dhx.Combobox("combo_container");
combo.data.load("../common/dataset.json");
~~~

- from a local source using the [](data_collection/api/parse.md) method of Data collection:

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








