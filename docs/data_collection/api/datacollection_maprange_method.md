---
sidebar_label: mapRange()
title: JavaScript DataCollection - mapRange Method 
description: You can explore the mapRange method of DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
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
