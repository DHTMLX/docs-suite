---
sidebar_label: Data loading
title: JavaScript DataView - Data Loading 
description: You can explore the data loading of DataView in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Data loading

There are several ways of loading DataView items:

- on initialization of DataView
- after initialization of DataView

First, you need to prepare a data set that will be loaded into DataView.

## Preparing data set

DHTMLX DataView expects loaded data in the JSON format. Here is an example of an appropriate data set:

~~~js
const dataset = [
  	{
        "value": "Ben",
        "short": "Ben is a very cautious 5-year-old Siberian Husky.",
        "thumbnailName": "01.jpg"
    },
    {
        "value": "Izzy",
        "short": "This is our most beloved kingfisher bird Izzy.",
        "thumbnailName": "02.jpg"
    },
    {
        "value": "Momo",
        "short": "Momo is a 25-year-old elephant with a big heart.",
        "thumbnailName": "03.jpg"
    }
]
~~~

Each object in the data set contains a number of *key:value* pairs that represent attributes of DataView items. 

:::note
You can specify your own template of rendering DataView items with the help of the [](dataview/api/dataview_template_config.md) configuration option.
:::

## Loading data on initialization

You can load [a predefined data set](#preparing-data-set) into DataView on the initialization stage. Use the [data](dataview/api/dataview_data_config.md) configuration property, as in:

~~~js
const dataview = new dhx.DataView("dataview_container", {
    itemsInRow: 2,
    gap: 10,
    css: "dhx_widget--bordered",
    template: template,
    data: dataset
});
~~~

**Related sample**: [Dataview. Initialization with config.data](https://snippet.dhtmlx.com/s547z4xr)

## Loading data after initialization

There are two ways to load data into Combobox after its initialization:

- [from an external file](#external-data-loading)
- [from a local data source](#loading-from-local-source)

### External data loading

To load data from an external file, make use of the **load()** method of [DataCollection](data_collection.md). It takes the URL of the file with data as a parameter:

~~~js
const dataview = new dhx.DataView("dataview_container");
dataview.data.load("../common/dataset.json");
~~~

**Related sample**: [Dataview. Initialization with data.load()](https://snippet.dhtmlx.com/7rjmp5ol)

The component will make an AJAX call and expect the remote URL to provide valid JSON data.

Data loading is asynchronous, so you need to wrap any after-loading code into a promise:

~~~js
dataview.data.load("/some/data").then(function(){
   // some logic here
});
~~~

### Loading from local source

To load data from a local data source, use the **parse()** method of [DataCollection](data_collection.md). Pass [a predefined data set](#preparing-data-set) as a parameter of this method:

~~~js
const dataview = new dhx.DataView("dataview_container");
dataview.data.parse(dataset);
~~~

**Related sample**: [Dataview. Initialization with data.parse()](https://snippet.dhtmlx.com/shhsmgrq)

## Saving and restoring state

To save the current state of a dataview, use the **serialize()** method of [DataCollection](data_collection.md). It converts the data of a dataview into an array of JSON objects. 
Each JSON object contains a set of *key:value* pairs that represent attributes of DataView items.

~~~js
const state = dataview1.data.serialize();
~~~

Then you can parse the data stored in the saved state array to a different dataview. For example:

~~~js
// creating a new dataview
const dataview2 = new dhx.DataView(document.body);
// parsing the state of dataview1 into dataview2
dataview2.data.parse(state);
~~~
