---
sidebar_label: Dynamic Loading
title: Dynamic Loading
---          

{{pronote This functionality requires PRO version of the dhtmlxGrid (or DHTMLX suite) package.}}

To load data dynamically from the server you can make use of the **LazyDataProxy** helper while loading data into dhtmlxGrid or dhtmlxList. 
This helper allows getting data partially, on demand, and rendering only those records that are in the visible area.

Read the related articles for detailed information about how to display large lists and tabular data efficiently:

- [dynamic loading in Grid](grid/data_loading.md#dynamicloading)
- [dynamic loading in List](list/load_data.md#dynamicloading) (You need to set the **virtual:true** property in the configuration object of List) 

Initialize LazyDataProxy
---------------------------

Initialize LazyDataProxy with the dhx.LazyDataProxy object constructor. The constructor takes two parameters:

- **url** - (*string*) the URL which the component will use to load data after its initialization
- **config** - (*object*) a configuration object which contains parameters for loading data from the server

~~~js
new dhx.LazyDataProxy("https://docs.dhtmlx.com/suite/backend/lazyload", {
    limit: 30,
    prepare: 5,
    delay: 150,
    from: 0
});
~~~

### Parameters

There is a list of parameters that you can specify in the configuration object. All parameters are optional.

- **from** - (*number*) the index of the first data item to start loading from; default value: 0
- **limit** - (*number*) the count of records that should be loaded from the server during each dynamic loading request; default value: 50
- **delay** - (*number*) time interval (in milliseconds) to wait before the next dynamic loading request to the server (allows decreasing the number of server request during quick scrolling); default value: 50
- **prepare** - (*number*) the count of extra records that should be loaded from the server; default value: 0

Server-side Response
-------------------------

Server side will send the following data to the client side:

- **data** - (*array*) - the array of data records
- **from** - (*number*) - starting position in the data set to add the loaded data to
- **total_count** - (*number*) - the total number of records available on the server

~~~js
data: [
	{country: "DR Congo", population: "84004989", yearlyChange: "0.0328"}
	{country: "Germany", population: "82293457", yearlyChange: "0.0022"}
	{country: "Iran", population: "82011735", yearlyChange: "0.0105"}
	{country: "Turkey", population: "81916871", yearlyChange: "0.0145"}
], 
total_count: 233,
from: 15
~~~

Updating URL
---------------

You can use the **updateURL** method to update the URL where the data will be loaded or to change parameters for loading data from the backend. The method takes two parameters:

- **url** - (*string*) the URL which the component will use to load data after its initialization. If not specified, the currently existing URL will be used.
- **config** - (*object*) a configuration object with parameters for loading data from the server. If not specified, clears parameters set earlier.

~~~js
lazyDataProxy.updateURL("https://docs.dhtmlx.com/suite/backend/lazyload", {
    limit: 30,
    prepare: 5,
    delay: 150,
    from: 0
});
~~~


@edition: pro