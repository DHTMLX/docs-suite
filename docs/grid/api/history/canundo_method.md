---
sidebar_label: canUndo()
title: JavaScript Grid - canUndo Method 
description: You can explore the canUndo method of Grid history in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# canUndo()

@short: checks whether an action can be undone

@signature: {'canUndo(): boolean;'}

@returns: Returns `true` if the history contains actions and the module is not disabled.

@example:
// The example shows checking whether undo is possible after removing a row
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

// removing a row
const removedItem = { id: "1", name: "Item 1", value: 10 };
grid.data.remove("1");
grid.history.add({
    type: "remove",
    batch: [{ ...removedItem }],
});

// checking
if (grid.history.canUndo()) {
    console.log("Undo is possible");
    grid.history.undo();
}

@descr:

**Related article**: [Applying undo/redo operations to Grid history actions](grid/usage_history.md/#applying-undoredo-operations-to-grid-history-actions)

**Related API**: [`undo()`](grid/api/history/undo_method.md)

@changelog:
added in v9.2