---
sidebar_label: map()
title: JavaScript DataCollection - map Method 
description: Learn how the map method of DataCollection calls a function for each item of a flat collection and returns a new array with the results of the calls. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
---

# map()

@short: iterates through the items of the collection and returns an array of the callback results

#### Usage

~~~ts
map(callback: (item: IDataItem, index?: number, array?: IDataItem[]) => any): any[];
~~~

@params:
- `callback: function` - a function that will be called for each item of the collection. The function is called with the following parameters:
    - `item: IDataItem` - the object of an item
    - `index?: number` - optional, the index of the item in the collection
    - `array?: IDataItem[]` - optional, the array of the items of the collection

@returns:
A new array with the results of calling the callback function for each item.

@example:
// getting the ids of all items of the component
component.data.map(function (item, index, array) {
    return item.id;
});

@descr:

**Related sample**: [Data. Map](https://snippet.dhtmlx.com/louctp61)

**Related API**:
- [`forEach()`](data_collection/api/datacollection_foreach_method.md)
- [`mapRange()`](data_collection/api/datacollection_maprange_method.md)
- [`reduce()`](data_collection/api/datacollection_reduce_method.md)
