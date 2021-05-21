---
sidebar_label: itemRightClick
title: itemRightClick
---          

@short: fires on right clicking an item

@signature: {'itemRightClick: (id: string | number, events: MouseEvent) => void;'}

@params:
- `id: string,number` - the id of a right-clicked item
- `events: MouseEvent` - a native HTML event object

@example:
list.events.on("itemRightClick", function(id, events){
    // your code here
});

@descr:

**Related sample**: [List. List Events](https://snippet.dhtmlx.com/iwt1yd61)

@changelog: added in v6.4
