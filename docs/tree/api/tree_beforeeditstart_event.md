---
sidebar_label: beforeEditStart
title: JavaScript Tree - beforeEditStart Event 
description: You can explore the beforeEditStart event of Tree in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeEditStart

@short: fires before editing of an item has started

@signature: {'beforeEditStart: (value: string, id: string | number) => boolean | void;'}

@params:
- `value: string` - the value of an item
- `id: string | number` - the id of an item

@returns:
Return `false` to block editing of an item; otherwise, `true`.

@example:
tree.events.on("beforeEditStart", function(value, id) {
    // your logic here
    return false;
});

@descr:

**Related sample**: [Tree. Events](https://snippet.dhtmlx.com/vux1ye9g)

@changelog: added in v7.0
