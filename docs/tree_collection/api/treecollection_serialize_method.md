---
sidebar_label: serialize
title: serialize
---          

@short: serializes the component data into JSON, XML or CSV format

@params:
- type      string		optional, the format that the data will be serialized into (json, csv, xml), json by default
- callback  function    optional,  a function that will be applied to every item of the component

@returns:
data  array,string		serialized data of the component either as an array of JSON objects or as a CSV/XML string 

@example:
// serialize data to an array of JSON objects
treegrid.data.serialize();

// serialize data to an XML string
treegrid.data.serialize("xml");

// serialize data to a CSV string
treegrid.data.serialize("csv");

@template: api_method
@descr:
