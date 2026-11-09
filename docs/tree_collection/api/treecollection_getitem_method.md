---
sidebar_label: getItem()
title: JavaScript TreeCollection - getItem Method 
description: You can explore the getItem method of TreeCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# getItem()

@short: gets an item by its ID

#### Usage

~~~ts
type Id = string | number;
getItem(id: Id): IDataItem;
~~~

@params:
- `id: Id` - the id of the item

@returns:
An item object.

@example:
const item = toolbar.data.getItem("add_btn");

@descr:
