---
sidebar_label: getLength()
title: JavaScript DataCollection - getLength Method 
description: Learn how the getLength method of DataCollection counts the items of a flat collection, leaving out the ones that the applied filters hide. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
---

# getLength()

@short: returns the number of the items of the collection

#### Usage

~~~ts
getLength(): number;
~~~

@returns:
The number of the items of the collection. The items left out by the applied filters are not counted.

@example:
const dataLength = component.data.getLength();

@descr:

**Related sample**: [Data. Get length](https://snippet.dhtmlx.com/4weiba8i)

**Related API**:
- [`getIndex()`](data_collection/api/datacollection_getindex_method.md)
- [`getInitialData()`](data_collection/api/datacollection_getinitialdata_method.md)
