---
sidebar_label: afterCheck
title: JavaScript Tree - afterCheck Event 
description: You can explore the afterCheck event of Tree in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# afterCheck

@short: fires after the state of an item is changed

@signature: afterCheck: (index: number, id: Id, value: boolean) => void;

@params:
- `index: number` - the position of an item
- `id: string` - the id of the item
- `value: boolean` - the state of the item, *true* if the item is checked; otherwise, *false*

@example:
tree.events.on("afterCheck", function (index, id, value) {
    console.log("afterCheck", index, id, value);
});

@descr:

@changelog: added in v7.1

[comment]: # (@relatedapi: tree/api/tree_beforecheck_event.md)
