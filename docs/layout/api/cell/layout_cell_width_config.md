---
sidebar_label: width
title: JavaScript Layout - width Config 
description: You can explore the width config of Layout in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# width

@short: sets the width of a cell

@signature: {'width?: number | string;'}

@example:
const layout = new dhx.Layout("layout_container", {
    cols: [
        { header: "Cell header", width: "300px" }
    ]
});

@descr:

**Related sample**: [Layout. Sizes](https://snippet.dhtmlx.com/miej9gb9)

Starting from v7.0, the width of a cell can be automatically adjusted to the width of its content. For that, set the **width** configuration option to *"content"*:

~~~js {5}
const layout = new dhx.Layout("layout_container", {
    cols: [
        { 
            header: "Cell header", 
            width: "content" 
        }
    ]
});
~~~

[comment]: # (@related: layout/initialization.md#initialize-layout layout/cell_configuration.md#cell-size)

[comment]: # (@relatedapi: layout/api/layout_minwidth_config.md layout/api/layout_maxwidth_config.md)
