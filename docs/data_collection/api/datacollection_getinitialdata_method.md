---
sidebar_label: getInitialData()
title: JavaScript DataCollection - getInitialData Method 
description: Learn how the getInitialData method of DataCollection returns all the items of a filtered flat collection, including the ones that the active filters leave out. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
---

# getInitialData()

@short: returns all the items of the collection, including the filtered-out ones

#### Usage

~~~ts
getInitialData(): IDataItem[];
~~~

@returns:
An array with all the items of the collection, including the ones the applied filters leave out, or `null` if no filter is applied.

@example:
const startingData = component.data.getInitialData();

@descr:

**Related sample**: [Data. Get initial data](https://snippet.dhtmlx.com/l6wun9j4)

**Related API**:
- [`filter()`](data_collection/api/datacollection_filter_method.md)
- [`resetFilter()`](data_collection/api/datacollection_resetfilter_method.md)
- [`getLength()`](data_collection/api/datacollection_getlength_method.md)
