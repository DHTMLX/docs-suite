---
sidebar_label: focusChange
title: focusChange
---          

@short: fires on moving focus to a new item

@signature: focusChange: (index: number, id: string | number ) => void;

@params:
- index 	number 				the position of an item
- id 		string, number 		the id of an item


@example:
dataview.events.on("FocusChange", function(index, id){
    // your code here
});


@template: api_event
@descr:


@relatedsample:
https://snippet.dhtmlx.com/2d74uyoh	Dataview. Dataview Events
