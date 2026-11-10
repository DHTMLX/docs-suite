---
sidebar_label: map()
title: JavaScript DataCollection - map Method 
description: You can explore the map method of DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
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
    - `index?: number` - optional, the index of the item
    - `array?: IDataItem[]` - optional, the array of items the method was called upon

@returns:
A new array with the results of calling the callback function for each item.

@example:
// getting the ids of all items of the component
component.data.map(function (item, index, array) {
    return item.id;
});

@descr:

**Related sample**: [Data. Map](https://snippet.dhtmlx.com/louctp61)
