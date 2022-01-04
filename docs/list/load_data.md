---
sidebar_label: Data loading
title: JavaScript List - Data Loading 
description: You can explore the data loading of List in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Data loading

There are several ways of loading List items:

- from an external file
- from a local data source

First, you need to prepare a data set that will be loaded into List.

## Preparing data set

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

## External data loading

To load data from an external file, make use of the **load()** method of [DataCollection](data_collection/index.md). It takes the URL of the file with data as a parameter:

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

**Related sample**: [List. Load Data](https://snippet.dhtmlx.com/1it5kfhq)

## Loading from local source

To load data from a local data source, use the **parse()** method of [DataCollection](data_collection/index.md). Pass [a predefined data set](#preparing-data-set) as a parameter of this method:

~~~js
var list = new dhx.List("list_container");
list.data.parse(dataset);
~~~

**Related sample**: [List. Parse Data](https://snippet.dhtmlx.com/0xmyywi1)

## Saving and restoring state

To save the current state of a list, use the **serialize()** method of [DataCollection](data_collection/index.md). It converts the data of a list into an array of JSON objects. 
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

## Dynamic loading

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

- load data into List via the **load** method of Data Collection and pass `lazyDataProxy` as a parameter of this method:

~~~js
var list = new dhx.list("list_container", {
    virtual: true
});
list.data.load(lazyDataProxy);
~~~

**Related sample**: [External data lazy load](https://snippet.dhtmlx.com/list_lazy_loading)

{{note The following methods of [DataCollection](data_collection/index.md) will not work until all data are loaded into List: add, remove, copy, move, update, changeId, sort, filter.}}
