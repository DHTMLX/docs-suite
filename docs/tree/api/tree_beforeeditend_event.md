---
sidebar_label: beforeEditEnd
title: JavaScript Tree - beforeEditEnd Event 
hide_title: true
description: You can explore the beforeEditEnd event of Tree in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# beforeEditEnd

@short: fires before editing of a tree item is finished

@signature: {'beforeEditEnd: (value: string, id: Id) => boolean | void;'}

@params:
- `value: string` - the value of an item
- `id: string` - the id of an item

@returns:
Return `false` to block closing of an editor; otherwise, `true`.

@example:
tree.events.on("BeforeEditEnd", function(value, id) {
    // your logic here
    return false;
});

@descr:

**Related sample**: [Tree. Events](https://snippet.dhtmlx.com/vux1ye9g)

@changelog: added in v7.0
