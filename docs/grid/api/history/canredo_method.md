---
sidebar_label: canRedo()
title: JavaScript Grid - canRedo Method 
description: You can explore the canRedo method of Grid history in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# canRedo()

@short: checks whether an action within the Grid history can be redone

@signature: {'canRedo(): boolean;'}

@returns: Returns `true` if the redo stack contains actions and the module is not disabled.

@example:
// The example shows checking whether redo is possible after undoing
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

// modifying data
const updatedItem = { id: "1", name: "Updated Item", value: 15 };
grid.data.update("1", updatedItem);
grid.history.add({
    type: "change",
    batch: [{ ...updatedItem }],
    inverse: { type: "change", batch: [{ id: "1", name: "Item 1", value: 10 }] },
});

// undoing and checking
grid.history.undo();
if (grid.history.canRedo()) {
    console.log("Redo is possible");
    grid.history.redo();
}

@descr:

**Related article**: [Applying undo/redo operations to Grid history actions](grid/usage_history.md/#applying-undoredo-operations-to-grid-history-actions)

**Related API**: [`redo()`](grid/api/history/redo_method.md)

@changelog:
added in v9.2