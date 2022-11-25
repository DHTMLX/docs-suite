---
sidebar_label: Data loading
title: JavaScript List - Data Loading 
description: You can explore the data loading of List in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Data loading

There are several ways of loading List items:

- on initialization of List
- after initialization of List

First, you need to prepare a data set that will be loaded into List.

## Preparing data set

dhtmlxList expects loaded data in the JSON format. Here is an example of an appropriate data set:

~~~js
const dataset = [
	{"value": "1st item", "id": "1"},
    {"value": "2nd item", "id": "2"},
    {"value": "3rd item", "id": "3"},
    {"value": "4th item", "id": "4"}
]
~~~

Each object in the data set contains a number of *key:value* pairs that represent attributes of List items. 
You can specify your own template of rendering List items with the help of the [template](list/api/list_template_config.md) configuration option.

## Loading data on initialization

You can load a [predefined data set](#preparing-data-set) into List on the initialization stage. Use the [data](list/api/list_data_config.md) configuration property, as in:

~~~js
const list = new dhx.List("list_container", {
    css: "dhx_widget--bordered",
    template: template,
    itemHeight: 72,
    data: dataset
});
~~~

**Related sample:** [List. Initialization with config.data](https://snippet.dhtmlx.com/kzg2fza0)

## Loading data after initialization

There are two ways to load data into Grid after its initialization:

- [from an external file](#external-data-loading)
- [from a local data source](#loading-from-local-source)

### External data loading

To load data from an external file, make use of the **load()** method of [DataCollection](data_collection.md). It takes the URL of the file with data as a parameter:

~~~js
const list = new dhx.List("list_container", {
    template: template,
    itemHeight: 72
});
list.data.load("../common/dataset.json");
~~~

The component will make an AJAX call and expect the remote URL to provide valid JSON data.

Data loading is asynchronous, so you need to wrap any after-loading code into a promise:

~~~js
list.data.load("/some/data").then(function(){
   // some logic here
});
~~~

**Related sample**: [List. Initialization with data.load()](https://snippet.dhtmlx.com/1it5kfhq)

### Loading from local source

To load data from a local data source, use the **parse()** method of [DataCollection](data_collection.md). Pass [a predefined data set](#preparing-data-set) as a parameter of this method:

~~~js
const list = new dhx.List("list_container", {
    template: template,
    itemHeight: 72
});
list.data.parse(dataset);
~~~

**Related sample**: [List. Initialization with data.parse()](https://snippet.dhtmlx.com/anj2keoc)

## Saving and restoring state

To save the current state of a list, use the **serialize()** method of [DataCollection](data_collection.md). It converts the data of a list into an array of JSON objects. 
Each JSON object contains a set of *key:value* pairs that represent attributes of List items.

~~~js
const state = list1.data.serialize();
~~~

Then you can parse the data stored in the saved state array to a different list. For example:

~~~js
// creating a new list
const list2 = new dhx.List("list_container2");
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
const list = new dhx.list("list_container", {
    virtual: true
});
list.data.load(lazyDataProxy);
~~~

**Related sample**: [List. External data lazy loading](https://snippet.dhtmlx.com/list_lazy_loading)

{{note The following methods of [DataCollection](data_collection.md) will not work until all data are loaded into List: add, remove, copy, move, update, changeId, sort, filter.}}
