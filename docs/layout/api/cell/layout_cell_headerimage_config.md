---
sidebar_label: headerImage
title: headerImage
---          

@short: an image used in the header of a cell

@signature: {'headerImage?: string;'}

@example:
var layout = new dhx.Layout("layout_container", {
    cols: [
      { header: "Cell header", headerImage:"/img.png"}
    ]
});

@descr:

[comment]: # (@related: layout/init.md#initialize-layout layout/cell_configuration.md#cellheader)

[comment]: # (@relatedapi: layout/api/layout_header_config.md layout/api/layout_headerheight_config.md layout/api/layout_headericon_config.md)
