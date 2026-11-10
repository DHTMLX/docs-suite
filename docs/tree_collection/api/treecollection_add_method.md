---
sidebar_label: add()
title: JavaScript TreeCollection - add Method 
description: You can explore the add method of TreeCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
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
