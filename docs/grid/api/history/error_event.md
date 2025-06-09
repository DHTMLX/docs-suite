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
- `action` - the action object associated with the error, or `null`

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

**Related article**: 

**Related API**: 

@changelog:
added in v9.2