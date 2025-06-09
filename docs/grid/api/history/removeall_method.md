---
sidebar_label: removeAll()
title: JavaScript Grid - removeAll Method 
description: You can explore the removeAll method of Grid history in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# removeAll()

@short: clears the entire history and the redo stack

:::note
If the module is disabled, the operation is ignored, and the `error` event is triggered.
:::

@signature: {'removeAll(): void;'}

@example:
// The example shows clearing the history after adding multiple rows
const grid = new dhx.Grid("grid_container", {
    columns: [
        { id: "name", header: [{ text: "Name" }] },
        { id: "value", header: [{ text: "Value" }] },
    ],
    data: [
        { id: "1", name: "Item 1", value: 10 },
    ],
    history: true
});

// adding two actions
grid.history.add({
    type: "add",
    batch: [{ id: "2", name: "New Item 1", value: 20 }],
});
grid.history.add({
    type: "add",
    batch: [{ id: "3", name: "New Item 2", value: 30 }],
});

// clearing the history
grid.history.removeAll();
console.log(grid.history.getHistory().length); // -> 0
console.log(grid.history.canRedo()); // -> false

@descr:

**Related article**: 

**Related API**: [`add()`](grid/api/history/add_method.md)

@changelog:
added in v9.2