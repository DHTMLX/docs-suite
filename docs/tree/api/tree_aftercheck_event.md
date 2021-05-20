---
sidebar_label: afterCheck
title: afterCheck
---

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
