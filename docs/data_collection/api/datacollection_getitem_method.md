---
sidebar_label: getItem()
title: JavaScript DataCollection - getItem Method 
hide_title: true
description: You can explore the getItem method of DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# getItem()

@short: returns the object of an item by its id

@signature: {'getItem(id: Id): T;'}

@params:
`id: string | number` - the id of a selected item

@returns:
The object of an item.

@example:

var item = component.data.getItem(123);

@descr:

**Related sample**: [Data. Get Item](https://snippet.dhtmlx.com/wz2sscrm)

You can access the original properties of an item like this:

~~~js
var item = component.data.getItem(123);
var text = item.text;
~~~
