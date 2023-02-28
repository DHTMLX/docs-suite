---
sidebar_label: itemMouseOver
title: JavaScript DataView - itemMouseOver Event 
description: You can explore the itemMouseOver event of DataView in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# itemMouseOver

@short: fires on moving the mouse pointer over an item 

@signature: {'itemMouseOver: (id: string | number, e: Event) => void;'}

@params:
- `id: string | number` - the id of an item
- `e: Event` - a native event object

@example:
dataview.events.on("itemMouseOver", function(id, event) {
    console.log("Item id:" + id);
);

@descr:

**Related sample**: [Dataview. Events](https://snippet.dhtmlx.com/2d74uyoh)

@changelog: added in v6.4
