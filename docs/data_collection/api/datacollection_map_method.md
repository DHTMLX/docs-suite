---
sidebar_label: map()
title: JavaScript DataCollection - map Method 
description: You can explore the map method of DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# map()

@short: iterates through all the items of the component

@signature: {'map(callback: (item: object, index?: number, array?: object[]) => any): object[];'}

@params:
- `callback: function` - a function that will be called for each item of a component. The function is called with the following parameters:
    - `item` - the object of an item
    - `index` - the index of an item
    - `array` - an array of items the method was called upon

@returns:
A new array of items where each item is the result of the callback function.

@example:
// getting the ids of all items of the component
component.data.map(function(item, index, array){
    return item.id;
});

@descr:

**Related sample**: [Data. Map](https://snippet.dhtmlx.com/louctp61)
