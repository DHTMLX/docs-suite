---
sidebar_label: exists()
title: JavaScript TreeCollection - exists Method 
description: Learn how the exists method of TreeCollection checks whether an item with the specified id is present at any level of a tree collection. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
---

# exists()

@short: checks whether the specified item exists in the collection

#### Usage

~~~ts
type Id = string | number;
exists(id: Id): boolean;
~~~

@params:
- `id: Id` - the id of the item in question

@returns:
`true` if the item exists; otherwise, `false`.

@example:
const item = component.data.exists("1"); 

@descr:

**Related API**:
- [`getItem()`](tree_collection/api/treecollection_getitem_method.md)
- [`getParent()`](tree_collection/api/treecollection_getparent_method.md)
