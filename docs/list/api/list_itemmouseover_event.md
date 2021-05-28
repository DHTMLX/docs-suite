---
sidebar_label: itemMouseOver
title: JavaScript List - itemMouseOver Event 
description: You can explore the itemMouseOver event of List in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# itemMouseOver

@short: fires on moving the mouse pointer over an item

@signature: {'itemMouseOver: (id: string | number, events: Event) => void;'}

@params:
- `id: string | number` - the id of an item
- `events: Event` - a native event object

@example:
list.events.on("ItemMouseOver", function(id, event) {
    console.log("Item id:" + id);
);

@descr:

**Related sample**: [List. List Events](https://snippet.dhtmlx.com/iwt1yd61)

@changelog: added in v6.4
