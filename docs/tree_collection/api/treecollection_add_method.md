---
sidebar_label: add()
title: add()
---          

@short: adds an item to a component

@signature: {'add(obj: IDataItem | IDataItem[], index?: number, parent?: Id): Id | Id[];'}

@params:
- `obj: object | array` - the configuration of the added item
- `index: number` - defines the position of the item in the component
- `parent: string` - the ID of the future parent item

@returns:
The item's id or an array with ids of items.

@example:
myToolbar.data.add({
    type:"button",
    icon:"dxi-plus",
    value:"New"
},1);

@descr:
