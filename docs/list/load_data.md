---
sidebar_label: Data Loading
title: Data Loading
---          

There are several ways of loading List items:

- from an external file
- from a local data source

First, you need to prepare a data set that will be loaded into List.

Preparing data set
-------------------

dhtmlxList expects loaded data in the JSON format. Here is an example of an appropriate data set:

~~~js
var dataset = [
	{"value": "1st item", "id": "1"},
    {"value": "2nd item", "id": "2"},
    {"value": "3rd item", "id": "3"},
    {"value": "4th item", "id": "4"}
]
~~~

Each object in the data set contains a number of *key:value* pairs that represent attributes of List items. 
You can specify your own template of rendering List items with the help of the [template](list/api/list_template_config.md) configuration option.


External data loading
--------------------

To load data from an external file, make use of the **load** method of Data Collection. It takes the URL of the file with data as a parameter:

~~~js
var list = new dhx.List("list_container");
list.data.load("../common/dataset.json");
~~~

The component will make an AJAX call and expect the remote URL to provide valid JSON data.

Data loading is asynchronous, so you need to wrap any after-loading code into a promise:

~~~js
list.data.load("/some/data").then(function(){
   // some logic here
});
~~~


{{editor	https://snippet.dhtmlx.com/1it5kfhq	List. Load Data}}

Loading from local source
------------------

To load data from a local data source, use the **parse** method of Data Collection. Pass [a predefined data set](#preparingdataset) as a parameter of this method:

~~~js
var list = new dhx.List("list_container");
list.data.parse(dataset);
~~~

{{editor	https://snippet.dhtmlx.com/0xmyywi1	List. Parse Data}}

Saving and restoring state
----------------------------

To save the current state of a list, use the **serialize** method of Data Collection. It converts the data of a list into an array of JSON objects. 
Each JSON object contains a set of *key:value* pairs that represent attributes of List items.

~~~js
var state = list1.data.serialize();
~~~

Then you can parse the data stored in the saved state array to a different list. For example:

~~~js
// creating a new list
var list2 = new dhx.List(document.body);
// parsing the state of list1 into list2
list2.data.parse(state);
~~~


Dynamic loading 
------------------

{{pronote This functionality requires PRO version of the DHTMLX suite package.}}

{{note To make use of dynamic data loading, switch the [virtual](list/api/list_virtual_config.md) property on.}}

To enable dynamic data loading  in List you need to:

- initialize **lazyDataProxy** as described in the [Dynamic Loading](helpers/lazydataproxy.md) article

~~~js
new dhx.LazyDataProxy("https://docs.dhtmlx.com/suite/backend/lazyload", {
    limit: 30,
    prepare: 5,
    delay: 150,
    from: 0
});
~~~

-  load data into List via the **load** method of Data Collection and pass `lazyDataProxy` as a parameter of this method:

~~~js
var list = new dhx.list("list_container", {
    virtual: true
});
list.data.load(lazyDataProxy);
~~~

{{editor    https://snippet.dhtmlx.com/list_lazy_loading	External data lazy load}}

You need to set the virtual:true property in the configuration object of List

{{note The following methods of Data Collection will not work until all data are loaded into Grid: add, remove, copy, move, update, changeId, sort, filter.}}
