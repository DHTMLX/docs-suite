---
sidebar_label: move()
title: JavaScript TreeCollection - move Method 
hide_title: true
description: You can explore the move method of TreeCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# move()

@short: moves items to different positions

@signature: {'move(id: Id | Id[], index: number, target?: TreeCollection, targetId?: Id): Id | Id[];'}

@params:
- `id: string | string[]` - the ids of items to move
- `index: number` - the index to move items to
- `target: object` - optional, the target tree collection object
- `targetId: string` - optional, the id of the parent item where the moved items will be placed

@returns:
The item's id or an array with ids of items.

@example:
toolbar.data.move("profile_btn",-1);

@descr:

{{note The ID should always be a string, even if in the control configuration you've set it as a number.}}
