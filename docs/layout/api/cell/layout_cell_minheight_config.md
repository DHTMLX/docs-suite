---
sidebar_label: minHeight
title: minHeight
---          

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


@relatedapi:
layout/api/layout_height_config.md
layout/api/layout_maxheight_config.md

@related: layout/cell_configuration.md#cell-size

@changelog: added in v7.0