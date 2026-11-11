---
sidebar_label: map()
title: JavaScript TreeCollection - map Method
description: Learn how the map method of TreeCollection calls a function for the items of a branch, on all levels or for the direct children only, and returns the results. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
---

# map()

@short: iterates through the items of the collection and returns an array of the callback results

#### Usage

~~~ts
type Id = string | number;

map(callback: (item: IDataItem, index?: number) => any, parent?: Id, direct?: boolean): any[];
~~~

@params:
- `callback: function` - the function that will be applied to every item. The function is called with the following parameters:
    - `item: IDataItem` - the object of an item
    - `index?: number` - optional, the index of the item among the child items of its parent
- `parent?: Id` - optional, the id of the item the child items of which will be included; the root of the collection by default
- `direct?: boolean` - optional, defines whether the method iterates through the child items of all levels (*true*) or only through the direct child items of the parent item (*false*); *true* by default

@returns:
A new array with the results of calling the callback function for each item.

@example:
toolbar.data.map((item) => {
    // remove all icons
    item.icon = "";
});
toolbar.paint();

@descr:

To work with the child items of a particular item, pass the id of the item as the second parameter of `map()`:

~~~jsx
toolbar.data.map((item) => {
    // disable items
    item.disabled = true;
}, "menu_1");
toolbar.paint();
~~~

To iterate only through the direct child items, set the third parameter to *false*:

~~~jsx
toolbar.data.map((item) => {
    // add a css class to each item
    item.css = "highlight";
}, "menu_1", false);
toolbar.paint();
~~~

**Related API**:
- [`forEach()`](tree_collection/api/treecollection_foreach_method.md)
- [`mapVisible()`](tree_collection/api/treecollection_mapvisible_method.md)
