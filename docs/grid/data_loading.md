---
sidebar_label: Data Loading
title: Data Loading
---          

There are several simple ways of loading data into dhtmlxGrid:

- adding data via a configuration property
- load data from an external file
- load data from a local data source

First, you need to prepare a data set that will be loaded into Grid.

Preparing data set
-------------------

dhtmlxGrid expects loaded data in the JSON format. Here is an example of an appropriate data set:

~~~js
var dataset = [
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

{{editor    https://snippet.dhtmlx.com/w3p07d6s	Grid. Large Dataset}}

Each object in the data set contains configuration of a grid row. The structure of a row is rather flexible. It may include:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>id</b></td>
			<td>(<i>string|number</i>) optional, the id of a row. In case you haven't specified ids of rows, they will be auto-generated</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>columnContent</b></td>
			<td>(<i>string|number</i>) content of a column as <i>key:value</i> pairs, where key is the id of a column and value is any content you want to add into the column</td>
		</tr>
    </tbody>
</table>

Adding data on Grid initialization
---------------------

You can specify data you want to add into Grid on the initialization stage. Make use of the **data** configuration property, as in:

~~~js
var grid = new dhx.Grid("grid_container", {
    columns: [// columns config],
    data: dataset
});
~~~

{{editor    https://snippet.dhtmlx.com/luh8d0vv	Grid. Basic Initialization}}


External data loading
--------------------

To load data from an external file, make use of the **load** method of Data Collection. It takes the URL of the file with data as a parameter:

~~~js
var grid = new dhx.Grid("grid_container");
grid.data.load("../common/dataset.json");
~~~

The component will make an AJAX call and expect the remote URL to provide valid JSON data.

Data loading is asynchronous, so you need to wrap any after-loading code into a promise:

~~~js
grid.data.load("/some/data").then(function(){
   // some logic here
});
~~~

Loading from local source
------------------

To load data from a local data source, use the **parse** method of Data Collection. Pass [a predefined data set](#preparingdataset) as a parameter of this method:

~~~js
var grid = new dhx.Grid("grid_container");
grid.data.parse(dataset);
~~~

{{editor    https://snippet.dhtmlx.com/svkb27d5	Grid. External Data Loading}}

Saving and restoring state
----------------------------

To save the current state of a grid, use the **serialize** method of Data Collection. It converts the data of a grid into an array of JSON objects. 
Each JSON object contains the configuration of a separate row.

~~~js
var state = grid1.data.serialize();
~~~

Then you can parse the data stored in the saved state array to a different grid. For example:

~~~js
// creating a new grid
var grid2 = new dhx.Grid(document.body);
// parsing the state of grid1 into grid2
grid2.data.parse(state);
~~~

Dynamic loading 
------------------

{{pronote This functionality requires PRO version of the dhtmlxGrid (or DHTMLX suite) package.}}
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

-  load data into Grid via the **load** method of Data Collection and pass `lazyDataProxy` as a parameter of this method:

~~~js
var grid = new dhx.Grid("grid_container");
grid.data.load(lazyDataProxy);
~~~

{{editor    https://snippet.dhtmlx.com/grid_lazy_loading	External data lazy load}}

{{note The add, remove, copy, move, update, changeId, sort and filter methods of Data Collection will not work until all data are loaded into Grid.}}
