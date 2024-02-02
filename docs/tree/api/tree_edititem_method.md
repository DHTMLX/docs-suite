---
sidebar_label: editItem()
title: JavaScript Tree - editItem Method 
description: You can explore the editItem method of Tree in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# editItem()

@short: edits a Tree item

@signature: {'editItem(id: string | number, config: object): void;'}

@params:
- `id: string | number` - the id of an item
- `config: object` - optional, the config object of an editor. The parameter includes the following properties:
    - `mode: string` - the type of an editor:
        - "text" (by default) for an input
        - "select" for a select
    - `options: array` - optional, an array of additional options. It works only with `mode: "select"`.

@example:
tree.events.on("itemDblClick", function (id) {
    tree.editItem(id);
});

// or

tree.events.on("itemDblClick", function (id) {
    tree.editItem(id,{ mode: "select", options: [1, 2, 3, 4, 5] });
});

@descr:

[comment]: # (@related: tree/work_with_tree.md#editing-an-item)

[comment]: # (@relatedapi: tree/api/tree_editable_config.md)
