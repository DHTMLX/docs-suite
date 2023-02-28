---
sidebar_label: copy()
title: JavaScript DataCollection - copy Method 
description: You can explore the copy method of DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# copy()

@short: creates a copy of an item at the defined position

@signature: {'copy(id: Id | Id[], index: number, target?: IDataCollection): Id | Id[];'}

@params:
- `id: string | string[]` - the id of an item to copy
- `index: number` - the index to create a copy at
- `target: object` - optional, the target data collection object

@returns:
The item's id or an array with ids of items.

@example:
component.data.copy("4",5); // copies the item with id:4 to the position with index 5

@descr:

**Related sample**: [Data. Copy](https://snippet.dhtmlx.com/9rws8r05)