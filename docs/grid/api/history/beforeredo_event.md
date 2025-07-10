---
sidebar_label: beforeRedo
title: JavaScript Grid - beforeRedo Event 
description: You can explore the beforeRedo event of Grid history in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeRedo

:::tip pro version only 
This functionality requires PRO version of the DHTMLX Grid (or DHTMLX Suite) package.
:::

@short: triggered before redoing an action

@signature: {'beforeRedo: (action: IAction) => boolean | void;'}

@params:
The callback of the event is called with the following parameters:
- `action: IAction` - the action object from the redo stack containing:
    - `type: ActionType` - the type of action: "add", "remove", "removeAll", or "change"
    - `batch: IRow[]` - an array of rows representing the data affected by the action (e.g., added, removed, or modified rows)
    - `inverse?: IAction` - the inverse action required for undoing (for the "change" and "removeAll" types)

@returns:
Returning `false` cancels the operation.

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

grid.history.events.on("beforeRedo", (action) => {
    if (action.type === "remove") {
        console.log("Redoing removal is prohibited");
        return false;
    }
});

@descr:

**Related article**: [Applying undo/redo operations to Grid history actions](grid/usage_history.md/#applying-undoredo-operations-to-grid-history-actions)

**Related API**: [`redo()`](grid/api/history/redo_method.md), [`afterRedo()`](grid/api/history/afterredo_event.md)

@changelog:
added in v9.2