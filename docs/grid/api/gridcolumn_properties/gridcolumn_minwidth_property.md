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


@descr:
### Example

~~~jsx
const grid = new dhx.Grid("grid_container", {
    columns: [
        { id: "project", header: [{ text: "Project" }], minWidth: 150 },
        // more columns configuration objects   
    ],
    // more options
});
~~~

**Related sample**: [Grid. Columns min width](https://snippet.dhtmlx.com/x5hmpi9d)