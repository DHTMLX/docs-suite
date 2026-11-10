---
sidebar_label: getId()
title: JavaScript TreeCollection - getId Method 
description: You can explore the getId method of TreeCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# getId()

@short: returns the id of an item by its index

#### Usage

~~~ts
type Id = string | number;
getId(index: number, parent?: Id): Id;
~~~

@params:
- `index: number` - the index of the item among the child items of its parent
- `parent?: Id` - optional, the id of the parent item; the root of the collection by default

@returns:
The id of the item.

@example:
const id = tree.data.getId(2, "1"); // -> "3"

@descr:
