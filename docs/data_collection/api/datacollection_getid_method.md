---
sidebar_label: getId()
title: JavaScript DataCollection - getId Method 
description: Learn how the getId method of DataCollection gets the id of the item placed at the specified index of a flat collection, taking the current order into account. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
---

# getId()

@short: returns the id of an item by its index

#### Usage

~~~ts
type Id = string | number;
getId(index: number): Id;
~~~

@params:
- `index: number` - the index of the item

@returns:
The id of the item.

@example:
const id = component.data.getId(0); // -> returns "1"

@descr:

**Related sample**: [Data. Get Id](https://snippet.dhtmlx.com/8e02xliz)

**Related API**:
- [`getIndex()`](data_collection/api/datacollection_getindex_method.md)
- [`getItem()`](data_collection/api/datacollection_getitem_method.md)
- [`getVisibleIndex()`](data_collection/api/datacollection_getvisibleindex_method.md)
