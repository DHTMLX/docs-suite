---
sidebar_label: beforeRedo
title: JavaScript Grid - beforeRedo Event 
description: You can explore the beforeRedo event of Grid history in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeRedo

@short: triggered before redoing an action

@signature: {'beforeRedo: (action: IAction) => boolean | void;'}

@params:
The callback of the event is called with the following parameters:
- `action` - the action object from the redo stack.

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

**Related article**: 

**Related API**: 

@changelog:
added in v9.2