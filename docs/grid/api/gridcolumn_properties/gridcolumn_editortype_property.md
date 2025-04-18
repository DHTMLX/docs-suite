---
sidebar_label: editorType
title: JavaScript Grid column - editorType Config 
description: You can explore the editorType config of Grid column in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# editorType

@short: Optional. Defines the type of an editor used in a column

### Usage

~~~jsx
editorType?: "input" | "select" | "datePicker" | "combobox" | "multiselect" | "textarea"; 
~~~

@default:

- for the column `type: string`:
    - with the `autoHeight` configuration option: the "textarea" editor type
    - without the `autoHeight` configuration option: the "input" editor type
- for the column `type: date`: the "datePicker" editor type
- for the column `type: number`: the "input" editor type

@descr:
### Example

~~~jsx
const grid = new dhx.Grid("grid_container", {
    columns: [
        { id: "project", header: [{ text: "Project" }], editorType: "textarea" }, 
        // more columns configuration objects
    ],
    editable: true,
    autoHeight: true,
    // more options
});
~~~

**Related article**: [Types of column editor](grid/configuration.md#types-of-column-editor)

**Related sample**: [Grid. Editing with different editors (combobox, select, multiselect, boolean, date, number)
](https://snippet.dhtmlx.com/w2cdossn)

