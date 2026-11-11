---
sidebar_label: load()
title: JavaScript TreeCollection - load Method 
description: Learn how the load method of TreeCollection loads hierarchical data into a tree collection from a URL or a data proxy and returns a promise. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
---

# load()

@short: loads items into the collection from an external source

#### Usage

~~~ts
type DataDriver = "json" | "csv" | "xml";

load(url: string | IDataProxy, driver?: DataDriver | IDataDriver): Promise<any>;
~~~

@params:
- `url: string | IDataProxy` - the URL of an external file or DataProxy with the URL configured
- `driver?: DataDriver | IDataDriver` - optional, the type of data ("json", "csv", "xml") or a DataDriver object, "json" by default

@returns:
A promise of data loading.

@example:
toolbar.data.load("[path to this file]/file.xml", "xml");

@descr:

:::info
Please note that if you specify the `id` fields in the loaded data, their values should be **unique**. You can also omit the `id` fields in the data. In this case they will be generated automatically.
:::

The collection makes an AJAX call and expects the remote URL to provide valid data in the specified format.

Data loading is asynchronous, so you need to wrap any after-loading code into a promise:

~~~jsx
toolbar.data.load(url).then(() => {
    //do something after load;
});
~~~

or

~~~jsx
toolbar.data.load(url);
toolbar.data.loadData.then(() => {
    //do something after load;
});
// loadData executes a callback function after an asynchronous
// data loading has completed
~~~

The method resets the applied sorting and filtering: the sorting is dropped, and so are all the filters except those applied with `permanent: true`, which are reapplied to the new data.

**Related API**:
- [`parse()`](tree_collection/api/treecollection_parse_method.md)
- [`load`](tree_collection/api/treecollection_load_event.md)
- [`loadError`](tree_collection/api/treecollection_loaderror_event.md)
- [`loadItems()`](tree_collection/api/treecollection_loaditems_method.md)
