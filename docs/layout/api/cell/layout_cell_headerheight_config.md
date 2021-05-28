---
sidebar_label: headerHeight
title: JavaScript Layout - headerHeight Config 
hide_title: true
description: You can explore the headerHeight config of Layout in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# headerHeight

@short: sets the height of a Layout cell

@signature: {'headerHeight?: number;'}

@default: 37

@example:
var layout = new dhx.Layout("layout", {
    rows: [
        {
            id: "row1"
        },
        {
            id: "row2",
	        headerHeight: 80
        }
    ]
});

@descr:

**Related sample**: [Layout. Header](https://snippet.dhtmlx.com/bxqnzesl)

If the [](layout/api/cell/layout_cell_header_config.md) property is not set in the config of a cell, the **headerHeight** option will add a header without text for a cell.

@changelog: added in v6.4

[comment]: # (@relatedapi: layout/api/layout_header_config.md layout/api/layout_headericon_config.md layout/api/layout_headerimage_config.md)

[comment]: # (@related: layout/init.md#initialize-layout layout/cell_configuration.md#height-of-a-header-cell)
