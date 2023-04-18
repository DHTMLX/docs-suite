---
sidebar_label: move()
title: JavaScript DataCollection - move Method 
description: You can explore the move method of DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# move()

@short: moves an item to the defined position

@signature: {'move(id: (string | number) | (string | number)[], index: number, target?: object): (string | number) | (string | number)[];'}

@params:
- `id: string | string[]` - the ids of items to move
- `index: number` - the index to move items to
- `target: object` - optional, the target data collection object

@returns:
Either the item's id or an array with ids of items.

@example:
component.data.move("4",5); // moves the item with id:4 to the position with index 5

@descr:

**Related sample**: [Data. Move](https://snippet.dhtmlx.com/fi66bi8h)
