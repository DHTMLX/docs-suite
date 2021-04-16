---
sidebar_label: beforeEditStart
title: beforeEditStart
---          

@short: fires before editing of an item has started

@signature: beforeEditStart: (value: string, id: string) => boolean | void;

@params: 
- value     string  the value of an item
- id        string  the id of an item

@returns:
- result	boolean, void		false - to block editing of an item, otherwise true


@example:
tree.events.on("BeforeEditStart", function(value, id) {
    // your logic here
    return false;
});


@template: api_event
@descr:

[Tree. Events](https://snippet.dhtmlx.com/vux1ye9g)

@changelog: added in v7.0

