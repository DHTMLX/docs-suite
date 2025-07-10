---
sidebar_label: beforeAdd
title: JavaScript Grid - beforeAdd Event 
description: You can explore the beforeAdd event of Grid history in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeAdd

:::tip pro version only 
This functionality requires PRO version of the DHTMLX Grid (or DHTMLX Suite) package.
:::

@short: triggered before adding an action to the history

@signature: {'beforeAdd: (action: IAction) => boolean | void;'}

@params:
The callback of the event is called with the following parameters:
- `action: IAction` - the action object to be added containing:
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

grid.history.events.on("beforeAdd", (action) => {
    if (action.type === "add") {
        console.log("Adding a new row is prohibited");
        return false;
    }
});

@descr:

**Related article**: [Adding/removing Grid history actions](grid/usage_history.md/#addingremoving-grid-history-actions)

**Related API**: [`add()`](grid/api/history/add_method.md), [`afterAdd()`](grid/api/history/afteradd_event.md)

@changelog:
added in v9.2