---
sidebar_label: Data loading
title: JavaScript TreeGrid - Data Loading 
description: You can explore the data loading of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Data loading

There are several simple ways of loading data into dhtmlxTreeGrid:

- on initialization of TreeGrid
- after initialization of TreeGrid

First, you need to prepare a data set that will be loaded into TreeGrid.

## Preparing data set

dhtmlxTreeGrid expects loaded data in the JSON format. Here is an example of an appropriate data set:

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
        "parent": 0,
        "a": 2,
        "b": "Edenburg",
        "c": "Agnes",
        "d": "Gem Street"
    },
    // more columns
];
~~~

Each object in the data set contains configuration of a grid row. The structure of a row is rather flexible. It may include:

<table>
	<tbody>
        <tr>
			<td><b>rowId</b></td>
			<td>(<i>string|number</i>) optional, the id of a row. In case you haven't specified ids of rows, they will be auto-generated</td>
		</tr>
        <tr>
			<td><b>parent</b></td>
			<td>(<i>string|number</i>) the ID of the parent row</td>
		</tr>
        <tr>
			<td><b>columnContent</b></td>
			<td>(<i>string|number</i>) content of a column as <i>key:value</i> pairs, where key is the id of a column and value is any content you want to add into the column</td>
		</tr>
    </tbody>
</table>

## Loading data on TreeGrid initialization

You can specify data you want to load into TreeGrid on the initialization stage. Make use of the [data](treegrid/api/treegrid_data_config.md) configuration property, as in:

~~~js
var treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [
        // columns config
    ],
    data: dataset
});
~~~

**Related sample**: [TreeGrid. Initialization with config.data](https://snippet.dhtmlx.com/kob9385v)

## Loading data after initialization

There are two ways to load data into TreeGrid after its initialization:

- [from a local data source](#loading-from-local-source)
- [from an external file](#external-data-loading)

### Loading from local source

To load data from a local data source, use the **parse** method of Tree Collection. Pass [a predefined data set](#preparing-data-set) as a parameter of this method:

~~~js
var treegrid = new dhx.TreeGrid("treegrid_container", {
treegrid.data.parse(dataset);
~~~

**Related sample**: [TreeGrid. Initialization with data.parse()](https://snippet.dhtmlx.com/jc8gn40c)

### External data loading

To load data from an external file, make use of the **load** method of Tree Collection. It takes the URL of the file with data as a parameter:

~~~js
var treegrid = new dhx.TreeGrid("treegrid_container", {
treegrid.data.load("../common/dataset.json");
~~~

**Related sample**: [TreeGrid. Initialization with data.load()](https://snippet.dhtmlx.com/44rmxlmq)

The component will make an AJAX call and expect the remote URL to provide valid JSON data.

Data loading is asynchronous, so you need to wrap any after-loading code into a promise:

~~~js
treegrid.data.load("/some/data").then(function(){
   // some logic here
});
~~~

## Saving and restoring state

To save the current state of a treegrid, use the **serialize** method of Tree Collection. It converts the data of a treegrid into an array of JSON objects. 
Each JSON object contains the configuration of a separate row.

~~~js
var state = treegrid1.data.serialize();
~~~

Then you can parse the data stored in the saved state array to a different treegrid. For example:

~~~js
// creating a new treegrid
var treegrid2 = new dhx.TreeGrid(document.body);
// parsing the state of treegrid1 into treegrid2
treegrid2.data.parse(state);
~~~
