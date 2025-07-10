---
sidebar_label: afterUndo
title: JavaScript Grid - afterUndo Event 
description: You can explore the afterUndo event of Grid history in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterUndo

:::tip pro version only 
This functionality requires PRO version of the DHTMLX Grid (or DHTMLX Suite) package.
:::

@short: triggered after successfully undoing an action

@signature: {'afterUndo: (action: IAction) => void;'}

@params:
The callback of the event is called with the following parameters:
- `action: IAction` - the object of the executed action containing:
    - `type: ActionType` - the type of action: "add", "remove", "removeAll", or "change"
    - `batch: IRow[]` - an array of rows representing the data affected by the action (e.g., added, removed, or modified rows)
    - `inverse?: IAction` - the inverse action required for undoing (for the "change" and "removeAll" types)

@example:
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

grid.history.events.on("afterUndo", (action) => {
    console.log("Action undone:", action.type);
});

@descr:

**Related sample:** [Grid. History. Configuration](https://snippet.dhtmlx.com/vznpyeit)

**Related article**: [Applying undo/redo operations to Grid history actions](grid/usage_history.md/#applying-undoredo-operations-to-grid-history-actions)

**Related API**: [`undo()`](grid/api/history/undo_method.md), [`beforeUndo()`](grid/api/history/beforeundo_event.md)

@changelog:
added in v9.2