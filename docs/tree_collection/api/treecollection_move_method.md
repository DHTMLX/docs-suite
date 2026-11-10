---
sidebar_label: move()
title: JavaScript TreeCollection - move Method 
description: You can explore the move method of TreeCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
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
- `targetId?: Id` - optional, the id of the parent item the moved items will be placed into

@returns:
The id of the moved item or an array with the ids of the moved items.

@example:
toolbar.data.move("profile_btn", -1);

@descr:

:::note 
Pass the id of the item with the same type as it has in the item configuration. For example, if the id is set as the number `1`, the method doesn't move the item when it gets the string `"1"`.
:::
