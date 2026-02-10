---
sidebar_label: rowspan
title: JavaScript Grid column header - rowspan Config 
description: You can explore the rowspan config of Grid column header in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# rowspan

@short: Optional. The number of rows in a rowspan

#### Usage

~~~jsx
rowspan?: number;
~~~

@example:
const grid = new dhx.Grid("grid_container", {
    columns: [
        { 
            width: 150, id: "start_date", 
            header: [{ text: "Some text", rowspan: 2 }],
            // other column properties 
        }
        // more columns configuration objects
    ],
    // more options
});
