---
sidebar_label: draggable
title: JavaScript Grid column - draggable Config 
description: You can explore the draggable config of Grid column in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# draggable

@short: Optional. Defines whether a column is draggable

### Usage

~~~jsx
draggable?: boolean; 
~~~

@default: false

@descr:
### Example

~~~jsx
const grid = new dhx.Grid("grid_container", {
    columns: [
        { id: "density", header: [{ text: "Density" }], draggable: false },
        // more columns configuration objects
    ],
    dragItem: "column", 
    // more options
});
~~~

**Related article**: [Drag-n-drop inside the grid](grid/configuration.md#drag-n-drop-inside-the-grid)

