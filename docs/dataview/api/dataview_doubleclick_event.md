---
sidebar_label: doubleClick
title: JavaScript DataView - doubleClick Event 
description: You can explore the doubleClick event of DataView in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# doubleClick

@short: fires on double clicking an item

@signature: {'doubleClick: (id: string | number, events: Event) => void;'}

@params:
- `id: string | number` - the id of a clicked item
- `events: Event` - a native event object

@example:
dataview.events.on("doubleClick", function(id, e){
   console.log("The item "+ dataview.selection.getId(id) +" was double clicked.");
});

@descr:

**Related sample**: [Dataview. Dataview Events](https://snippet.dhtmlx.com/2d74uyoh)

@changelog: added in v6.1
