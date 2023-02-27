---
sidebar_label: itemRightClick
title: JavaScript DataView - itemRightClick Event 
description: You can explore the itemRightClick event of DataView in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# itemRightClick

@short: fires on right clicking an item

@signature: {'itemRightClick: (id: string | number, e: MouseEvent) => void;'}

@params:
- `id: string | number` - the id of a right-clicked item
- `e: MouseEvent` - a native HTML event object

@example:
dataview.events.on("itemRightClick", function(id, e){
    // your code here
});

@descr:

**Related sample**: [Dataview. Events](https://snippet.dhtmlx.com/2d74uyoh)

@changelog: added in v6.4
