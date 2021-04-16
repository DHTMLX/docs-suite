---
sidebar_label: headerHeight
title: headerHeight
---          

@short: sets the height of a Layout cell

@signature: headerHeight?: number;

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


@template:	api_config
@descr: 
If the [](layout/api/layout_header_config.md) property is not set in the config of a cell, the **headerHeight** option will add a header without text for a cell.


@relatedsample: https://snippet.dhtmlx.com/bxqnzesl	Layout. Header

@relatedapi: 
layout/api/layout_header_config.md
layout/api/layout_headericon_config.md
layout/api/layout_headerimage_config.md

@changelog: added in v6.4

@related: layout/init.md#initializelayout
layout/cell_configuration.md#heightofaheadercell