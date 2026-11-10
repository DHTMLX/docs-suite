---
sidebar_label: getItems()
title: JavaScript TreeCollection - getItems Method 
description: You can explore the getItems method of TreeCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# getItems()

@short: returns the child items of an item

#### Usage

~~~ts
type Id = string | number;
getItems(id: Id): IDataItem[];
~~~

@params:
- `id: Id` - the id of the parent item

@returns:
An array with the child items of the item.

@example:
const items = toolbar.data.getItems("menu1");

@descr:
