---
sidebar_label: rowCss
title: JavaScript TreeGrid - rowCss Config 
description: You can explore the rowCss config of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# rowCss

@short: Optional. Sets style for a row

@signature: {'rowCss?: (row: object) => string;'}

@params:
The function takes the object of a row as a parameter and returns a string with the name of a CSS class.

@example:
<style>
    .my_custom_row {
        background: coral;
    }
</style>

const treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [
        // columns config
    ],
    rowCss: (row) => { return row.custom ? "my_custom_row" : "" },
    data: dataset
});

@descr:

**Related sample**: [TreeGrid. Custom row style](https://snippet.dhtmlx.com/3ojyoryn)

[comment]: # (@related: treegrid/configuration.md#row-style treegrid/initialization.md#initialize-treegrid)
