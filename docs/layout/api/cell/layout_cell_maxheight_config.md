---
sidebar_label: maxHeight
title: maxHeight
---          

@short: the maximal height to be set for a cell

@signature: {'maxHeight?: number | string;'}

@example:
var layout = new dhx.Layout("layout_container", {
    cols: [
      { header: "Cell header", maxHeight: "100px"}
    ]
});

@descr:

In case both **height** and **maxHeight** properties are set in the configuration of a cell, the **maxHeight** option is a priority.

@changelog: added in v7.0

[comment]: # (@relatedapi: layout/api/layout_height_config.md layout/api/layout_minheight_config.md)

[comment]: # (@related: layout/cell_configuration.md#cell-size)
