---
sidebar_label: Data loading
title: JavaScript Grid - Data Loading 
description: You can explore the data loading of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Data loading

There are several ways of loading data into DHTMLX Grid:

- on initialization of Grid
- after initialization of Grid

First, you need to prepare a data set that will be loaded into Grid.

## Preparing data set

DHTMLX Grid expects loaded data in the JSON format. Here is an example of an appropriate data set:

~~~js
const dataset = [
    {
        "id": 0,
        "a": 1,
        "b": "Linwood Long long long",
        "c": "Petersen",
        "d": "Dahlgreen Place"
    },
    {
        "id": 1,
        "a": 2,
        "b": "Edenburg",
        "c": "Agnes",
        "d": "Gem Street"
    },
    // more columns
];
~~~

**Related sample**: [Grid. Large dataset](https://snippet.dhtmlx.com/w3p07d6s)

Each object in the data set contains configuration of a grid row. The structure of a row is rather flexible. It may include:

<table>
    <tbody>
        <tr>
            <td><b>id</b></td>
            <td>(<i>string|number</i>) optional, the id of a row. In case you haven't specified ids of rows, they will be auto-generated</td>
        </tr>
        <tr>
            <td><b>columnContent</b></td>
            <td>(<i>string|number</i>) content of a column as <i>key:value</i> pairs, where key is the id of a column and value is any content you want to add into the column</td>
        </tr>
    </tbody>
</table>

## Loading data on initialization

You can load a [predefined data set](#preparing-data-set) into Grid on the initialization stage. Use the [data](grid/api/grid_data_config.md) configuration property, as in:

~~~js
const grid = new dhx.Grid("grid_container", {
    columns: [
        // columns config
    ],
    data: dataset
});
~~~

**Related sample**: [Grid. Initialization with config.data](https://snippet.dhtmlx.com/luh8d0vv)

## Loading data after initialization

There are two ways to load data into Grid after its initialization:

- [from an external file](#external-data-loading)
- [from a local data source](#loading-from-local-source)

### External data loading

To load data from an external file, make use of the **load()** method of [Data Collection](data_collection.md). It takes the URL of the file with data as a parameter:

~~~js
const grid = new dhx.Grid("grid_container");
grid.data.load("../common/dataset.json");
~~~

**Related sample**: [Grid. Initialization with data.load()](https://snippet.dhtmlx.com/svkb27d5)

The component will make an AJAX call and expect the remote URL to provide valid JSON data.

Data loading is asynchronous, so you need to wrap any after-loading code into a promise:

~~~js
grid.data.load("/some/data").then(function(){
   // some logic here
});
~~~

### Loading from local source

To load data from a local data source, use the **parse()** method of [Data Collection](data_collection.md). Pass [a predefined data set](#preparing-data-set) as a parameter of this method:

~~~js
const grid = new dhx.Grid("grid_container");
grid.data.parse(dataset);
~~~

**Related sample**: [Grid. Initialization with data.parse()](https://snippet.dhtmlx.com/pwzie5wz)

## Saving and restoring state

To save the current state of a grid, use the **serialize()** method of [Data Collection](data_collection.md). It converts the data of a grid into an array of JSON objects.
Each JSON object contains the configuration of a separate row.

~~~js
const state = grid1.data.serialize();
~~~

Then you can parse the data stored in the saved state array to a different grid. For example:

~~~js
// creating a new grid
const grid2 = new dhx.Grid(document.body);
// parsing the state of grid1 into grid2
grid2.data.parse(state);
~~~

## Dynamic loading

{{pronote This functionality requires PRO version of the DHTMLX Grid (or DHTMLX Suite) package.}}
To enable dynamic data loading in Grid you need to:

- initialize **lazyDataProxy** as described in the [Dynamic Loading](helpers/lazydataproxy.md) article

~~~js
new dhx.LazyDataProxy("https://docs.dhtmlx.com/suite/backend/lazyload", {
    limit: 30,
    prepare: 5,
    delay: 150,
    from: 0
});
~~~

- load data into Grid via the **load()** method of Data Collection and pass `lazyDataProxy` as a parameter of this method:

~~~js
const grid = new dhx.Grid("grid_container");
grid.data.load(lazyDataProxy);
~~~

**Related sample**: [External data lazy load](https://snippet.dhtmlx.com/grid_lazy_loading)

{{note The **add**, **remove**, **copy**, **move**, **update**, **changeId**, **sort** and **filter** methods of Data Collection will not work until all data are loaded into Grid.}}
