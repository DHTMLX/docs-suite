---
sidebar_label: colspan
title: JavaScript Grid column header - colspan Config 
description: You can explore the colspan config of Grid column header in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# colspan

@short: Optional. The number of columns in a colspan

### Usage

~~~jsx
colspan?: number;
~~~

@descr:
### Example

~~~jsx
const grid = new dhx.Grid("grid_container", {
    columns: [
        { 
            width: 150, id: "start_date", 
            // the "Calendar" header cell spans this column and the next one
            header: [{ text: "Calendar", colspan: 2 }, { text: "Start date" }]
            // other column properties 
        },
        { 
            width: 150, id: "end_date", 
            // an empty object leaves the place taken by the colspan
            header: [{}, { text: "End date" }]
        }
        // more columns configuration objects
    ],
    // more options
});
~~~

**Related sample**: [Grid. Grouped headers (spans)](https://snippet.dhtmlx.com/eol76o68)
