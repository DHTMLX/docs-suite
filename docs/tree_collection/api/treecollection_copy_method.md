---
sidebar_label: copy()
title: JavaScript TreeCollection - copy Method 
description: You can explore the copy method of TreeCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# copy()

@short: adds a copy of an item and places it in the specified position

#### Usage

~~~ts
type Id = string | number;

copy(id: Id | Id[], index: number, target?: IDataCollection | ITreeCollection, targetId?: Id): Id | Id[];
~~~

@params:
- `id: Id | Id[]` - the id of the item or an array with ids of the items to copy
- `index: number` - the index to create a copy at
- `target?: IDataCollection | ITreeCollection` - optional, the target collection object
- `targetId?: Id` - optional, the id of the parent item the copies will be placed into

@returns:
The item's id or an array with ids of items.

@example:
toolbar.data.copy("print_btn", 2)
// another toolbar
toolbar2.data.copy("save_btn", 1, toolbar1.data);

@descr:
