---
sidebar_label: parse
title: parse
---          

@short: loads a collection of items from a local source

@signature: {'parse(data: T[], driver?: DataDriver | IDataDriver): void;'}

@params:
- data 		array|string		the data to load
- type		object|string		optional, type of data (json, csv, xml), json by default

@returns: 
- data		array		an array of loaded items	

@example:
// parse toolbar from the json array
toolbar.data.parse(data);

// parse toolbar from the xml string
toolbar.data.parse(data,"xml");

// parse toolbar from the csv string
toolbar.data.parse(data,"csv");


@descr:

