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

@default: "input"

@descr:
### Example

~~~jsx
const grid = new dhx.Grid("grid_container", {
    columns: [
        {
            width: 150, id: "project", 
            header: [{ text: "Project" }, { content: "selectFilter" }], 
            editorType: "textarea"
        }
    // more columns
    ],
    data: data,
    editable: true,
    autoHeight: true
});
~~~

**Related article**: [Types of column editor](grid/configuration.md#types-of-column-editor)

**Related sample**: [Grid. Editing with different editors (combobox, select, multiselect, boolean, date, number)
](https://snippet.dhtmlx.com/w2cdossn)

