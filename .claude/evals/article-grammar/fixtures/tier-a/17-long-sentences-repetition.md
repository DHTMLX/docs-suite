---
sidebar_label: Editing cells
title: JavaScript Matrix - Editing Cells
description: You can explore how to edit cells in Matrix in the documentation of the Acme JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of Acme Suite.
---

# Editing cells

Matrix opens an editor when a user double-clicks a cell.

## Opening an editor

Call the `edit()` method to open an editor. The `edit()` method also accepts a column id, and if the id is missing, the `edit()` method uses the first editable column.

~~~js
const matrix = new acme.Matrix("matrix_container", {
    columns: [{ id: "name", editor: "text" }]
});

// edit() locks the row, edit() loads the value, edit() validates the input,
// saves the record and repaints the cell before the call returns
matrix.edit({ row: "1", column: "name" });
~~~

The row id and the column id identify the cell.

When you call the method, the widget locks the row, the editor loads the value, the validator checks the input and the cell repaints when the user leaves the field.

## Saving the value

The editor reads the value and shows it in the input field.

To store the value you call `endEdit()`, then the widget fires the `afterEditEnd` event, writes the record and sends the change to the backend.

Matrix stores the edited value in the data set. Matrix repaints the cell. Matrix keeps the editor open when validation fails.
