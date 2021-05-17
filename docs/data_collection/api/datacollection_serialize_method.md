---
sidebar_label: serialize()
title: serialize()
---          

@short: serializes the component data into JSON, XML or CSV format

@signature: {'serialize(driver?: DataDriver): T[];'}

@params:
`driver: string` - optional, the format that the data will be serialized into (json, csv, xml), json by default

@returns:
Returns serialized data for each item of the component either as an array of JSON objects or as a CSV/XML string. 

@example:
var data = component.data.serialize("csv");

@descr:

**Related sample**: [Data. Serialize](https://snippet.dhtmlx.com/7c35n4uf)
