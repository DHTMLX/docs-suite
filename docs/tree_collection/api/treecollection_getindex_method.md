---
sidebar_label: getIndex()
title: JavaScript TreeCollection - getIndex Method 
description: Learn how the getIndex method of TreeCollection gets the position of an item among the child items of its parent in a tree collection, or -1 for a missing item. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
---

# getIndex()

@short: returns the index of an item by its id

#### Usage

~~~ts
type Id = string | number;
getIndex(id: Id): number;
~~~

@params:
- `id: Id` - the id of the item

@returns:
The index of the item among the child items of its parent, or `-1` if the item doesn't exist.

@example:
const index = toolbar.data.getIndex("add_btn");

@descr:

**Related API**:
- [`getId()`](tree_collection/api/treecollection_getid_method.md)
- [`getParent()`](tree_collection/api/treecollection_getparent_method.md)
- [`getVisibleIndex()`](tree_collection/api/treecollection_getvisibleindex_method.md)
