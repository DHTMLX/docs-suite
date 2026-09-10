---
sidebar_label: Data loading 
title: JavaScript Combo Box - Data Loading 
description: You can explore the data loading of Combo Box in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Data loading

You can load Combobox options in two ways:

- During Combobox initialization
- After Combobox initialization

Both ways start from a prepared data set.

## Preparing data set

DHTMLX Combobox expects data in JSON format.

:::info
If you specify `id` fields in the data collection, their values must be **unique**. You can also omit these fields. In this case Combobox generates the values automatically.
:::

The following data set is valid:

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

Each object in the data set contains `key:value` pairs that define Combobox option attributes. [Check the details](combobox/api/combobox_data_config.md).

Use the [template](combobox/api/combobox_template_config.md) configuration option to define your own template for Combobox options.

:::note
Unless you apply the [template](combobox/api/combobox_template_config.md) option, `value` is a mandatory property of a data set item, and `src` is a reserved one.
:::

## Loading data on initialization

You can load [a predefined data set](#preparing-data-set) into Combobox during initialization. Use the [data](combobox/api/combobox_data_config.md) configuration property:

~~~js
const combo = new dhx.Combobox("combo_container",{
    data: dataset
});
~~~

**Related sample**: [Combobox. Initialization with config.data](https://snippet.dhtmlx.com/8bsb9dji)

## Loading data after initialization

You can load data into Combobox after initialization in two ways:

- [From an external file](#external-data-loading)
- [From a local data source](#loading-from-local-source)

### External data loading

The [load()](data_collection/api/datacollection_load_method.md) method of [DataCollection](/data_collection/) loads data from an external file. The method takes the URL of the data file as a parameter:

~~~js
const combo = new dhx.Combobox("combo_container");
combo.data.load("../common/dataset.json");
~~~

**Related sample**: [Combobox. Initialization with data.load()](https://snippet.dhtmlx.com/69jnq5cn)

The component makes an AJAX call and expects the remote URL to return valid JSON data.

Combobox loads data asynchronously, so place the code that depends on the loaded data into the `then()` callback:

~~~js
combo.data.load("/some/data").then(function(){
   // some logic here
});
~~~

### Loading from local source

The [parse()](data_collection/api/datacollection_parse_method.md) method of [DataCollection](/data_collection/) loads data from a local data source. Pass [a predefined data set](#preparing-data-set) to this method:

~~~js
const combo = new dhx.Combobox("combo_container");
combo.data.parse(dataset);
~~~

**Related sample**: [Combobox. Initialization with data.parse()](https://snippet.dhtmlx.com/d2y5yf46)

## Saving and restoring state

The `serialize()` method of [DataCollection](/data_collection/) saves the current state of Combobox — the current list of its options. The method converts Combobox data into an array of JSON objects. Each JSON object contains `key:value` pairs that define Combobox option attributes.

~~~js
const state = combo.data.serialize();

// -> [{…}, {…}, {…}, {…}, {…}, {…}, {…}, …]
~~~

:::note
The value returned by the [serialize()](data_collection/api/datacollection_serialize_method.md) method depends on the Combobox state:

| Combobox state | `serialize()` returns |
| --- | --- |
| No option selected | All Combobox options |
| One option selected | The selected option only |
| [Multi-selection mode](combobox/configuration.md#selection-of-multiple-options) enabled, one or several options selected | All Combobox options |
:::

You can parse the saved state array into a different Combobox:

~~~js
// creating a new combo
const combo2 = new dhx.Combobox(document.body);
// parsing the state of combo into combo2
combo2.data.parse(state);
~~~
