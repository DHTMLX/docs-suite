---
sidebar_label: getLength()
title: JavaScript TreeCollection - getLength Method 
description: Learn how the getLength method of TreeCollection counts the child items of an item, or the top-level items of a tree collection when called for the root. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
---

# getLength()

@short: returns the number of the child items of an item

#### Usage

~~~ts
type Id = string | number;
getLength(id?: Id): number;
~~~

@params:
- `id?: Id` - optional, the id of the parent item; the root of the collection by default

@returns:
The number of the child items of the item, or of the top-level items if `id` is not set.

@example:
const itemsLength = toolbar.data.getLength("menu1");

@descr:

**Related API**:
- [`getItems()`](tree_collection/api/treecollection_getitems_method.md)
- [`haveItems()`](tree_collection/api/treecollection_haveitems_method.md)
