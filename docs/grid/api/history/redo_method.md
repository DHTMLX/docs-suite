---
sidebar_label: redo()
title: JavaScript Grid - redo Method 
description: You can explore the redo method of Grid history in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# redo()

:::tip pro version only 
This functionality requires PRO version of the DHTMLX Grid (or DHTMLX Suite) package.
:::

@short: reapplies the last undone action in the Grid history

:::note
If the redo stack is empty or the module is disabled, the `error` event is triggered.
:::

@signature: {'redo(): void;'}

@example:
// The example shows redoing the undone row addition
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

// adding a new row
const newItem = { id: "2", name: "New Item", value: 20 };
grid.data.add(newItem);
grid.history.add({
    type: "add",
    batch: [{ ...newItem }],
});

// undoing and redoing
grid.history.undo();
grid.history.redo();
console.log(grid.history.getHistory().length); // -> 1
console.log(grid.history.canUndo()); // -> true

@descr:

**Related article**: [Applying undo/redo operations to Grid history actions](grid/usage_history.md/#applying-undoredo-operations-to-grid-history-actions)

**Related API**: [`undo()`](grid/api/history/undo_method.md), [`canRedo()`](grid/api/history/canredo_method.md)

@changelog:
added in v9.2