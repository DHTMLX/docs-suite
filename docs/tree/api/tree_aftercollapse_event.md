---
sidebar_label: afterCollapse
title: afterCollapse
---          

@short: fires after collapsing a tree item

@signature: afterCollapse: (id: string) => void;

@params:
- id       string      the id of a collapsed item

@example:
tree.events.on("AfterCollapse", function(id) {
    // your logic here
});

@template: api_event
@descr:

@relatedsample: https://snippet.dhtmlx.com/vux1ye9g	Tree. Events

@changelog: added in v6.4

@related: [](tree/events_handling.md) 