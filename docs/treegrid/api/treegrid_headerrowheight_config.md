---
sidebar_label: headerRowHeight
title: JavaScript TreeGrid - headerRowHeight Config 
description: You can explore the headerRowHeight config of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# headerRowHeight

@short: Optional. Sets the height of rows in the header

@signature: {'headerRowHeight?: number;'}

@default: 40

@example:
const treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [
        // columns config
    ],
    headerRowHeight: 50
});

@descr:

**Related sample**: [TreeGrid. Rows height](https://snippet.dhtmlx.com/xl0i3yof)

The height of the header is calculated as a sum of all row heights in it.

[comment]: # (@related: treegrid/configuration.md#headerfooter-height treegrid/initialization.md#initialize-treegrid)
