---
sidebar_label: itemMouseOver
title: itemMouseOver
---          

@short: fires on moving the mouse pointer over an item 

@signature: {'itemMouseOver: (id: string | number, e: Event) => void;'}

@params:
- id 	string|number 		the id of an item
- e 	Event 				a native event object

@example:
dataview.events.on("ItemMouseOver", function(id, event) {
    console.log("Item id:" + id);
);

@template: api_event
@descr:

**Related sample**:
- [Dataview. Dataview Events](https://snippet.dhtmlx.com/2d74uyoh)

@changelog: added in v6.4
