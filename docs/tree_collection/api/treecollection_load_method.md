---
sidebar_label: load()
title: load()
---          

@short: loads items from a file

@signature: {'load(url: IDataProxy, driver?: IDataDriver): Promise<any>'}

@params:
- `url: string` - the path to the file
- `driver: string` - optional, type of data (json, csv, xml), json by default

@returns:
A promise of data loading.

@example:
myToolbar.data.load("[path to this file]/file.xml", "xml");

@descr:

The component will make an AJAX call and expect the remote URL to provide valid JSON data.

Data loading is asynchronous, so you need to wrap any after-loading code into a promise:

~~~js
myToolbar.data.load(url).then(function(){
	//do something after load;
});
~~~

or

~~~js
myToolbar.data.load(url);
myToolbar.data.loadData.then(function(){
	//do something after load;
});
// loadData executes a callback function after an asynchronous
// data loading has completed
~~~
