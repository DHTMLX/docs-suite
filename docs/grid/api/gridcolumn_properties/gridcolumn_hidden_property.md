---
sidebar_label: hidden
title: JavaScript Grid column - hidden Config 
description: You can explore the hidden config of Grid column in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# hidden

@short: Optional. Defines whether a column is hidden

### Usage

~~~jsx
hidden?: boolean; 
~~~

@default: false

@descr:
### Example

~~~jsx
const grid = new dhx.Grid("grid_container", {
    columns: [
        { id: "population", header: [{ text: "Population" }], hidden: true },
        // more columns configuration objects
    ],
    // more options
});
~~~

**Related article**: [Hidden columns](grid/configuration.md#hidden-columns)

**Related sample**: [Grid. Hidden columns](https://snippet.dhtmlx.com/lh7ma639)
