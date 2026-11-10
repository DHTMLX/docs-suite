---
sidebar_label: copy()
title: JavaScript DataCollection - copy Method 
description: You can explore the copy method of DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# copy()

@short: copies an item or several items to the specified position

#### Usage

~~~ts
type Id = string | number;

copy(id: Id | Id[], index: number, target?: IDataCollection | ITreeCollection): Id | Id[];
~~~

@params:
- `id: Id | Id[]` - the id of the item or an array with ids of the items to copy
- `index: number` - the index to place the copy at
- `target?: IDataCollection | ITreeCollection` - optional, the collection to place the copy into; the current collection by default

@returns:
The id of the copy or an array with the ids of the copies.

@example:
component.data.copy("4", 5); // copies the item with id:4 to the position with index 5

@descr:

**Related sample**: [Data. Copy](https://snippet.dhtmlx.com/9rws8r05)