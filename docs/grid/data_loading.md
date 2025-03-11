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

:::note
If you use the [TreeGrid mode of Grid](grid/treegrid_mode.md), check the [related guide on data loading](grid/treegrid_mode.md#data-loading).
:::

## Preparing data set

DHTMLX Grid expects loaded data in the JSON format. 

:::info
Please note that if you specify the `id` fields in the data collection, their values should be **unique**. You can also omit the `id` fields in the data collection. In this case they will be generated automatically.
:::

Here is an example of an appropriate data set:

~~~jsx
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
            <td>(<i>string | number</i>) optional, the id of a row. In case you haven't specified ids of rows, they will be auto-generated</td>
        </tr>
        <tr>
            <td><b>columnContent</b></td>
            <td>(<i>string | number</i>) content of a column as <i>key:value</i> pairs, where key is the id of a column and value is any content you want to add into the column</td>
        </tr>
    </tbody>
</table>

## Loading data on initialization

You can load a [predefined data set](#preparing-data-set) into Grid on the initialization stage. Use the [data](grid/api/grid_data_config.md) configuration property, as in:

~~~jsx
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

~~~jsx
const grid = new dhx.Grid("grid_container");
grid.data.load("../common/dataset.json");
~~~

**Related sample**: [Grid. Initialization with data.load()](https://snippet.dhtmlx.com/svkb27d5)

The component will make an AJAX call and expect the remote URL to provide valid JSON data.

Data loading is asynchronous, so you need to wrap any after-loading code into a promise:

~~~jsx
grid.data.load("/some/data").then(function(){
   // some logic here
});
~~~

### Loading from local source

To load data from a local data source, use the `parse()` method of [Data Collection](data_collection.md). Pass [a predefined data set](#preparing-data-set) as a parameter of this method:

~~~jsx
const grid = new dhx.Grid("grid_container");
grid.data.parse(dataset);
~~~

**Related sample**: [Grid. Initialization with data.parse()](https://snippet.dhtmlx.com/pwzie5wz)

Note that for loading data from a **CSV file** into a grid, you need to:

- [create a data driver](/helpers/datadrivers/#csv-format) with the `nameByHeader: true` setting. Thus the data from the first data line will be used as keys of items
- pass the created driver as a second parameter to the `parse()` method

Check the example below:

~~~jsx
const grid = new dhx.Grid("grid", {
    columns: [
        { width: 150, id: "country", header: [{ text: "Country" }] },
        { width: 150, id: "population", header: [{ text: "Population" }] },
        { width: 150, id: "yearlyChange", header: [{ text: "Yearly Change" }] },
        { width: 150, id: "netChange", header: [{ text: "Net Change" }] },
        { width: 150, id: "density", header: [{ text: "Density (P/Km²)" }] },
        { width: 150, id: "area", header: [{ text: "Land Area (Km²)" }] },
        { width: 150, id: "migrants", header: [{ text: "Migrants (net)" }] },
        { width: 150, id: "fert", header: [{ text: "Fert. Rate" }] },
        { width: 150, id: "age", header: [{ text: "Med. Age" }] },
        { width: 150, id: "urban", header: [{ text: "Urban Pop" }] }
    ]
});

const csvData = "country,population,yearlyChange,netChange,density,area,migrants,fert,age,urban,id\nChina,1415045928,0.0039,5528531,151,9388211,-339690,1.6,37,0.5800,1\nIndia,1354051854,0.0111,14871727,455,2973190,-515643,2.4,27,0.3200,2,true\nU.S.,326766748,0.0071,2307285,36,9147420,900000,1.9,38,0.8300,3";
const csvDataDriver = new dhx.dataDrivers.csv({ nameByHeader: true });
grid.data.parse(csvData, csvDataDriver);
~~~

## Saving and restoring state

To save the current state of a grid, use the **serialize()** method of [Data Collection](data_collection.md). It converts the data of a grid into an array of JSON objects.
Each JSON object contains the configuration of a separate row.

~~~jsx
const state = grid1.data.serialize();
~~~

Then you can parse the data stored in the saved state array to a different grid. For example:

~~~jsx
// creating a new grid
const grid2 = new dhx.Grid(document.body);
// parsing the state of grid1 into grid2
grid2.data.parse(state);
~~~

## Dynamic loading

:::tip pro version only
This functionality requires PRO version of the DHTMLX Grid (or DHTMLX Suite) package.
:::

To enable dynamic data loading in Grid you need to:

- initialize `lazyDataProxy` as described in the [Dynamic Loading](helpers/lazydataproxy.md) article

~~~jsx
new dhx.LazyDataProxy("https://docs.dhtmlx.com/suite/backend/lazyload", {
    limit: 30,
    prepare: 5,
    delay: 150,
    from: 0
});
~~~

- load data into Grid via the `load()` method of Data Collection and pass `lazyDataProxy` as a parameter of this method:

~~~jsx
const grid = new dhx.Grid("grid_container");
grid.data.load(lazyDataProxy);
~~~

**Related sample**: [External data lazy load](https://snippet.dhtmlx.com/grid_lazy_loading)

:::info
The `sort()` method of Data Collection will not work until all data are loaded into Grid. Note that for correct work of lazy loading, you should send all changes in Data Collection to the server at the proper time.
:::
