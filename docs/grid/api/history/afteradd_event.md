---
sidebar_label: afterAdd
title: JavaScript Grid - afterAdd Event 
description: You can explore the afterAdd event of Grid history in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterAdd

@short: triggered before adding an action to the history

@signature: {'afterAdd: (action: IAction) => void;'}

@params:
The callback of the event is called with the following parameters:
- `action` - the object of the added action.

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

grid.history.events.on("afterAdd", (action) => {
    console.log("Action added to history:", action.type);
});

@descr:

**Related article**: 

**Related API**: 

@changelog:
added in v9.2