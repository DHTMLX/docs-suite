---
sidebar_label: undo()
title: JavaScript Grid - undo Method 
description: You can explore the undo method of Grid history in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# undo()

:::tip pro version only 
This functionality requires PRO version of the DHTMLX Grid (or DHTMLX Suite) package.
:::

@short: undoes the last action in the Grid history 

Depending on the type of the action, the method either applies the inverse action (for the "change" and "removeAll" types) or restores data (for the "add" and "remove" types).

:::note
If the history is empty, the module is disabled, or no inverse action is available (for actions with the "change" and "removeAll" types), the [`error`](grid/api/history/error_event.md) event is triggered.
:::

@signature: {'undo(): void;'}

@example:
// The example shows undoing the removal of all rows
const grid = new dhx.Grid("grid_container", {
    columns: [
        { id: "name", header: [{ text: "Name" }] },
        { id: "value", header: [{ text: "Value" }] },
    ],
    data: [
        { id: "1", name: "Item 1", value: 10 },
        { id: "2", name: "Item 2", value: 20 },
    ],
    history: true
});

// removing all rows
const removedData = grid.data.serialize();
grid.data.removeAll();
grid.history.add({
    type: "removeAll",
    batch: [],
    inverse: { type: "add", batch: removedData },
});

// undoing the action
grid.history.undo();
console.log(grid.history.getHistory().length); // -> 0
console.log(grid.history.canRedo()); // -> true

@descr:

**Related article**: [Applying undo/redo operations to Grid history actions](grid/usage_history.md/#applying-undoredo-operations-to-grid-history-actions)

**Related API**: [`redo()`](grid/api/history/redo_method.md), [`canUndo()`](grid/api/history/canundo_method.md)

@changelog:
added in v9.2