---
sidebar_label: doubleClick
title: doubleClick
---          

@short: fires on double clicking an item

@signature: {'doubleClick: (id: string | number, events: Event) => void;'}

@params:
- `id: string | number` - the id of a clicked item
- `events: Event` - a native event object

@example:
dataview.events.on("DoubleClick", function(id, e){
   console.log("The item "+ dataview.selection.getId(id) +" was double clicked.");
});

@descr:

**Related sample**: [Dataview. Dataview Events](https://snippet.dhtmlx.com/2d74uyoh)

@changelog: added in v6.1
