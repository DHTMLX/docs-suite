---
sidebar_label: gravity
title: JavaScript Grid - gravity Config 
description: You can explore the gravity config of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# gravity

@short: Optional. Sets the relative width proportions for Grid columns

### Usage

~~~jsx
gravity?: number;
~~~

@descr:
### Example

~~~jsx
const grid = new dhx.Grid("grid_container", {
    columns: [
        { id: "density", header: [{ text: "Density (P/Km²)" }], gravity: 1 },
        // the column with the "area" id is two times wider than the column with the "density" id
        { id: "area", header: [{ text: "Land Area (Km²)" }], gravity: 2 },
    ],
    autoWidth: true,
    // more options
});
~~~