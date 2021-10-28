---
sidebar_label: click
title: JavaScript DataView - click Event 
description: You can explore the click event of DataView in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# click

@short: fires on clicking an item

@signature: {'click: (id: string | number, events: Event) => void;'}

@params:
- `id: string | number` - the id of a clicked item
- `events: Event` - a native event object

@example:
dataview.events.on("click", function(id, e){
   console.log("The item with the id "+ dataview.selection.getId(id) +" was clicked.");
});

@descr:

**Related sample**: [Dataview. Dataview Events](https://snippet.dhtmlx.com/2d74uyoh)
