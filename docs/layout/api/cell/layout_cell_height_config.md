---
sidebar_label: height
title: height
---          

@short: sets the height of a cell

@signature: {'height?: number | string;'}

@example: 
var layout = new dhx.Layout("layout_container", {
    cols: [
      { header: "Cell header", height: "300px" }
    ]
});



@descr:
 
Starting from v7.0, the height of a cell can be automatically adjusted to the height of its content. For that, set the **height** configuration option to *"content"*:

~~~js
var layout = new dhx.Layout("layout_container", {
    cols: [
      { header: "Cell header", height: "content" } /*!*/
    ]
});
~~~

**Related sample**: [Layout. Sizes](https://snippet.dhtmlx.com/miej9gb9)

@related: layout/init.md#initialize-layout
layout/cell_configuration.md#cell-size

@relatedapi: 
layout/api/layout_minheight_config.md
layout/api/layout_maxheight_config.md
