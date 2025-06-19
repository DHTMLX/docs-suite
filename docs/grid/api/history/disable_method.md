---
sidebar_label: disable()
title: JavaScript Grid - disable Method 
description: You can explore the disable method of Grid history in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# disable()

@short: disables the module, preventing the addition of new actions to the Grid history and the execution of any operations

@signature: {'disable(): void;'}

@example:
// The example shows disabling the module after adding an action
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

// adding an action
grid.history.add({
    type: "change",
    batch: [{ id: "1", name: "Updated Item", value: 15 }],
    inverse: { type: "change", batch: [{ id: "1", name: "Item 1", value: 10 }] },
});

// disabling the module
grid.history.disable();
console.log(grid.history.isDisabled()); // -> true

// attempting to add a new action
grid.history.add({
    type: "add",
    batch: [{ id: "2", name: "New Item", value: 20 }],
});
console.log(grid.history.getHistory().length); // -> 1 (the new action hasn't been added)

@descr:

**Related article**: [Enabling/disabling History module](grid/usage_history.md/#enablingdisabling-history-module)

**Related API**: [`enable()`](grid/api/history/enable_method.md), [`isDisabled()`](grid/api/history/isdisabled_method.md)

@changelog:
added in v9.2