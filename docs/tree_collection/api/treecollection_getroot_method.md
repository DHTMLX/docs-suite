---
sidebar_label: getRoot()
title: JavaScript TreeCollection - getRoot Method 
description: Learn how the getRoot method of TreeCollection gets the id of the root that holds the top-level items of a tree collection and serves as their parent. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
---

# getRoot()

@short: returns the id of the root of the collection

#### Usage

~~~ts
type Id = string | number;
getRoot(): Id;
~~~

@returns:
The id of the root of the collection, which is the parent of the top-level items.

@example:
const rootId = toolbar.data.getRoot();

@descr:

**Related API**:
- [`getParent()`](tree_collection/api/treecollection_getparent_method.md)
- [`getItems()`](tree_collection/api/treecollection_getitems_method.md)
