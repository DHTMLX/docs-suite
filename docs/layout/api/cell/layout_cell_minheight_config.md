---
sidebar_label: minHeight
title: JavaScript Layout - minHeight Config 
description: You can explore the minHeight config of Layout in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# minHeight

@short: the minimal height to be set for a cell

@signature: {'minHeight?: number | string;'}

@example:
var layout = new dhx.Layout("layout_container", {
    cols: [
      { header: "Cell header", minHeight: "40px"}
    ]
});

@descr:

In case both **height** and **minHeight** properties are set in the configuration of a cell, the **minHeight** option is a priority.

@changelog: added in v7.0

[comment]: # (@relatedapi: layout/api/layout_height_config.md layout/api/layout_maxheight_config.md)

[comment]: # (@related: layout/cell_configuration.md#cell-size)
