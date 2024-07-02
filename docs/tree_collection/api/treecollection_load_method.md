---
sidebar_label: load()
title: JavaScript TreeCollection - load Method 
description: You can explore the load method of TreeCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# load()

@short: loads items from a file

@signature: {'load(url: string | object, driver?: object | string): Promise<any>'}

@params:
- `url: string | DataProxy` - the URL of an external file or DataProxy object with the URL configured
- `driver: object | string` - optional, DataDriver or type of data ("json", "csv", "xml"), "json" by default

@returns:
A promise of data loading.

@example:
toolbar.data.load("[path to this file]/file.xml", "xml");

@descr:

:::info
Please note that if you specify the `id` fields in the loaded tree collection, their values should be **unique**. You can also omit the `id` fields in the tree collection. In this case they will be generated automatically.
:::

The component will make an AJAX call and expect the remote URL to provide valid JSON data.

Data loading is asynchronous, so you need to wrap any after-loading code into a promise:

~~~jsx
toolbar.data.load(url).then(function(){
    //do something after load;
});
~~~

or

~~~jsx
toolbar.data.load(url);
toolbar.data.loadData.then(function(){
    //do something after load;
});
// loadData executes a callback function after an asynchronous
// data loading has completed
~~~
