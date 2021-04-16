---
sidebar_label: focusChange
title: focusChange
---          

@short: fires on moving focus to a new item

@signature: focusChange: (focusIndex: number, id: string | numbe) => void;

@params:
- focusIndex		number					the position of an item
- id		string, number			the id of an item


@example:
list.events.on("FocusChange", function(index, id){
    // your code here
});


@template: api_event
@descr:

@relatedsample: https://snippet.dhtmlx.com/iwt1yd61	List. List Events

