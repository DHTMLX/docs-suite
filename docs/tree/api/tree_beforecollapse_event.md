---
sidebar_label: beforeCollapse
title: beforeCollapse
---          

@short: fires before collapsing a tree item

@signature: beforeCollapse: (id: string) => boolean | void;

@params: 
- id    string      the id of a collapsed item

@returns:
- param     boolean     false - to block collapsing  a tree item, otherwise true

@example:
tree.events.on("BeforeCollapse", function(id) {
    // your logic here
    return false;
});


@template: api_event
@descr:

@changelog: added in v6.4

@relatedsample: https://snippet.dhtmlx.com/vux1ye9g	Tree. Events

@related: tree/events_handling.md