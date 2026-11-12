---
sidebar_label: eachChild()
title: JavaScript TreeCollection - eachChild Method 
description: Learn how the eachChild method of TreeCollection calls a function for every descendant of an item, with an option to skip the child items of particular items. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
---

# eachChild()

@short: iterates through the child items of an item

#### Usage

~~~ts
type Id = string | number;

eachChild(id: Id, callback: (item: IDataItem, index?: number, array?: IDataItem[]) => any, direct?: boolean, checkItem?: (item: IDataItem) => boolean): void;
~~~

@params:
- `id: Id` - the id of the parent item
- `callback: function` - the function that will be applied to every child of the item. The function is called with the following parameters:
    - `item: IDataItem` - the object of an item
    - `index?: number` - optional, the index of the item
    - `array?: IDataItem[]` - optional, the array of items the method was called upon
- `direct?: boolean` - optional, defines whether the function should iterate through all children (of any level) of the specified item. If *false*, the function will iterate only through the first-level children of the item; *true* by default
- `checkItem?: function` - optional, the function that defines whether the method should iterate through the child items of an item. The function is called with the object of an item and returns *true* to iterate through its child items, or *false* to skip them

@example:
toolbar.data.eachChild("menu_1", item => {
    // disable items
    item.$disabled = true;
});
toolbar.paint();

@descr:

**Related API**:
- [`eachParent()`](tree_collection/api/treecollection_eachparent_method.md)
- [`getItems()`](tree_collection/api/treecollection_getitems_method.md)
- [`haveItems()`](tree_collection/api/treecollection_haveitems_method.md)
