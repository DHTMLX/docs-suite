---
sidebar_label: copy()
title: JavaScript TreeCollection - copy Method 
description: Learn how the copy method of TreeCollection copies one or several items together with their children to a new position or parent, in the same or another collection. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
---

# copy()

@short: copies an item or several items to the specified position

#### Usage

~~~ts
type Id = string | number;

copy(id: Id | Id[], index: number, target?: IDataCollection | ITreeCollection, targetId?: Id): Id | Id[];
~~~

@params:
- `id: Id | Id[]` - the id of the item or an array with ids of the items to copy
- `index: number` - the index to place the copy at
- `target?: IDataCollection | ITreeCollection` - optional, the collection to place the copy into; the current collection by default
- `targetId?: Id` - optional, the id of the parent item the copies will be placed into

@returns:
The id of the copy or an array with the ids of the copies.

@example:
// copies an item within the toolbar
toolbar.data.copy("print_btn", 2);

// copies an item to another toolbar
toolbar2.data.copy("save_btn", 1, toolbar1.data);

@descr:

**Related API**:
- [`canCopy()`](tree_collection/api/treecollection_cancopy_method.md)
- [`move()`](tree_collection/api/treecollection_move_method.md)
