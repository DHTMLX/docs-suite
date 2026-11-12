---
sidebar_label: serialize()
title: JavaScript DataCollection - serialize Method 
description: Learn how the serialize method of DataCollection converts the data of a flat collection into an array of JSON objects or into a CSV or XML string. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
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

**Related API**:
- [`parse()`](data_collection/api/datacollection_parse_method.md)
- [`load()`](data_collection/api/datacollection_load_method.md)
