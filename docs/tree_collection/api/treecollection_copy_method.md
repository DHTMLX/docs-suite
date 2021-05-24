---
sidebar_label: copy()
title: copy()
---          

@short: adds a copy of an item and places it in the specified position

@signature: {'copy(id: Id | Id[], index: number, target?: ITreeCollection, targetId?: Id): Id | Id[];'}

@params:
- `id: string | string[]` - the ids of the items to copy
- `index: number` - the position of a copy
- `target: TreeCollection` - a data collection where the copy will be stored
- `targetId: string`- (for menu options) the ID of a menuItem to which a copy of the menu option will be placed

@returns:
The item's id or an array with ids of items.

@example:
toolbar.data.copy("print_btn",2)
// another toolbar
toolbar2.data.copy("save_btn",1,toolbar1.data);

@descr:
