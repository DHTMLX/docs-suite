---
sidebar_label: focusChange
title: JavaScript List - focusChange Event 
description: You can explore the focusChange event of List in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# focusChange

@short: fires on moving focus to a new item

@signature: {'focusChange: (focusIndex?: number, id?: string | number) => void;'}

@params:
The callback of the **focusChange** event is called with the following parameters:

- `focusIndex` - (optional) the position of an item
- `id` - (optional) the id of an item

@example:
list.events.on("focusChange", function(focusIndex, id){
    // your code here
});

@descr:

**Related sample**: [List. Events](https://snippet.dhtmlx.com/iwt1yd61)

@changelog: 
- Parameters of the callback function became optional in v8.3.14