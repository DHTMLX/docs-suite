---
sidebar_label: getLength()
title: JavaScript TreeCollection - getLength Method 
description: You can explore the getLength method of TreeCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# getLength()

@short: counts child items of a control

#### Usage

~~~ts
type Id = string | number;
getLength(id?: Id): number;
~~~

@params:
- `id?: Id` - optional, the id of the parent item

@returns:
A number of the child items of the control.

@example:
const itemsLength = toolbar.data.getLength("menu1");

@descr:
