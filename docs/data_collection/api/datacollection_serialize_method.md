---
sidebar_label: serialize()
title: JavaScript DataCollection - serialize Method 
description: You can explore the serialize method of DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# serialize()

@short: serializes the data of the collection into JSON, XML or CSV format

#### Usage

~~~ts
type DataDriver = "json" | "csv" | "xml";

serialize(driver?: DataDriver): IDataItem[] | string;
~~~

@params:
- `driver?: DataDriver` - optional, the format that the data will be serialized into ("json", "csv", "xml"), "json" by default

@returns:
The serialized data of the collection: either an array of JSON objects or a CSV/XML string.

@example:
const data = component.data.serialize("csv");

@descr:

**Related sample**: [Data. Serialize](https://snippet.dhtmlx.com/7c35n4uf)
