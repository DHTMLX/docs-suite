---
sidebar_label: maxHeight
title: JavaScript Layout - maxHeight Config 
description: You can explore the maxHeight config of Layout in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# maxHeight

@short: Optional. The maximal height to be set for a cell

@signature: {'maxHeight?: number | string;'}

@example:
const layout = new dhx.Layout("layout_container", {
    cols: [
        { header: "Cell header", maxHeight: "100px"}
    ]
});

@descr:

In case both **height** and **maxHeight** properties are set in the configuration of a cell, the **maxHeight** option is a priority.

@changelog: added in v7.0

[comment]: # (@relatedapi: layout/api/layout_height_config.md layout/api/layout_minheight_config.md)

[comment]: # (@related: layout/cell_configuration.md#cell-size)
