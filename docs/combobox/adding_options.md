---
sidebar_label: Data loading 
title: JavaScript Combo Box - Data Loading 
description: You can explore the data loading of Combo Box in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Data loading

There are several ways of loading Combo options:

- on initialization of ComboBox
- after initialization of ComboBox

First, you need to prepare a data set that will be loaded into Combo.

## Preparing data set

DHTMLX Combo expects loaded data in the JSON format. Here is an example of an appropriate data set:

~~~js
const dataset = [
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
~~~

Each object in the data set contains a number of *key:value* pairs that represent attributes of Combo options. 
You can specify your own template of rendering Combo options with the help of the [template](combobox/api/combobox_template_config.md) configuration option.

{{note Note, that **value** is a mandatory property for a dataset item and **src** is a reserved one.}}

## Loading data on initialization

You can load [a predefined data set](#preparing-data-set) into Combobox on the initialization stage. Use the [data](combobox/api/combobox_data_config.md) configuration property, as in:

~~~js
const combo = new dhx.Combobox("combo_container",{
    data: dataset
});
~~~

**Related sample**: [Combobox. Initialization with config.data](https://snippet.dhtmlx.com/8bsb9dji)

## Loading data after initialization

There are two ways to load data into Combobox after its initialization:

- [via the **load()** method of DataCollection](#external-data-loading)
- [via the **parse()** method of DataCollection](#loading-from-local-source)

### External data loading

To load data from an external file, make use of the [load()](data_collection/api/datacollection_load_method.md) method of [DataCollection](data_collection.md). It takes the URL of the file with data as a parameter:

~~~js
const combo = new dhx.Combo("combo_container");
combo.data.load("../common/dataset.json");
~~~

**Related sample**: [Combobox. Initialization with data.load()](https://snippet.dhtmlx.com/69jnq5cn)

The component will make an AJAX call and expect the remote URL to provide valid JSON data.

Data loading is asynchronous, so you need to wrap any after-loading code into a promise:

~~~js
combo.data.load("/some/data").then(function(){
   // some logic here
});
~~~

### Loading from local source

To load data from a local data source, use the [parse()](data_collection/api/datacollection_parse_method.md) method of [DataCollection](data_collection.md). Pass [a predefined data set](#preparing-data-set) as a parameter of this method:

~~~js
const combo = new dhx.Combo("combo_container");
combo.data.parse(dataset);
~~~

**Related sample**: [Combobox. Initialization with data.parse()](https://snippet.dhtmlx.com/d2y5yf46)

## Saving and restoring state

To save the current state of a combo box, use the **serialize()** method of [DataCollection](data_collection.md). It converts the data of a combo box into an array of JSON objects.
Each JSON object contains a set of *key:value* pairs that represent attributes of ComboBox options.

~~~js
const state = combo1.data.serialize();
~~~

Then you can parse the data stored in the saved state array to a different combo box. For example:

~~~js
// creating a new combo
const combo2 = new dhx.Combo(document.body);
// parsing the state of combo1 into combo2
combo2.data.parse(state);
~~~
