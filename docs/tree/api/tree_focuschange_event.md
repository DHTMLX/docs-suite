---
sidebar_label: focusChange
title: focusChange
---          

@short: fires on moving focus to a new item

@signature: focusChange: (index: number, id: string) => void;

@params:
- index		number			the position of an item
- id		string			the id of an item


@example:
tree.events.on("FocusChange", function(index, id){
    // your code here
});


@template: api_event
@descr:


@changelog: added in v7.0
