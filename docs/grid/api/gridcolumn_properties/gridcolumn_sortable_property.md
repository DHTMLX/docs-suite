---
sidebar_label: sortable
title: JavaScript Grid column - sortable Config 
description: You can explore the sortable config of Grid column in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# sortable

@short: Optional. Defines whether a column is sortable

### Usage

~~~jsx
sortable?: boolean; 
~~~

@default: true

@descr:
### Example

~~~jsx
const grid = new dhx.Grid("grid_container", {
    columns: [
        { width: 200, id: "country", header: [{ text: "Country" }] },
        { width: 150, id: "land", header: [{ text: "Land" }], sortable: false },
        { width: 150, id: "density", header: [{ text: "Density" }] }
    ],
    data: dataset
});
~~~

**Related article**: [Sortable columns](grid/configuration.md#sortable-columns)