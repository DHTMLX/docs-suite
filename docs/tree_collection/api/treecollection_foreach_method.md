---
sidebar_label: forEach()
title: JavaScript TreeCollection - forEach Method 
description: You can explore the forEach method of TreeCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# forEach()

@short: iterates over all items of a tree collection

#### Usage

~~~ts
type Id = string | number;

forEach(callback: (item: IDataItem, index?: number, array?: IDataItem[]) => any, parent?: Id, level?: number): void;
~~~

@params:
- `callback: function` - a function that will iterate over items of a tree collection. The function is called with the following parameters:
    - `item: IDataItem` - the object of an item
    - `index?: number` - optional, the index of the item
    - `array?: IDataItem[]` - optional, the array of items the method was called upon
- `parent?: Id` - optional, the id of the parent item. If not specified, the function will start iterating over from the root item
- `level?: number` - optional, the number of levels to be iterated over. If not specified, each nested level will be visited

@example:
component.data.forEach(function (element, index, array) {
    console.log("This is an item of treeCollection: ", element);
    console.log("This is an index of the element: ", index);
    console.log("This is an array of the elements: ", array);
});

@descr:

@changelog: added in v6.4
