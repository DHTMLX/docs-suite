---
sidebar_label: parse()
title: JavaScript TreeCollection - parse Method 
description: You can explore the parse method of TreeCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# parse()

@short: loads a collection of items from a local source

@signature: {'parse(data: T[], driver?: DataDriver | IDataDriver): void;'}

@params:
- `data: array | string` - the data to load
- `driver: object | string` - optional, type of data (json, csv, xml), json by default

@example:
// parse toolbar from the json array
toolbar.data.parse(data);

// parse toolbar from the xml string
toolbar.data.parse(data,"xml");

// parse toolbar from the csv string
toolbar.data.parse(data,"csv");

@descr:
