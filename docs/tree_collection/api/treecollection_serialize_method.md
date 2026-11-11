---
sidebar_label: serialize()
title: JavaScript TreeCollection - serialize Method 
description: Learn how the serialize method of TreeCollection converts the hierarchical data of a tree collection into JSON objects with nested items or into a CSV or XML string. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
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
// serialize data into an array of JSON objects
const data = component.data.serialize();

// serialize data into an XML string
const xmlData = component.data.serialize("xml");

// serialize data into a CSV string
const csvData = component.data.serialize("csv");

@descr:

**Related API**:
- [`parse()`](tree_collection/api/treecollection_parse_method.md)
- [`load()`](tree_collection/api/treecollection_load_method.md)
