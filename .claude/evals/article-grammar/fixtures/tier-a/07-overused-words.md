---
sidebar_label: Configure selection
title: JavaScript Roster - Configure Selection
description: You can explore how to use selection in Roster in the documentation of the Acme JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of Acme Suite.
---

# Configure selection

The Roster component tracks the active cell and the current range through the `selection` module. This section provides information on the selection API, its modes, and the related events.

## Enabling selection

Simply set the `selection` property to `true` in the constructor.

~~~js
const roster = new acme.Roster("roster_container", {
    // selection is disabled by default; simply pass true to switch it on
    selection: true
});
~~~

The component highlights one cell at a time by default.

## Selection modes

The `mode` option accepts three values:

| Value | Description |
| ----- | ----------- |
| `"cell"` | selects a single cell **(default)** |
| `"row"` | selects an entire row together with its header |
| `"range"` | selects a rectangular block of cells |

The snippet below demonstrates usage of the `mode` option together with the `getRange()` method.

~~~js
roster.selection.setMode("range");
const cells = roster.selection.getRange();
~~~

**Related sample**: [Roster. Range selection](https://snippet.acme.com/1a2b3c4d)

## Validating a selection

Call the `validate()` method to perform validation of the selected range before you send it to the server.

## Related events

The `afterSelect` event fires when the range changes. Inside the handler, `getRange()` returns the block that the user just selected. The `roster.selection` object provides access to the active cell and the current mode.
