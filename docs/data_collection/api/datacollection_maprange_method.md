---
sidebar_label: mapRange()
title: JavaScript DataCollection - mapRange Method 
description: Learn how the mapRange method of DataCollection calls a function for the items between two indexes of a flat collection and returns an array with the results. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
---

# mapRange()

@short: iterates through the items of the specified range and returns an array of the callback results

#### Usage

~~~ts
mapRange(from: number, to: number, callback: (item: IDataItem, index?: number, array?: IDataItem[]) => any): any[];
~~~

@params:
- `from: number` - the index of the first item of the range
- `to: number` - the index of the last item of the range
- `callback: function` - a function that will be called for each item from the specified range. The function is called with the following parameters:
    - `item: IDataItem` - the object of an item
    - `index?: number` - optional, the index of the item
    - `array?: IDataItem[]` - optional, the array of items the method was called upon

@returns:
A new array with the results of calling the callback function for each item of the range.

@example:
const result = component.data.mapRange(0, 20, function (item, index, array) {
    console.log(item.id, index);
});

@descr:

**Related API**:
- [`map()`](data_collection/api/datacollection_map_method.md)
- [`forEach()`](data_collection/api/datacollection_foreach_method.md)
