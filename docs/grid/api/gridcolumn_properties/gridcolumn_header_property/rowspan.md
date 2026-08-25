---
sidebar_label: rowspan
title: JavaScript Grid column header - rowspan Config 
description: You can explore the rowspan config of Grid column header in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# rowspan

@short: Optional. The number of rows in a rowspan

### Usage

~~~jsx
rowspan?: number;
~~~

@descr:
### Example

~~~jsx
const grid = new dhx.Grid("grid_container", {
    columns: [
        { 
            width: 150, id: "start_date", 
            // the "Start date" header cell takes both header rows
            header: [{ text: "Start date", rowspan: 2 }]
            // other column properties 
        },
        { 
            width: 150, id: "duration", 
            header: [{ text: "Duration" }, { content: "inputFilter" }]
        }
        // more columns configuration objects
    ],
    // more options
});
~~~

**Related sample**: [Grid. Grouped headers (spans)](https://snippet.dhtmlx.com/eol76o68)
