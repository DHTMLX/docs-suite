---
sidebar_label: haveItems()
title: JavaScript TreeCollection - haveItems Method 
description: Learn how the haveItems method of TreeCollection checks whether an item of a tree collection has child items and returns true or false. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
---

# haveItems()

@short: checks whether an item has child items

#### Usage

~~~ts
type Id = string | number;
haveItems(id: Id): boolean;
~~~

@params:
- `id: Id` - the id of the item

@returns:
`true`, if the item has child items; otherwise, `false`.

@example:
if (toolbar.data.haveItems("menu1")) {
    // do something
}

@descr:

**Related API**:
- [`getItems()`](tree_collection/api/treecollection_getitems_method.md)
- [`getLength()`](tree_collection/api/treecollection_getlength_method.md)
