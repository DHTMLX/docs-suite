---
sidebar_label: doubleClick
title: doubleClick
---          

@short: fires on double clicking an item

@signature: {'doubleClick: (id: string | number, events: Event) => void;'}

@params:
- `id: string, number` - the id of a clicked item
- `events: Event` - a native event object

@example:
list.events.on("DoubleClick", function(id, e){
   console.log("The item "+ list.selection.getId(id) +" was double clicked.");
});

@descr:

**Related sample**: [List. List Events](https://snippet.dhtmlx.com/iwt1yd61)	

@changelog: added in v6.1
