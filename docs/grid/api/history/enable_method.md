---
sidebar_label: enable()
title: JavaScript Grid - enable Method 
description: You can explore the enable method of Grid history in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# enable()

@short: enables the module, allowing the addition of new actions to the Grid history

@signature: {'enable(): void;'}

@example:
// The example shows how the module is enabled after deactivation on initialization
const grid = new dhx.Grid("grid_container", {
    columns: [
        { id: "name", header: [{ text: "Name" }] },
        { id: "value", header: [{ text: "Value" }] },
    ],
    data: [
        { id: "1", name: "Item 1", value: 10 },
    ],
    // disabled on initialization
    history: { disabled: true } 
});

// checking the state
console.log(grid.history.isDisabled()); // -> true

// enabling the module
grid.history.enable();
console.log(grid.history.isDisabled()); // -> false

// adding an action
grid.history.add({
    type: "change",
    batch: [{ id: "1", name: "Updated Item", value: 15 }],
    inverse: { type: "change", batch: [{ id: "1", name: "Item 1", value: 10 }] },
});
console.log(grid.history.getHistory().length); // -> 1

@descr:

**Related article**: [Enabling/disabling History module](grid/usage_history.md/#enablingdisabling-history-module)

**Related API**: [`disable()`](grid/api/history/disable_method.md), [`isDisabled()`](grid/api/history/isdisabled_method.md)

@changelog:
added in v9.2