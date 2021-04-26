---
sidebar_label: beforeCheck
title: beforeCheck
---

@short: fires before the state of an item is changed

@signature: beforeCheck: (index: number, id: Id) => boolean | void;

@params:
- index		number		the position of an item
- id		string		the id of the item

@returns:
- param     boolean     false - to block changing the state of a tree item, otherwise true

@example:
tree.events.on("beforeCheck", function (index, id) {
    console.log("beforeCheck", index, id);
    // return false;
});


@template: api_event
@descr:

@changelog: added in v7.1

@relatedapi: tree/api/tree_aftercheck_event.md