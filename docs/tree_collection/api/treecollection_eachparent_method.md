---
sidebar_label: eachParent()
title: JavaScript TreeCollection - eachParent Method 
description: Learn how the eachParent method of TreeCollection calls a function for the parent of an item, the parent of that parent and so on up to the top level. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
---

# eachParent()

@short: iterates through the parent items of an item: its parent, the parent of the parent, and so on up to the top-level item

#### Usage

~~~ts
type Id = string | number;

eachParent(id: Id, callback: (item: IDataItem, index?: number, array?: IDataItem[]) => any, self?: boolean): void;
~~~

@params:
- `id: Id` - the id of the item
- `callback: function` - the function that will be applied to each parent of the item. The function is called with the following parameters:
    - `item: IDataItem` - the object of an item
    - `index?: number` - optional, the index of the item
    - `array?: IDataItem[]` - optional, the array of items the method was called upon
- `self?: boolean` - optional, defines whether the function should iterate over the specified item itself; *false* by default

@example:
toolbar.data.eachParent("new_btn", item => console.log(item));

@descr:

**Related API**:
- [`eachChild()`](tree_collection/api/treecollection_eachchild_method.md)
- [`getParent()`](tree_collection/api/treecollection_getparent_method.md)
