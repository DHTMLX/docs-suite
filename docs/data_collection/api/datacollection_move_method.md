---
sidebar_label: move()
title: move()
---          

@short: moves an item to the defined position

@signature: {'move(id: Id | Id[], index: number, target?: DataCollection): Id | Id[];'}

@params:
- `id: string | string[]` - the ids of items to move
- `index: number` - the index to move items to
- `target: object` - optional, the target data collection object

@returns:
Either a string with the item's id or an array of string values with ids of items.

@example:
component.data.move("4",5); // moves the item with id:4 to the position with index 5

@descr:

**Related sample**: [Data. Move](https://snippet.dhtmlx.com/fi66bi8h)
