---
sidebar_label: sortAs
title: JavaScript Grid column header - sortAs Config 
description: You can explore the sortAs config of Grid column header in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# sortAs

@short: Optional. A function that defines the type to sort data as (e.g. string, number, date, etc.)

#### Usage

~~~jsx
sortAs?: (cellValue) => string | number;
~~~

@params:
The callback function takes one parameter:
- `cellValue` - (required) the current cell value

and returns a *string* or *number* used as the sort key.

@example:
const grid = new dhx.Grid("grid_container", {
    columns: [
        { 
            width: 150, 
            id: "task", 
            header: [{ 
                text: "Name",
                // returns a lowercase string for case-insensitive sorting
                sortAs: (cellValue) => cellValue.toLowerCase()
                // -> "Apple" → "apple", "BANANA" → "banana", "cherry" → "cherry"
            }],
            // other column properties
        },
        // more columns configuration objects
    ],
    // more options
});