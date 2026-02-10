---
sidebar_label: customFilter
title: JavaScript Grid column header - customFilter Config 
description: You can explore the customFilter config of Grid column header in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# customFilter

@short: Optional. A callback function that allows defining custom filtering logic

#### Usage

~~~jsx
customFilter?: (
    value: string | number | Date | Date[],
    match: string | string[] | Date | Date[]
) => boolean;
~~~

@params:

The callback function takes two parameters:
	- `value` - (required) the cell value in the row
	- `match` - (required) the value selected in the filter
	
and returns *true*, if the row matches the filtering criteria, otherwise *false*.

@example:
const grid = new dhx.Grid("grid_container", {
    columns: [
        { width: 150, id: "country", header: [
            { text: "Country" },
            { 
                content: "comboFilter",
                // filters values by the same length
                customFilter: (value, match) => value.length === match.length
            }
        ]},   
    ],
    // other configuration properties
});

@descr:

**Related article**: [Customizing header/footer filters](/grid/configuration/#customizing-headerfooter-filters)

**Related sample**: [Grid. Custom filters in the header (dateFilter, comboFilter, inputFilter, selectFilter)](https://snippet.dhtmlx.com/gcidkxjg)