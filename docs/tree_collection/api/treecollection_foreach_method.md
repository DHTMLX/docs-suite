---
sidebar_label: forEach()
title: JavaScript TreeCollection - forEach Method 
description: Learn how the forEach method of TreeCollection calls a function for every item of a branch of a tree collection, down to the specified number of levels. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
---

# forEach()

@short: iterates over the items of the collection

#### Usage

~~~ts
type Id = string | number;

forEach(callback: (item: IDataItem, index?: number, array?: IDataItem[]) => any, parent?: Id, level?: number): void;
~~~

@params:
- `callback: function` - a function that will iterate over the items of the collection. The function is called with the following parameters:
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

**Related API**:
- [`map()`](tree_collection/api/treecollection_map_method.md)
- [`eachChild()`](tree_collection/api/treecollection_eachchild_method.md)

@changelog: added in v6.4
