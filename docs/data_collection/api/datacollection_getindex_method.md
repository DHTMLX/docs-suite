---
sidebar_label: getIndex()
title: JavaScript DataCollection - getIndex Method 
description: Learn how the getIndex method of DataCollection gets the position of an item in a flat collection by its id and returns -1 if there is no such item. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
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
The index of the item, or `-1` if the item doesn't exist.

@example:
const index = component.data.getIndex("1"); // -> returns 0

@descr:

**Related sample**: [Data. Get index](https://snippet.dhtmlx.com/1ottirdt)

**Related API**:
- [`getId()`](data_collection/api/datacollection_getid_method.md)
- [`getVisibleIndex()`](data_collection/api/datacollection_getvisibleindex_method.md)
