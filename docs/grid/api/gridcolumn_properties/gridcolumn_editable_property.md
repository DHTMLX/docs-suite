---
sidebar_label: editable
title: JavaScript Grid column - editable Config 
description: You can explore the editable config of Grid column in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# editable

@short: Optional. Defines whether a column is editable

### Usage

~~~jsx
editable?: boolean; 
~~~

@default: false

@descr:
### Example

~~~jsx
const grid = new dhx.Grid("grid_container", {
    columns: [
        { id: "project", header: [{ text: "Project" }], editable: false },
        // more columns configuration objects
    ],
    editable: true,
    // more options
});
~~~

**Related article**: [Editing Grid and separate columns](grid/configuration.md#editing-grid-and-separate-columns)


