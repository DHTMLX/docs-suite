---
sidebar_label: focusChange
title: JavaScript DataView - focusChange Event 
description: You can explore the focusChange event of DataView in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# focusChange

@short: fires on moving focus to a new item

@signature: {'focusChange: (focusIndex: number, id: string | number) => void;'}

@params:
- `focusIndex: number` - the position of an item in focus
- `id: string | number` - the id of the item

@example:
dataview.events.on("focusChange", function(index, id){
    // your code here
});

@descr:

**Related sample**: [Dataview. Events](https://snippet.dhtmlx.com/2d74uyoh)
