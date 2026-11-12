---
sidebar_label: getId()
title: JavaScript TreeCollection - getId Method 
description: Learn how the getId method of TreeCollection gets the id of the item placed at the specified index among the child items of a parent in a tree collection. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
---

# getId()

@short: returns the id of an item by its index

#### Usage

~~~ts
type Id = string | number;
getId(index: number, parent?: Id): Id;
~~~

@params:
- `index: number` - the index of the item among the child items of its parent
- `parent?: Id` - optional, the id of the parent item; the root of the collection by default

@returns:
The id of the item.

@example:
const id = tree.data.getId(2, "1"); // -> "3"

@descr:

**Related API**:
- [`getIndex()`](tree_collection/api/treecollection_getindex_method.md)
- [`getItem()`](tree_collection/api/treecollection_getitem_method.md)
