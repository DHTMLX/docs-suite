---
sidebar_label: beforeEditEnd
title: beforeEditEnd
---          

@short: fires before editing of a tree item is finished

@signature: beforeEditEnd: (value: string, id: string) => boolean | void;

@params: 
- value     string  the value of an item
- id        string  the id of an item

@returns:
- result	boolean		false - to block closing of an editor, otherwise true

@example:
tree.events.on("BeforeEditEnd", function(value, id) {
    // your logic here
    return false;
});

@template: api_event
@descr:

[Tree. Events](https://snippet.dhtmlx.com/vux1ye9g)

@changelog: added in v7.0

