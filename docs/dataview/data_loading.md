---
sidebar_label: Data loading
title: JavaScript DataView - Data Loading 
description: You can explore the data loading of DataView in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Data loading

You can load DataView items in two ways:

- During DataView initialization
- After DataView initialization

Both ways start from a prepared data set.

## Preparing data set

DHTMLX DataView expects data in JSON format.

:::info
If you specify `id` fields in the data collection, their values must be **unique**. You can also omit these fields. In this case DataView generates the values automatically.
:::

The following data set is valid:

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

Each object in the data set contains `key:value` pairs that define DataView item attributes.

:::note
Use the [](dataview/api/dataview_template_config.md) configuration option to define your own template for DataView items.
:::

## Loading data on initialization

You can load [a predefined data set](#preparing-data-set) into DataView during initialization. Use the [data](dataview/api/dataview_data_config.md) configuration property:

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

You can load data into DataView after initialization in two ways:

- [From an external file](#external-data-loading)
- [From a local data source](#loading-from-local-source)

### External data loading

The `load()` method of [DataCollection](/data_collection/) loads data from an external file. The method takes the URL of the data file as a parameter:

~~~js
const dataview = new dhx.DataView("dataview_container");
dataview.data.load("../common/dataset.json");
~~~

**Related sample**: [Dataview. Initialization with data.load()](https://snippet.dhtmlx.com/7rjmp5ol)

The component makes an AJAX call and expects the remote URL to return valid JSON data.

DataView loads data asynchronously, so place the code that depends on the loaded data into the `then()` callback:

~~~js
dataview.data.load("/some/data").then(function(){
   // some logic here
});
~~~

### Loading from local source

The `parse()` method of [DataCollection](/data_collection/) loads data from a local data source. Pass [a predefined data set](#preparing-data-set) to this method:

~~~js
const dataview = new dhx.DataView("dataview_container");
dataview.data.parse(dataset);
~~~

**Related sample**: [Dataview. Initialization with data.parse()](https://snippet.dhtmlx.com/shhsmgrq)

## Saving and restoring state

The `serialize()` method of [DataCollection](/data_collection/) saves the current state of a DataView. The method converts DataView data into an array of JSON objects. Each JSON object contains `key:value` pairs that define DataView item attributes.

~~~js
const state = dataview.data.serialize();
~~~

You can parse the saved state array into a different DataView:

~~~js
// creating a new dataview
const dataview2 = new dhx.DataView(document.body);
// parsing the state of dataview into dataview2
dataview2.data.parse(state);
~~~
