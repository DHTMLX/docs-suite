---
sidebar_label: Loading and saving data
title: JavaScript Guides - Loading and saving data 
description: You can learn how to load and save data with DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Loading and saving data

You can load data into a component from an external file, a local data source or the server side via the DataCollection API. It also allows saving the state of a component and sending it to a different component, as well as saving changes made in the data to the server side. 

:::info
Please note that if you specify the `id` fields in the loaded data collection, their values should be **unique**. You can also omit the `id` fields in the data collection. In this case they will be generated automatically.
:::

## Loading data from an external file

To load data into a component from an external file, make use of the [`load()`](data_collection/api/datacollection_load_method.md) method of [DataCollection](data_collection.md). It takes as parameters the URL of the file with data and, optionally, DataDriver or the type of data ("json" (default), "csv", "xml"). For example:

~~~jsx
component.data.load("../common/data.xml", "xml");
~~~

**Related sample**: [Data. Load](https://snippet.dhtmlx.com/dyykcnxi)

The component will make an AJAX call and expect the remote URL to provide valid JSON data.

Data loading is asynchronous, so you need to wrap any after-loading code into a promise:

~~~jsx
component.data.load(url).then(function () {
    // do something after load
});
~~~

or

~~~jsx
component.data.load(url);
component.data.loadData.then(function () {
    // do something after load
});
// loadData executes a callback function after an asynchronous
// data loading has completed
~~~

## Loading data from a local data source

To load data into a component from a local data source, use the [`parse()`](data_collection/api/datacollection_parse_method.md) method of [DataCollection](data_collection.md). The method takes as parameters a predefined data set and, optionally, DataDriver or the type of data ("json" (default), "csv", "xml"). For example:

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

## Dynamic loading

:::tip pro version only
This functionality requires PRO version of the DHTMLX Grid (or DHTMLX Suite) package
:::

You can load data from the server into DHTMLX Grid or DHTMLX List dynamically. It means that data is loaded 
partially, on demand, and only those records that are in the visible area are rendered. 

To use this functionality, you should take the following steps:

- initialize the `LazyDataProxy` helper as described in the [Dynamic Loading](helpers/lazydataproxy.md) article:

~~~jsx
new dhx.LazyDataProxy("https://docs.dhtmlx.com/suite/backend/lazyload", {
    limit: 30,
    prepare: 5,
    delay: 150,
    from: 0
});
~~~

:::info
To enable dynamic rendering of List items, switch on the `virtual` property of the component:

~~~jsx
const list = new dhx.List("list_container", {
    virtual: true
});
~~~
:::

- load data into Grid or List via the `load()` method of Data Collection and pass `lazyDataProxy` as a parameter of this method:

~~~jsx
// for Grid
const grid = new dhx.Grid("grid_container", {
    columns: [
        // columns config
    ],
    // more options
});
grid.data.load(lazyDataProxy);
~~~

**Related sample**: [External data lazy load](https://snippet.dhtmlx.com/grid_lazy_loading)

~~~jsx
// for List
const list = new dhx.List("list_container");
list.data.load(lazyDataProxy);
~~~

**Related sample**: [List. External data lazy loading](https://snippet.dhtmlx.com/list_lazy_loading)

Read the related guides for detailed information:

- [dynamic loading in Grid](grid/data_loading.md#dynamic-loading)
- [dynamic loading in List](list/load_data.md#dynamic-loading) 

:::info
The `sort()` method of Data Collection will not work until all data are loaded into Grid/List. Note that for correct work of lazy loading, you should send all changes in Data Collection to the server at the proper time.
:::

## Checking whether data is loaded

You can check whether the specified data range is loaded from the server using the [`isDataLoaded()`](data_collection/api/datacollection_isdataloaded_method.md) method of [DataCollection](data_collection.md). 

:::tip pro version only
The method works with the [Dynamic loading](helpers/lazydataproxy.md) functionality which is available in the PRO edition only.
:::

The method takes the following parameters:

- `from?: number` - optional, the index of the first element of the data range to be checked
- `to?: number` - optional, the index of the last element of the data range to be checked

and returns `true`, if a range of data is loaded; otherwise, `false`.

~~~jsx
component.data.isDataLoaded();
~~~

## Saving and restoring the state of a component

To save the current state of a component, use the [`serialize()`](data_collection/api/datacollection_serialize_method.md) method of Data Collection. The method is used to serialize data into the JSON, XML or CSV format. It takes the following parameter:

- `driver?: string` - optional, the format that the data will be serialized into ("json" (default), "csv", "xml")

and returns serialized data for each item of the component either as an array of JSON objects or as a CSV/XML string.

For example:

~~~jsx
const state = grid1.data.serialize();
~~~

**Related sample**: [Data. Serialize](https://snippet.dhtmlx.com/7c35n4uf)

After you've saved a component's state, you can send the data stored in the saved state to a new component using the [`parse()`](data_collection/api/datacollection_parse_method.md) method of Data Collection:

~~~jsx
// creating a new grid
const grid2 = new dhx.Grid("grid_container", {
    columns: [
        // columns config
    ],
    // more options
});
// parsing the state of grid1 into grid2
grid2.data.parse(state);
~~~

## Working with the server side

To provide communication with the server side, you can use the [`DataProxy`](data_proxy.md) helper. Using this helper you can create a custom URL and assign it to a variable to simplify work with the server-side backend. For example:

~~~jsx
const proxy = new dhx.DataProxy("someUrl", {
    // config options 
});
~~~

The `dhx.DataProxy` helper takes two parameters:

- `url: string` - the external URL
- `params?: object` - optional, a set of custom parameters to be sent to the server with a request

### Loading data from the server side

You can apply a custom URL configured by the DataProxy helper to DataCollection while loading data with the [`load()`](data_collection/api/datacollection_load_method.md) method. As a parameter, pass the DataProxy with the configured URL:

~~~jsx
const dataCollection = new dhx.DataCollection();
const proxy = new dhx.DataProxy("https://myCustomUrl.com");
dataCollection.load(proxy);
~~~

The same as with [loading data from an external file](#loading-data-from-an-external-file), the component will make an AJAX call and expect the remote URL to provide valid JSON data.

### Saving data changes to the server side

You can save changes made in the data to the server side using the [`save()`](data_collection/api/datacollection_save_method.md) method of Data Collection. The method takes the following parameter:

- `url: IDataProxy | string` - the URL of a server side or DataProxy with the URL configured

For example:

~~~jsx
grid.data.save("http://userurl/");

//or
grid.data.save(new DataProxy({ url:"http://userurl/" }));
~~~

Each time the user changes data of the component, the `save()` method will make an AJAX call and expect the remote URL to save data changes. The method will send one of the following requests to the back-end:

- `POST` - after adding new data into the component
- `PUT` - after editing data of the component
- `DELETE` - after deleting data

Data saving is asynchronous, so you need to return a promise - the result of the saving operation. To do this, use the `saveData` property that returns a "promise" object:

~~~jsx
const data = new DataCollection();
data.save(loader);
return data.saveData.then(function () {
    // now your data is saved
});
~~~

Use the [`isSaved()`](data_collection/api/datacollection_issaved_method.md) method to check whether the changes are saved. The method returns *true*, if the changes are saved, otherwise, *false*.

~~~jsx
grid.data.saveData.then(function () {
    console.log(grid.data.isSaved());
});
~~~