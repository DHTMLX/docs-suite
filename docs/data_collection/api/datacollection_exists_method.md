---
sidebar_label: exists()
title: JavaScript DataCollection - exists Method 
description: Learn how the exists method of DataCollection checks whether an item with the specified id is present in a flat collection and returns true or false. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
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
`true`, if the item exists; otherwise, `false`.

@example:
const item = component.data.exists("1"); 

@descr:

**Related sample**: [Data. Exists](https://snippet.dhtmlx.com/2ekntrbk)

**Related API**:
- [`getItem()`](data_collection/api/datacollection_getitem_method.md)
- [`getIndex()`](data_collection/api/datacollection_getindex_method.md)
