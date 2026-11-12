---
sidebar_label: canCopy()
title: JavaScript TreeCollection - canCopy Method 
description: Learn how the canCopy method of TreeCollection checks whether an item can be copied into another item, which is impossible for the item itself and its children. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
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

**Related API**:
- [`copy()`](tree_collection/api/treecollection_copy_method.md)
- [`move()`](tree_collection/api/treecollection_move_method.md)
