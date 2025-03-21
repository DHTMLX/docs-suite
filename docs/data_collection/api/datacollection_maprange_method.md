---
sidebar_label: mapRange()
title: JavaScript DataCollection - mapRange Method 
description: You can explore the mapRange method of DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# mapRange()

@short: returns a new array of the items according to the specified parameters

@signature: {'mapRange(from: number, to: number, callback: (item: object, index?: number, array?: object[]) => any): object[];'}

@params:
- `from: number` - the initial position of an item in the range
- `to: number` - the final position of an item in the range
- `callback: function` - a function that will be called for each item from the specified range. The function is called with the following parameters:
    - `item` - the object of an item
    - `index` - the index of an item
    - `array` - an array of items the method was called upon

@returns:
A new array of matching item objects.

@example:
const result = component.data.mapRange(0, 20, function(item, index, array) {
    console.log(item.id, index);
});

@descr:
