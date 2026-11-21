---
sidebar_label: Panel events
title: JavaScript Panel - Handle Panel Events
description: You can explore how to handle Panel events in the documentation of the Acme JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of Acme Suite.
---

# Handle panel events

The Panel component reports every edit and export through one event bus. The `panel.state` object provides access to the active cell.

## Connect a panel to data

Complete the following steps to attach a panel to a data source:

1. Declare a container in the markup.
2. Create a `Panel` instance.
3. Load a JSON feed into the panel.

Each panel in a group keeps a separate scroll position. To move a whole group with one scrollbar, set `syncScroll` to `true` instead.

~~~js
const panel = new acme.Panel("panel_container", {
    // applies to every panel in the group, not just the active one
    syncScroll: true
});
panel.load("/data/roster.json");
~~~

**Note**: A group scrolls as *one* surface when row heights match.

## Event reference

The component fires two events:

| Event | Description |
| ----- | ----------- |
| `afterSelect` | Fires after the active row is changed. |
| `beforeExport` | Fires when the export has just started. |

A handler receives the panel item for which the event fires. Call `batch()` to perform an operation on a cell range.

## Panel properties

The component exposes two properties:

| Property | Description |
| ----- | ----------- |
| `align` | Gets or sets the header alignment. |
| `mode` | Gets or sets the edit mode of the active cell. |

## Merge layers

The `merge()` method blends two layers using the alpha channel. The result replaces the content of the active panel.

~~~js
panel.merge("base", "overlay");
~~~

## Row commands

Right-click a row header to open the context menu. This menu lists commands that lock or hide a row.
