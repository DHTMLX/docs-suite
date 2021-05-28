---
sidebar_label: itemRightClick
title: JavaScript List - itemRightClick Event 
hide_title: true
description: You can explore the itemRightClick event of List in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# itemRightClick

@short: fires on right clicking an item

@signature: {'itemRightClick: (id: string | number, events: MouseEvent) => void;'}

@params:
- `id: string | number` - the id of a right-clicked item
- `events: MouseEvent` - a native HTML event object

@example:
list.events.on("itemRightClick", function(id, events){
    // your code here
});

@descr:

**Related sample**: [List. List Events](https://snippet.dhtmlx.com/iwt1yd61)

@changelog: added in v6.4
