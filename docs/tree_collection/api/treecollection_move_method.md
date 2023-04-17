---
sidebar_label: move()
title: JavaScript TreeCollection - move Method 
description: You can explore the move method of TreeCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# move()

@short: moves items to different positions

@signature: {'move(id: (string | number) | (string | number)[], index: number, target?: object, targetId?: (string | number) | (string | number)[]): (string | number) | (string | number)[];'}

@params:
- `id: (string | number) | (string | number)[]` - the ids of items to move
- `index: number` - the index to move items to
- `target: object` - optional, the target tree collection object
- `targetId: (string | number) | (string | number)[]` - optional, the id of the parent item where the moved items will be placed

@returns:
The item's id or an array with ids of items.

@example:
toolbar.data.move("profile_btn",-1);

@descr:

{{note The ID should always be a string, even if in the control configuration you've set it as a number.}}
