---
sidebar_label: id
title: JavaScript Layout - id Config 
description: You can explore the id config of Layout in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# id

@short: Optional. The id of a cell

@signature: {'id?: string;'}

@example:
const layout = new dhx.Layout("layout_container", {
    cols: [
        { header: "Cell header", id:"1"}
    ]
});

@descr:
:::info
Please note that if you specify the `id` fields for cells, their values should be **unique**. You can also omit the `id` fields in the configuration of cells. In this case they will be generated automatically.
:::

[comment]: # (@related: layout/initialization.md#initialize-layout)
