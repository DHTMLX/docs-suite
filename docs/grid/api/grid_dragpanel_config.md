---
sidebar_label: dragPanel
title: JavaScript Grid - dragPanel Config 
description: You can explore the dragPanel config of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# dragPanel

@short: Optional. Enables/disables the dragPanel module within a grid

### Usage

~~~jsx
dragPanel?:
    | boolean
    | {
        css?: string;
        icon?: string;
        width?: number;
    };
~~~

@default: false

:::note
The module is automatically enabled, if the row Drag-and-Drop is active (e.g., `dragItem: "row"` or `dragItem: "both"`), and either the `BlockSelection` or `Clipboard` modules are enabled.
:::

@example:
const grid = new dhx.Grid("grid_container", {
    columns: [
        { id: "a", header: [{ text: "A" }] },
        { id: "b", header: [{ text: "B" }] },
    ],
    data: [
        { id: "1", a: "A1", b: "B1" },
        { id: "2", a: "A2", b: "B2" },
    ],
    dragItem: "both", // enables row Drag-and-Drop
    blockSelection: true, // triggers the `DragPanel` activation, when `dragItem` is enabled
    // or
    dragPanel: true // enables the `DragPanel` module
});

@descr:

The `dragPanel` property can be set in two ways:

- as a *boolean* value it enables or disables the `dragPanel` module upon the component initialization
- as an *object* it enables the module and allows defining additional configuration during initialization:
	- `css` - specifies a custom CSS class for styling the drag panel
	- `icon` - defines a custom icon for the drag handle
	- `width` - sets the width of the drag panel in pixels

The following example demonstrates configuring the `DragPanel` module with custom styling and width:

~~~html
<style>
    .custom-drag-panel {
        background-color: var(--dhx-color-primary);
        border: 1px solid var(--dhx-color-secondary);
    }
</style>

<script>
const grid = new dhx.Grid("grid_container", {
    columns: [
        { id: "a", header: [{ text: "A" }] },
        { id: "b", header: [{ text: "B" }] },
    ],
    data: [
        { id: "1", a: "A1", b: "B1" },
        { id: "2", a: "A2", b: "B2" },
    ],
    dragPanel: {
        css: "custom-drag-panel",
        icon: "dxi dxi-drag",
        width: 40
    }
});
</script>
~~~

**Related article:** [Using the DragPanel module](grid/configuration.md/#using-the-dragpanel-module)

@changelog: added in v9.2