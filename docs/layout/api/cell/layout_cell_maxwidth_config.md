---
sidebar_label: maxWidth
title: JavaScript Layout - maxWidth Config 
description: You can explore the maxWidth config of Layout in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# maxWidth

@short: the maximal width to be set for a cell

@signature: {'maxWidth?: number | string;'}

@example:
var layout = new dhx.Layout("layout_container", {
    cols: [
      { header: "Cell header", maxWidth: "700px"}
    ]
});

@descr:

In case both **width** and **maxWidth** properties are set in the configuration of a cell, the **maxWidth** option is a priority.

@changelog: added in v7.0

[comment]: # (@relatedapi: layout/api/layout_width_config.md layout/api/layout_minwidth_config.md)

[comment]: # (@related: layout/cell_configuration.md#cell-size)
