---
sidebar_label: getParent()
title: JavaScript TreeCollection - getParent Method 
description: Learn how the getParent method of TreeCollection gets the id of the parent of an item in a tree collection, or the id of the root for a top-level item. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
---

# getParent()

@short: returns the id of the parent of an item

#### Usage

~~~ts
type Id = string | number;
getParent(id: Id): Id;
~~~

@params:
- `id: Id` - the id of the item

@returns:
The id of the parent item.

@example:
const parentId = toolbar.data.getParent("add_btn");

@descr:

**Related API**:
- [`getRoot()`](tree_collection/api/treecollection_getroot_method.md)
- [`eachParent()`](tree_collection/api/treecollection_eachparent_method.md)
- [`getItems()`](tree_collection/api/treecollection_getitems_method.md)
