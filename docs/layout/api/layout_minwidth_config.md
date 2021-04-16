---
sidebar_label: minWidth
title: minWidth
---          

@short: the minimal width to be set for a cell

@signature: minWidth?: number | string;

@example: 
var layout = new dhx.Layout("layout_container", {
    cols: [
      { header: "Cell header", minWidth: "400px"}
    ]
});


@template:	api_config
@descr: 
In case both **width** and **minWidth** properties are set in the configuration of a cell, the **minWidth** option is a priority.

@changelog: added in v7.0

@relatedapi:
layout/api/layout_width_config.md
layout/api/layout_maxwidth_config.md

@related: layout/cell_configuration.md#cellsize