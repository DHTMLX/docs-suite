---
sidebar_label: Data Loading
title: Data Loading
---          

There are several ways of loading DataView items:

- from an external file
- from a local data source

First, you need to prepare a data set that will be loaded into DataView.

Preparing data set
-------------------

dhtmlxDataView expects loaded data in the JSON format. Here is an example of an appropriate data set:

~~~js
var dataset = [
  	{"value":"Learning DHTMLX Suite UI", "id":"1"},
    {"value": "Unlocking Android", "id":"2"},
    {"value": "Android in Action, Second Edition", "id":"3"},
    {"value": "Zend Framework in Action", "id":"4"},
]
~~~

{{editor	https://snippet.dhtmlx.com/s547z4xr	Dataview. Config Data}}

Each object in the data set contains a number of *key:value* pairs that represent attributes of DataView items. 
You can specify your own template of rendering DataView items with the help of the [](dataview/api/dataview_template_config.md) configuration option.


External data loading
--------------------

To load data from an external file, make use of the **load** method of Data Collection. It takes the URL of the file with data as a parameter:

~~~js
var dataview = new dhx.DataView("dataview_container");
dataview.data.load("../common/dataset.json");
~~~

{{editor	https://snippet.dhtmlx.com/7rjmp5ol	Dataview. Basic Initialization}}

The component will make an AJAX call and expect the remote URL to provide valid JSON data.

Data loading is asynchronous, so you need to wrap any after-loading code into a promise:

~~~js
dataview.data.load("/some/data").then(function(){
   // some logic here
});
~~~


Loading from local source
------------------

To load data from a local data source, use the **parse** method of Data Collection. Pass [a predefined data set](#preparingdataset) as a parameter of this method:

~~~js
var dataview = new dhx.DataView("dataview_container");
dataview.data.parse(dataset);
~~~

{{editor	https://snippet.dhtmlx.com/7rjmp5ol	Dataview. Basic Initialization}}

Saving and restoring state
----------------------------

To save the current state of a dataview, use the **serialize** method of Data Collection. It converts the data of a dataview into an array of JSON objects. 
Each JSON object contains a set of *key:value* pairs that represent attributes of DataView items.

~~~js
var state = dataview1.data.serialize();
~~~

Then you can parse the data stored in the saved state array to a different dataview. For example:

~~~js
// creating a new dataview
var dataview2 = new dhx.DataView(document.body);
// parsing the state of dataview1 into dataview2
dataview2.data.parse(state);
~~~
