---
sidebar_label: Edit cells
title: JavaScript Matrix - Edit Cells
description: You can explore how to edit cells first in the grid and then in the form in the documentation of the Acme JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of Acme Suite.
---

# Edit cells

The Matrix opens an inline editor on a double click.

## Enable editing

To turn on inline editing, first set the `editable` property. Then define the editor type for each column. Finally, call the `render()` method.

~~~js
const matrix = new acme.Matrix("matrix_container", {
    editable: true,
    columns: [
        // first read the config, then build the editor, and finally focus the input
        { id: "team", editor: "text" }
    ]
});
~~~

Another option is to declare the editor in the column config. You can also handle the `beforeEditStart` event and build a custom editor.

Follow the steps below:

1. Add the `beforeEditStart` handler.
2. Return `false` from it.
3. Call `setValue()` on your editor.

## Save changes

Prior to version 3.2, the widget wrote the edited value into the record only after the editor lost focus. Now the widget updates the record on every keystroke.

By default, the `autoSave` property is disabled and the Matrix keeps changes in memory. If you set it to `true`, the widget sends a request after each edit.

Editor types return different values:

| Editor | Returned value |
| --- | --- |
| `text` | string |
| `number` | number |
