---
sidebar_label: error
title: JavaScript Grid - error Event 
description: You can explore the error event of Grid history in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# error

@short: triggered when an error occurs

:::note
The event is triggered when an error occurs, such as the module is disabled, the history is empty, the action type is invalid, the inverse action is missing for `undo`
:::

@signature: {'error: (error: string, action: IAction | null) => void;'}

@params:
The callback of the event is called with the following parameters:
- `error` - the error message
- `action: IAction` - the action object associated with the error, or `null`. The `action` object contains the following properties:
    - `type: ActionType` - the type of action: "add", "remove", "removeAll", or "change"
    - `batch: IRow[]` - an array of rows representing the data affected by the action (e.g., added, removed, or modified rows)
    - `inverse?: IAction` - the inverse action required for undoing (mandatory for the "change" and "removeAll" types, not required for other types)
    - `timestamp?: number` - the timestamp of the action in milliseconds (set automatically, if not provided)

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

grid.history.events.on("error", (error, action) => {
    console.log("Error:", error, action);
});

@descr:

**Related article**: [Work with History module](grid/usage_history.md)


@changelog:
added in v9.2