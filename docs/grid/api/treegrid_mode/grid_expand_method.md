---
sidebar_label: expand()
title: JavaScript Grid - expand Method 
description: You can explore the expand method of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# expand()

@short: expands a tree node by id

:::note
The method works only for Grid with the `type: "tree"` configuration option
:::

@signature: {'expand(id: string | number): void;'}

@params:
- `id: string | number` - the id of a node to expand

@example:
const grid = new dhx.Grid("grid_container", {
    type: "tree",
    columns: [
       // columns config
    ],
    data: dataset,
});

grid.expand("native");

@descr: