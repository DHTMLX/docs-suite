---
sidebar_label: getIndex()
title: JavaScript TreeCollection - getIndex Method 
description: You can explore the getIndex method of TreeCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# getIndex()

@short: returns the index of an item by its id

#### Usage

~~~ts
type Id = string | number;
getIndex(id: Id): number;
~~~

@params:
- `id: Id` - the id of the item

@returns:
The index of the item among the child items of its parent, or `-1` if the item doesn't exist.

@example:
const index = toolbar.data.getIndex("add_btn");

@descr:
