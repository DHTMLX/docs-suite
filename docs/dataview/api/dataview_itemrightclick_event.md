---
sidebar_label: itemRightClick
title: itemRightClick
---          

@short: fires on right clicking an item 

@signature: {'itemRightClick: (id: string | number, e: MouseEvent) => void;'}

@params:
- `id: string | number` - the id of a right-clicked item
- `e: MouseEvent` - a native HTML event object

@example:
dataview.events.on("ItemRightClick", function(id, e){
    // your code here
});

@descr:

**Related sample**: [Dataview. Dataview Events](https://snippet.dhtmlx.com/2d74uyoh)

@changelog: added in v6.4
