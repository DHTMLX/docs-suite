---
sidebar_label: focusChange
title: JavaScript List - focusChange Event 
description: You can explore the focusChange event of List in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# focusChange

@short: fires on moving focus to a new item

@signature: {'focusChange: (focusIndex: number, id: string | number) => void;'}

@params:
- `focusIndex: number` - the position of an item
- `id: string | number` - the id of an item

@example:
list.events.on("focusChange", function(index, id){
    // your code here
});

@descr:

**Related sample**: [List. Events](https://snippet.dhtmlx.com/iwt1yd61)
