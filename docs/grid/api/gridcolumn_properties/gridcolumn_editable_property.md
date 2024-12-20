---
sidebar_label: editable
title: JavaScript Grid column - editable Config 
description: You can explore the editable config of Grid column in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# editable

@short: Optional. Defines whether a column is editable

## Usage

~~~jsx
editable?: boolean, 
~~~

@default: false

@example:
const grid = new dhx.Grid("grid_container", {
    columns: [
        { 
            width: 150, id:"project",
            editable: false,
            header: [
              {text: "Project"}, {content: "selectFilter"}
            ]
        },
        { width:150, id: "owner", header: [{text: "Owner"},{content: "inputFilter"}]},
        { width:150, id: "hours", header: [{text: "Hours"}, {content: "inputFilter"}]},
        // more columns
    ],
    data: data,
    editable: true
});


@descr:

**Related article**: [Editing Grid and separate columns](grid/configuration.md#editing-grid-and-separate-columns)


