---
sidebar_label: beforeCheck
title: JavaScript Tree - beforeCheck Event 
description: You can explore the beforeCheck event of Tree in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# beforeCheck

@short: fires before the state of an item is changed

@signature: beforeCheck: (index: number, id: Id) => boolean | void;

@params:
- `index: number` - the position of an item
- `id: string` - the id of the item

@returns:
Return `false` to block changing the state of a tree item; otherwise, `true`.

@example:
tree.events.on("beforeCheck", function (index, id) {
    console.log("beforeCheck", index, id);
    // return false;
});

@descr:

@changelog: added in v7.1

[comment]: # (@relatedapi: tree/api/tree_aftercheck_event.md)
