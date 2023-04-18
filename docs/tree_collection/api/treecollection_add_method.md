---
sidebar_label: add()
title: JavaScript TreeCollection - add Method 
description: You can explore the add method of TreeCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# add()

@short: adds an item to a component

@signature: {'add(obj: object | object[], index?: number, parent?: string | number): (string | number) | (string | number)[];'}

@params:
- `obj: object | array` - the configuration of the added item
- `index: number` - defines the position of the item in the component
- `parent: string | number` - the ID of the future parent item

@returns:
The item's id or an array with ids of items.

@example:
toolbar.data.add({
    type:"button",
    icon:"dxi-plus",
    value:"New"
},1);

@descr:
