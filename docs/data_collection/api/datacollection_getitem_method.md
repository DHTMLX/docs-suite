---
sidebar_label: getItem()
title: JavaScript DataCollection - getItem Method 
description: You can explore the getItem method of DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# getItem()

@short: returns the object of an item by its id

@signature: {'getItem(id: string | number): object;'}

@params:
- `id: string | number` - the id of a selected item

@returns:
The object of an item.

@example:

const item = component.data.getItem(123);

@descr:

**Related sample**: [Data. Get item](https://snippet.dhtmlx.com/wz2sscrm)

You can access the original properties of an item like this:

~~~jsx
const item = component.data.getItem(123);
const text = item.text;
~~~
