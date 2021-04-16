---
sidebar_label: hidden
title: hidden
---          

@short: defines whether a cell is hidden

@signature: hidden?: boolean;

@example: 
var layout = new dhx.Layout("layout_container", {
    cols: [
      { header: "Cell header", hidden:true}
    ]
});


@template:	api_config
@descr: 


@related: layout/init.md#initializelayout
layout/cell_configuration.md#hiddencell

@relatedapi: 
layout/api/layout_show_method.md
layout/api/layout_hide_method.md
layout/api/layout_isvisible_method.md