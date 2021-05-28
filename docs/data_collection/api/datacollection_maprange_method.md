---
sidebar_label: mapRange()
title: JavaScript DataCollection - mapRange Method 
hide_title: true
description: You can explore the mapRange method of DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# mapRange()

@short: returns a new array of the items correspond to the specified parameters

@signature: {'mapRange(from: number, to: number, callback: DataCallback<T>): T[];'}

@params:
- `from: number` - the initial position of an item in the range
- `to: number` - the final position of an item in the range
- `callback: function` - a function that will be called for each item from the specified range

@returns:
A new array of matching item objects.

@example:
var result = diagram.data.mapRange(0, 20, function(item, index) {
    console.log(item.id, index);
});

@descr:
