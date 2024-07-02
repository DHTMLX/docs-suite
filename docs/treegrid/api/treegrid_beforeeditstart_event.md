---
sidebar_label: beforeEditStart
title: JavaScript TreeGrid - beforeEditStart Event 
description: You can explore the beforeEditStart event of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeEditStart

@short: fires before editing of a cell has started

@signature: {'beforeEditStart: (row: object, column: object, editorType: string) => boolean | void;'}

@params:
The callback of the event is called with the following parameters:

- `row: object` - an object with a row configuration
- `column: object` - an object with a column configuration
- `editorType: string` - the type of a cell editor: "input", "select",  "datePicker", "checkbox", "combobox", "textarea", "multiselect"

@returns:
Return `false` to block editing of a cell; otherwise, `true`.

@example:
grid.events.on("beforeEditStart", (row, column, editorType) => {
    // your logic here
    return false;
});

@descr:

@changelog: added in v6.1