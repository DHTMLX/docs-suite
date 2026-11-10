---
sidebar_label: canCopy()
title: JavaScript TreeCollection - canCopy Method 
description: You can explore the canCopy method of TreeCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# canCopy()

@short: checks whether an item can be copied into another item of the collection

#### Usage

~~~ts
type Id = string | number;
canCopy(id: Id, target: Id): boolean;
~~~

@params:
- `id: Id` - the id of the item to copy
- `target: Id` - the id of the item the copy should be placed into

@returns:
`true` if the item can be copied into the target item; otherwise, `false`. An item can't be copied into itself or into any of its child items.

@example:
component.data.canCopy(from.id, id);

@descr:
