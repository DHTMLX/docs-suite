---
sidebar_label: afterEditStart
title: afterEditStart
---          

@short: fires after editing of a tree item has started

@signature: afterEditStart: (value: string, id: string) => void;

@params: 
- value     string  the value of an item
- id        string  the id of an item

@example:
tree.events.on("AfterEditStart", function(value, id) {
    // your logic here
});


@template: api_event
@descr:

[Tree. Events](https://snippet.dhtmlx.com/vux1ye9g)

@changelog: added in v7.0


