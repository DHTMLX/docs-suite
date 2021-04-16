---
sidebar_label: serialize
title: serialize
---          

@short: serializes the component data into JSON, XML or CSV format

@params:
- type			string		optional, the format that the data will be serialized into (json, csv, xml), json by default

@returns:
- data		array,string		serialized data for each item of the component either as an array of JSON objects or as a CSV/XML string 

@example:
var data = component.data.serialize("csv");

@template:	api_method
@descr:

@relatedsample: https://snippet.dhtmlx.com/7c35n4uf	Data. Serialize