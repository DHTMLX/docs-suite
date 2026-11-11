---
sidebar_label: move()
title: JavaScript DataCollection - move Method 
description: Learn how the move method of DataCollection moves one or several items to another position in the same collection or to another collection and returns their ids. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
---

# move()

@short: moves an item or several items to the specified position

#### Usage

~~~ts
type Id = string | number;

move(id: Id | Id[], index: number, target?: IDataCollection | ITreeCollection, targetId?: Id): Id | Id[];
~~~

@params:
- `id: Id | Id[]` - the id of the item or an array with ids of the items to move
- `index: number` - the index to move the items to
- `target?: IDataCollection | ITreeCollection` - optional, the collection to move the items to; the current collection by default
- `targetId?: Id` - optional, the id of the parent item to place the moved items into, if `target` is a TreeCollection

@returns:
The id of the moved item or an array with the ids of the moved items.

@example:
component.data.move("4", 5); // moves the item with id:4 to the position with index 5

@descr:

**Related sample**: [Data. Move](https://snippet.dhtmlx.com/fi66bi8h)

**Related API**:
- [`copy()`](data_collection/api/datacollection_copy_method.md)
- [`getIndex()`](data_collection/api/datacollection_getindex_method.md)
