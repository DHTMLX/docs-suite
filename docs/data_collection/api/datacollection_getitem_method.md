---
sidebar_label: getItem()
title: JavaScript DataCollection - getItem Method 
description: Learn how the getItem method of DataCollection gets the data object of an item of a flat collection by the id of the item to read or check its properties. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
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

const item = component.data.getItem(123);

@descr:

**Related sample**: [Data. Get item](https://snippet.dhtmlx.com/wz2sscrm)

You can access the original properties of an item like this:

~~~jsx
const item = component.data.getItem(123);
const text = item.text;
~~~

**Related API**:
- [`exists()`](data_collection/api/datacollection_exists_method.md)
- [`getId()`](data_collection/api/datacollection_getid_method.md)
- [`update()`](data_collection/api/datacollection_update_method.md)
