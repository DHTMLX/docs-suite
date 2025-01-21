---
sidebar_label: Loading data
title: JavaScript Guides - Loading data 
description: You can learn how to load data with DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Loading data

You can load data into a component from an external file or from a local data source via the DataCollection API.

:::info
Please note that if you specify the `id` fields in the loaded data collection, their values should be **unique**. You can also omit the `id` fields in the data collection. In this case they will be generated automatically.
:::

## Loading data from an external file

To load data into a component from an external file, make use of the [load()](data_collection/api/datacollection_load_method.md) method of [DataCollection](data_collection.md). It takes as parameters the URL of the file with data and, optionally, DataDriver or the type of data ("json" (default), "csv", "xml"). For example:

~~~jsx
component.data.load("../common/data.xml", "xml");
~~~

**Related sample**: [Data. Load](https://snippet.dhtmlx.com/dyykcnxi)

The component will make an AJAX call and expect the remote URL to provide valid JSON data.

Data loading is asynchronous, so you need to wrap any after-loading code into a promise:

~~~jsx
component.data.load(url).then(function(){
    // do something after load
});
~~~

or

~~~jsx
component.data.load(url);
component.data.loadData.then(function(){
    // do something after load
});
// loadData executes a callback function after an asynchronous
// data loading has completed
~~~

## Loading data from a local data source

To load data into a component from a local data source, use the [parse()](data_collection/api/datacollection_parse_method.md) method of [DataCollection](data_collection.md). The method takes as parameters a predefined data set and, optionally, DataDriver or the type of data ("json" (default), "csv", "xml"). For example:

~~~jsx
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

const dataview = new dhx.DataView("dataview_container");

// loads data into the dataview from the JSON array
dataview.data.parse(dataset);
~~~

**Related sample**: [Data. Parse](https://snippet.dhtmlx.com/0zrxtmvi)