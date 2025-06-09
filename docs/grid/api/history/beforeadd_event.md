---
sidebar_label: beforeAdd
title: JavaScript Grid - beforeAdd Event 
description: You can explore the beforeAdd event of Grid history in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeAdd

@short: triggered before adding an action to the history

@signature: {'beforeAdd: (action: IAction) => boolean | void;'}

@params:
The callback of the event is called with the following parameters:
- `action` - the action object to be added.

@returns:
Returning `false` cancels the addition.

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

**Related article**: 

**Related API**: 

@changelog:
added in v9.2