---
sidebar_label: align
title: JavaScript Grid column header - align Config 
description: You can explore the align config of Grid column header in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# align

@short: Optional. Aligns data in the header

#### Usage

~~~jsx
align?: "left" | "center" | "right";
~~~

@default: "left"

@example:
const grid = new dhx.Grid("grid_container", {
    columns: [
        { id: "name", header: [{ text: "Name", align: "center" }], align: "right"}
        // more columns configuration objects
    ],
    // more options
});

@descr:
**Related article**: [Alignment](/grid/configuration/#alignment)