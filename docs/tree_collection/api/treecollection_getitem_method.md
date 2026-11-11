---
sidebar_label: getItem()
title: JavaScript TreeCollection - getItem Method 
description: Learn how the getItem method of TreeCollection gets the data object of an item at any level of a tree collection by the id of the item. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
---

# getItem()

@short: returns the object of an item by its id

#### Usage

~~~ts
type Id = string | number;
getItem(id: Id): IDataItem;
~~~

@params:
- `id: Id` - the id of the item

@returns:
The object of the item.

@example:
const item = toolbar.data.getItem("add_btn");

@descr:

**Related API**:
- [`exists()`](tree_collection/api/treecollection_exists_method.md)
- [`getItems()`](tree_collection/api/treecollection_getitems_method.md)
- [`update()`](tree_collection/api/treecollection_update_method.md)
