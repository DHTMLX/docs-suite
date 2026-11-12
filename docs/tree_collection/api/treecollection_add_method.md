---
sidebar_label: add()
title: JavaScript TreeCollection - add Method 
description: Learn how the add method of TreeCollection adds an item or an array of items to the top level or into a parent item at the specified index. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
---

# add()

@short: adds a new item or several items to the collection

#### Usage

~~~ts
type Id = string | number;
add(newItem: IDataItem | IDataItem[], index?: number, parent?: Id): Id | Id[];
~~~

@params:
- `newItem: IDataItem | IDataItem[]` - the object of a new item or an array of item objects
- `index?: number` - optional, the position of the item among the children of the parent item
- `parent?: Id` - optional, the id of the parent item; if not set, the item is added to the root

@returns:
The id of the added item or an array with the ids of the added items.

@example:
toolbar.data.add({
    type: "button",
    icon: "dxi-plus",
    value: "New"
}, 1);

@descr:

**Related API**:
- [`beforeAdd`](tree_collection/api/treecollection_beforeadd_event.md)
- [`afterAdd`](tree_collection/api/treecollection_afteradd_event.md)
- [`remove()`](tree_collection/api/treecollection_remove_method.md)
- [`update()`](tree_collection/api/treecollection_update_method.md)
