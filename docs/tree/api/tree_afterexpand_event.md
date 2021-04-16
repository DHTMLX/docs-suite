---
sidebar_label: afterExpand
title: afterExpand
---          

@short: fires after expanding a tree item

@signature: afterExpand: (id: string) => void;

@params:
- id    string      the id of an expanded item

@example:
tree.events.on("AfterExpand", function(id) {
    // your logic here
});

@template: api_event
@descr:

@changelog: added in v6.4

@relatedsample: https://snippet.dhtmlx.com/vux1ye9g	Tree. Events

@related: tree/events_handling.md