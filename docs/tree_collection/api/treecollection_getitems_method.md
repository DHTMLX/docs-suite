---
sidebar_label: getItems()
title: JavaScript TreeCollection - getItems Method 
description: Learn how the getItems method of TreeCollection gets the array of the child items of an item, or of the top-level items when called for the root. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
---

# getItems()

@short: returns the child items of an item

#### Usage

~~~ts
type Id = string | number;
getItems(id: Id): IDataItem[];
~~~

@params:
- `id: Id` - the id of the parent item

@returns:
An array with the child items of the item.

@example:
const items = toolbar.data.getItems("menu1");

@descr:

**Related API**:
- [`haveItems()`](tree_collection/api/treecollection_haveitems_method.md)
- [`getLength()`](tree_collection/api/treecollection_getlength_method.md)
- [`eachChild()`](tree_collection/api/treecollection_eachchild_method.md)
