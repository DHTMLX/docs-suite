---
sidebar_label: getParent()
title: JavaScript TreeCollection - getParent Method 
description: You can explore the getParent method of TreeCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# getParent()

@short: returns the id of the parent of an item

#### Usage

~~~ts
type Id = string | number;
getParent(id: Id): Id;
~~~

@params:
- `id: Id` - the id of the item

@returns:
The id of the parent item.

@example:
const parentId = toolbar.data.getParent("add_btn");

@descr:
