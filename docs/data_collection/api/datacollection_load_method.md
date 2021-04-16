---
sidebar_label: load
title: load
---          

@short: loads data from an external file

@params:

- url			string		the URL of an external file
- type			string		optional, type of data (json, csv, xml), json by default

@returns:

- loaded		promise		a promise of data loading

@example:
diagram.data.load("../common/data.xml", "xml");


@template:	api_method
@descr:

The component will make an AJAX call and expect the remote URL to provide valid JSON data.

Data loading is asynchronous, so you need to wrap any after-loading code into a promise:

~~~js
diagram.data.load(url).then(function(){
	//do something after load;
});
~~~

or

~~~js
diagram.data.load(url);
diagram.data.loadData.then(function(){
	//do something after load;
});
// loadData executes a callback function after an asynchronous
// data loading has completed
~~~

@relatedsample: https://snippet.dhtmlx.com/dyykcnxi	Data. Load