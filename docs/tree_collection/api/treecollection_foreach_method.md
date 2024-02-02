---
sidebar_label: forEach()
title: JavaScript TreeCollection - forEach Method 
description: You can explore the forEach method of TreeCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# forEach()

@short: iterates over all items of a tree collection

@signature: {'forEach(callback: function, parentID?: string | number, level?: number): void;'}

@params:
- `callback: function` - a function that will iterate over items of a tree collection. It takes three parameters:
    - `element: object` - the object of an item of a tree collection
    - `index: number` - the index of an item
    - `array: object[]` - an array with items
- `parentID: string | number` - optional, the parent id. If not specified, the function will start iterating over from the root item.
- `level: number` - optional, the number of levels to be iterated over. If not specified, each nested level will be visited.

@example:
component.data.forEach(function(element, index, array) {
    console.log("This is an item of treeCollection: ", element);
    console.log("This is an index of the element: ", index);
    console.log("This is an array of the elements: ", array);
});

@descr:

@changelog: added in v6.4
