---
sidebar_label: colspan
title: JavaScript Grid column header - colspan Config 
description: You can explore the colspan config of Grid column header in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# colspan

@short: Optional. The number of columns in a colspan

#### Usage

~~~jsx
colspan?: number;
~~~

@example:
const grid = new dhx.Grid("grid_container", {
    columns: [
        { 
            width: 150, id: "start_date", 
            header: [{ text: "Calendar", colspan: 2 }, { text: "Start date" }]
            // other column properties 
        }
        // more columns configuration objects
    ],
    // more options
});
