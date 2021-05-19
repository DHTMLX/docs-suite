---
sidebar_label: focusChange
title: focusChange
---          

@short: fires on moving focus to a new item

@signature: {'focusChange: (focusIndex: number, id: string | number) => void;'}

@params:
- `focusIndex: number` - the position of an item in focus
- `id: string|number` - the id of the item

@example:
dataview.events.on("FocusChange", function(index, id){
    // your code here
});

@descr:

**Related sample**: [Dataview. Dataview Events](https://snippet.dhtmlx.com/2d74uyoh)
