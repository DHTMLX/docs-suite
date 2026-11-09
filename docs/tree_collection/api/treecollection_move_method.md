---
sidebar_label: move()
title: JavaScript TreeCollection - move Method 
description: You can explore the move method of TreeCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# move()

@short: moves items to different positions

#### Usage

~~~ts
type Id = string | number;

move(id: Id | Id[], index: number, target?: IDataCollection | ITreeCollection, targetId?: Id): Id | Id[];
~~~

@params:
- `id: Id | Id[]` - the id of the item or an array with ids of the items to move
- `index: number` - the index to move the items to
- `target?: IDataCollection | ITreeCollection` - optional, the target collection object
- `targetId?: Id` - optional, the id of the parent item the moved items will be placed into

@returns:
The item's id or an array with ids of items.

@example:
toolbar.data.move("profile_btn", -1);

@descr:

:::note 
The id should always be a string, even if in the control configuration you've set it as a number.
:::
