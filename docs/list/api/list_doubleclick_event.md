---
sidebar_label: doubleClick
title: JavaScript List - doubleClick Event 
description: You can explore the doubleClick event of List in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# doubleClick

@short: fires on double clicking an item

@signature: {'doubleClick: (id: string | number, events: Event) => void;'}

@params:
- `id: string | number` - the id of a clicked item
- `events: Event` - a native event object

@example:
list.events.on("doubleClick", function(id, e){
   console.log("The item "+ list.selection.getId(id) +" was double clicked.");
});

@descr:

**Related sample**: [List. Events](https://snippet.dhtmlx.com/iwt1yd61)    

@changelog: added in v6.1
