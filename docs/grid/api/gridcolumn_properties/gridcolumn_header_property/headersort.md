---
sidebar_label: headerSort
title: JavaScript Grid column header - headerSort Config 
description: You can explore the headerSort config of Grid column header in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# headerSort

@short: Optional. Enables/disables sorting by clicking the header

#### Usage

~~~jsx
headerSort?: boolean;
~~~

@default: true

@example:
const grid = new dhx.Grid("grid_container", {
    columns: [
        { 
            width: 150, 
            id: "population", 
            header: [{ text: "Project", headerSort: false }]
            // other column properties
        },
        // more columns configuration objects
    ],
    // more options
});