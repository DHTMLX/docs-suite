---
sidebar_label: serialize()
title: JavaScript TreeCollection - serialize Method 
hide_title: true
description: You can explore the serialize method of TreeCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# serialize()

@short: serializes the component data into JSON, XML or CSV format

@signature: {'serialize(driver?: DataDriver): T[];'}

@params:
- `driver: string` - optional, the format that the data will be serialized into (json, csv, xml), json by default

@returns:
Serialized data of the component either as an array of JSON objects or as a CSV/XML string.

@example:
// serialize data to an array of JSON objects
treegrid.data.serialize();

// serialize data to an XML string
treegrid.data.serialize("xml");

// serialize data to a CSV string
treegrid.data.serialize("csv");

@descr:
