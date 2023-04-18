---
sidebar_label: load()
title: JavaScript DataCollection - load Method 
description: You can explore the load method of DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# load()

@short: loads data from an external file

@signature: {'load?(url: string | DataProxy, driver?: object | string): Promise<any>;'}

@params:

- `url: string | IDataProxy` - the URL of an external file or DataProxy with the URL configured
- `driver: object | string` - optional, DataDriver or type of data ("json", "csv", "xml"), "json" by default

@returns:
A promise of data loading.

@example:
component.data.load("../common/data.xml", "xml");

@descr:

**Related sample**: [Data. Load](https://snippet.dhtmlx.com/dyykcnxi)

The component will make an AJAX call and expect the remote URL to provide valid JSON data.

Data loading is asynchronous, so you need to wrap any after-loading code into a promise:

~~~js
component.data.load(url).then(function(){
	//do something after load;
});
~~~

or

~~~js
component.data.load(url);
component.data.loadData.then(function(){
	//do something after load;
});
// loadData executes a callback function after an asynchronous
// data loading has completed
~~~
