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
    editing: true, 
    keyNavigation: false
});

@descr:

**Related sample**: [Grid. Key navigation](https://snippet.dhtmlx.com/y9kdk0md)

You need to set the [selection](grid/api/grid_selection_config.md) and [editable](grid/api/grid_editable_config.md) properties in the configuration object of Grid to enable all available shortcut keys.  Read the details in the [Key Navigation](grid/configuration.md#keyboard-navigation) article.

@changelog: added in v6.3

[comment]: # (@related: grid/initialization.md#initialize-grid grid/configuration.md#keyboard-navigation)
