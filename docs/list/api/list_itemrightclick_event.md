---
sidebar_label: itemRightClick
title: itemRightClick
---          

@short: fires on right clicking an item

@signature: itemRightClick: (id: string | number, e: MouseEvent) => void;

@params:
- id   		string,number			the id of a right-clicked item
- e			MouseEvent				an event object

@example:
list.events.on("itemRightClick", function(id, e){
    // your code here
});


@template: api_event
@descr:

**Related sample**: [List. List Events](https://snippet.dhtmlx.com/iwt1yd61)

@changelog: added in v6.4
