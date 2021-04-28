---
sidebar_label: focusChange
title: focusChange
---          

@short: fires on moving focus to a new item
todoanton any приходит из d.ts и еще string, number
@signature: {'focusChange: (focusIndex: number, id: string) => any;'}

@params:
- focusIndex		number					the position of an item
- id		string, number			the id of an item


@example:
list.events.on("FocusChange", function(index, id){
    // your code here
});


@template: api_event
@descr:

**Related sample**: [List. List Events](https://snippet.dhtmlx.com/iwt1yd61)

