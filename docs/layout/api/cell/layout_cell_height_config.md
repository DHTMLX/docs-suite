---
sidebar_label: height
title: JavaScript Layout - height Config 
description: You can explore the height config of Layout in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# height

@short: Optional. Sets the height of a cell

@signature: {'height?: number | string;'}

@example:
const layout = new dhx.Layout("layout_container", {
    cols: [
        { header: "Cell header", height: "300px" }
    ]
});

@descr:

**Related sample**: [Layout. Sizes](https://snippet.dhtmlx.com/miej9gb9)

Starting from v7.0, the height of a cell can be automatically adjusted to the height of its content. For that, set the **height** configuration option to *"content"*:

~~~js {5}
const layout = new dhx.Layout("layout_container", {
    cols: [
        { 
            header: "Cell header", 
            height: "content" 
        }
    ]
});
~~~

[comment]: # (@related: layout/initialization.md#initialize-layout layout/cell_configuration.md#cell-size)

[comment]: # (@relatedapi: layout/api/layout_minheight_config.md layout/api/layout_maxheight_config.md)
