---
sidebar_label: afterEditStart
title: JavaScript TreeGrid - afterEditStart Event 
description: You can explore the afterEditStart event of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterEditStart

@short: fires after editing of a cell has started

@signature: {'afterEditStart: (row: object, column: object, editorType: string) => void;'}

@params:
The callback of the event is called with the following parameters:

- `row: object` - an object with a row configuration
- `column: object` - an object with a column configuration
- `editorType: string` - the type of a cell editor: "input", "select", "datePicker", "checkbox", "combobox", "textarea", "multiselect"

@example:
grid.events.on("afterEditStart", (row, column, editorType) => {
    // your logic here
});

@descr:

@changelog: added in v6.1
