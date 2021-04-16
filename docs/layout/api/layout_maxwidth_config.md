---
sidebar_label: maxWidth
title: maxWidth
---          

@short: the maximal width to be set for a cell

@signature: maxWidth?: number | string;

@signature:  maxWidth?: number | string;

@example: 
var layout = new dhx.Layout("layout_container", {
    cols: [
      { header: "Cell header", maxWidth: "700px"}
    ]
});


@template:	api_config
@descr: 
In case both **width** and **maxWidth** properties are set in the configuration of a cell, the **maxWidth** option is a priority.

@changelog: added in v7.0

@relatedapi:
layout/api/layout_width_config.md
layout/api/layout_minwidth_config.md

@related: layout/cell_configuration.md#cellsize
