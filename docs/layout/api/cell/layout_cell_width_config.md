---
sidebar_label: width
title: width
---          

@short: sets the width of a cell

@signature: width?: number | string;

@example: 
var layout = new dhx.Layout("layout_container", {
    cols: [
      { header: "Cell header", width: "300px" }
    ]
});


@template:	api_config
@descr: 
Starting from v7.0, the width of a cell can be automatically adjusted to the width of its content. For that, set the **width** configuration option to *"content"*:

~~~js
var layout = new dhx.Layout("layout_container", {
    cols: [
      { header: "Cell header", width: "content" } /*!*/
    ]
});
~~~




@related: layout/init.md#initializelayout
layout/cell_configuration.md#cellsize


@relatedsample: https://snippet.dhtmlx.com/miej9gb9	Layout. Sizes

@relatedapi:
layout/api/layout_minwidth_config.md
layout/api/layout_maxwidth_config.md