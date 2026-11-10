---
sidebar_label: move()
title: JavaScript DataCollection - move Method 
description: You can explore the move method of DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# move()

@short: moves an item or several items to the specified position

#### Usage

~~~ts
type Id = string | number;

move(id: Id | Id[], index: number, target?: IDataCollection | ITreeCollection): Id | Id[];
~~~

@params:
- `id: Id | Id[]` - the id of the item or an array with ids of the items to move
- `index: number` - the index to move the items to
- `target?: IDataCollection | ITreeCollection` - optional, the collection to move the items to; the current collection by default

@returns:
The id of the moved item or an array with the ids of the moved items.

@example:
component.data.move("4", 5); // moves the item with id:4 to the position with index 5

@descr:

**Related sample**: [Data. Move](https://snippet.dhtmlx.com/fi66bi8h)
