---
sidebar_label: focusChange
title: JavaScript DataView - focusChange Event 
description: You can explore the focusChange event of DataView in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# focusChange

@short: fires on moving focus to a new item

@signature: {'focusChange: (focusIndex?: number, id?: string | number) => void;'}

@params:
The callback of the **focusChange** event is called with the following parameters:

- `focusIndex` - (optional) the position of an item in focus
- `id` - (optional) the id of the item

@example:
dataview.events.on("focusChange", function(focusIndex, id){
    // your code here
});

@descr:

**Related sample**: [Dataview. Events](https://snippet.dhtmlx.com/2d74uyoh)

@changelog: 
- Parameters of the callback function became optional in v8.3.14
