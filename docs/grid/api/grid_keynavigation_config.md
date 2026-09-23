---
sidebar_label: keyNavigation
title: JavaScript Grid - keyNavigation Config 
description: You can explore the keyNavigation config of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# keyNavigation

@short: Optional. Enables keyboard navigation in Grid

@signature: {'keyNavigation?: boolean;'}

@default: true

@example:
const grid = new dhx.Grid("grid_container", {
    columns: [
        // columns config
    ],
    data: dataset,
    selection: "complex", 
    editable: true, 
    keyNavigation: false
});

@descr:

**Related sample**: [Grid. Key navigation](https://snippet.dhtmlx.com/y9kdk0md)

Keyboard navigation works without any selection module: the navigation keys move the active cell, but do not select it. Set the [selection](grid/api/grid_selection_config.md) property to move the selection with the keyboard, and set the [editable](grid/api/grid_editable_config.md) property to edit cells from the keyboard. Read the details in the [Key Navigation](grid/configuration.md#keyboard-navigation) article and in the [Grid accessibility](grid/accessibility.md) guide.

@changelog: added in v6.3; the keyboard navigation model was extended in v9.3.5; navigation and editing without a selection module were added in v9.3.12

[comment]: # (@related: grid/initialization.md#initialize-grid grid/configuration.md#keyboard-navigation)
