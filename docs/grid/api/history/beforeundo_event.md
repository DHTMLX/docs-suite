---
sidebar_label: beforeUndo
title: JavaScript Grid - beforeUndo Event 
description: You can explore the beforeUndo event of Grid history in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeUndo

@short: triggered before undoing an action

@signature: {'beforeUndo: (action: IAction) => boolean | void;'}

@params:
The callback of the event is called with the following parameters:
- `action` - the action object containing the type (`type`), an array of rows (`batch`), and the inverse action (`inverse`), if applicable.

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

grid.history.events.on("beforeUndo", (action) => {
    if (action.type === "change") {
        console.log("Undoing change is prohibited");
        return false;
    }
});

@descr:

**Related article**: 

**Related API**: 

@changelog:
added in v9.2