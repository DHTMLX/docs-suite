---
sidebar_label: forEach()
title: JavaScript DataCollection - forEach Method 
description: Learn how the forEach method of DataCollection calls the specified function for every item of a flat collection, one item after another, in the current order. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
---

# forEach()

@short: iterates over the items of the collection

#### Usage

~~~ts
forEach(callback: (item: IDataItem, index?: number, array?: IDataItem[]) => any): void;
~~~

@params:
- `callback: function` - a function that will iterate over the items of the collection. The function is called with the following parameters:
    - `item: IDataItem` - the object of an item
    - `index?: number` - optional, the index of the item
    - `array?: IDataItem[]` - optional, the array of items the method was called upon

@example:
component.data.forEach((item, index, array) => {
    console.log("This is an item of dataCollection: ", item);
    console.log("This is an index of the element: ", index);
    console.log("This is an array of the elements: ", array);
});

@descr:

**Related sample**: [Data. ForEach](https://snippet.dhtmlx.com/wa6tcmtn)

**Related API**:
- [`map()`](data_collection/api/datacollection_map_method.md)
- [`mapRange()`](data_collection/api/datacollection_maprange_method.md)
- [`reduce()`](data_collection/api/datacollection_reduce_method.md)

@changelog: added in v6.4
