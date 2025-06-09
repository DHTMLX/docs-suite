---
sidebar_label: remove()
title: JavaScript Grid - remove Method 
description: You can explore the remove method of Grid history in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# remove()

@short: removes the last action from the history

:::note
If the history is empty or the module is disabled, the operation is ignored, and an error event is triggered (for a disabled module).
:::

@signature: {'remove(): void;'}

@example:
// The example shows removing the last action from the history after modifying a value
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

// modifying a value via DataCollection
const updatedItem = { id: "1", name: "Updated Item", value: 15 };
grid.data.update("1", updatedItem);

// adding the action to history
grid.history.add({
    type: "change",
    batch: [{ ...updatedItem }],
    inverse: { type: "change", batch: [{ id: "1", name: "Item 1", value: 10 }] },
});

// removing the last action
grid.history.remove();
console.log(grid.history.getHistory().length); // -> 0

@descr:

**Related article**: 

**Related API**: [`add()`](grid/api/history/add_method.md)

@changelog:
added in v9.2