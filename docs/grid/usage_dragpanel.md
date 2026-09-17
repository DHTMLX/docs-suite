---
sidebar_label: Work with DragPanel module
title: JavaScript Grid - Work with DragPanel module 
description: You can explore how to work with DragPanel module of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Work with DragPanel module

:::tip Pro version only 
This functionality requires PRO version of the DHTMLX Grid (or DHTMLX Suite) package.
:::

The `DragPanel` module adds auxiliary functionality for moving rows in the `dhx.Grid` component. 

![Grid rows with drag handle panels shown in the leftmost column for row reordering in DHTMLX Suite](/img/grid/dragpanel_module.png)

Grid activates the module automatically when the [Drag-and-Drop functionality](grid/configuration.md#drag-n-drop) for rows is enabled and either the [`BlockSelection`](grid/usage_blockselection.md) or [`Clipboard`](grid/usage_clipboard.md) module is enabled. 

You can also adjust the appearance and behavior of the `DragPanel` module with the [configuration options](grid/configuration.md#adjusting-dragpanel-module).

## Initializing the DragPanel module

To initialize the `DragPanel` module, use the [`dragPanel`](grid/api/grid_dragpanel_config.md) property in the configuration of the `dhx.Grid` component. Grid also activates the module automatically if:

- The row Drag-and-Drop is enabled, for example, with `dragItem: "row"` or `dragItem: "both"`
- The [`BlockSelection`](grid/usage_blockselection.md) or [`Clipboard`](grid/usage_clipboard.md) module is enabled

~~~jsx
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
    blockSelection: true, // triggers `DragPanel` activation when `dragItem` is enabled
    // or
    dragPanel: true // enables the `DragPanel` module
});
~~~

**Related sample**: [Grid (TreeGrid). DragPanel. Initialization](https://snippet.dhtmlx.com/uevdwjuo)

The `dragPanel` property can also be set as an *object* to enable the module and specify additional configuration options.
Learn how to configure the drag panel in the [Configuration](grid/configuration.md#adjusting-dragpanel-module) guide.

## Using events of the DragPanel module

To work with the drag panel more flexibly, you can apply the related events of the `DragPanel` module:

- [`dragPanelItemClick`](grid/api/dragpanel/dragpanelitemclick_event.md)
- [`dragPanelItemMouseDown`](grid/api/dragpanel/dragpanelitemmousedown_event.md)