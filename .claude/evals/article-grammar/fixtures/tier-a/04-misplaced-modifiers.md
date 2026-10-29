---
sidebar_label: Region selection
title: JavaScript Matrix - Region Selection
description: You can explore the region selection in the documentation of the Acme JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of Acme Suite.
---

# Region selection

Selection and focus are cornerstone Acme JavaScript Matrix Suite entities. The selection state survives a repaint and a partial data reload.

## Configuration

The `selection` property of the Acme JavaScript Matrix widget accepts three values: `"cell"`, `"row"`, and `"complex"`.

The Acme Matrix Panel extension's export routine writes the current range to a file.

Users can select the cells that match a saved filter in the toolbar and the context menu. The selected range stays in the store until the next selection.

## Tracking changes

Handle the `beforeSelect`, `afterSelect`, and `afterUnSelect` events to update a custom status bar.

~~~js
// Attach the beforeSelect, afterSelect, and afterUnSelect handlers to refresh the panel
matrix.events.on("afterSelect", (row, column) => {
    panel.setValue(row + ":" + column);
});
~~~

To highlight related rows, call the `setStyle()` and `paint()` methods in the handler. The handler receives the ids of the row and the column, so the panel can render a label without an extra request.
