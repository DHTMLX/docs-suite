---
sidebar_label: minWidth
title: JavaScript Grid column - minWidth Config 
description: You can explore the minWidth config of Grid column in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# minWidth

@short: Optional. The minimum width to be set for a column

### Usage

~~~jsx
minWidth?: number;
~~~

@default: 20

@descr:
### Example

~~~jsx
const grid = new dhx.Grid("grid_container", {
    columns: [
        {
            minWidth: 150,
            id: "project",
            header: [{text: "Project"}],
        },
        // more columns   
    ],
    data: dataset
});
~~~

**Related sample**: [Grid. Columns min width](https://snippet.dhtmlx.com/x5hmpi9d)