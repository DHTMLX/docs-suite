---
sidebar_label: collapse()
title: JavaScript Grid - collapse Method 
description: You can explore the collapse method of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# collapse()

@short: collapses a tree node by id

:::note
The method works only for Grid with the `type: "tree"` configuration option
:::

@signature: {'collapse(id: string | number): void;'}

@params:
- `id: string | number` - the id of a node to collapse

@example:
const grid = new dhx.Grid("grid_container", {
    type: "tree",
    columns: [
       // columns config
    ],
    data: dataset,
});

grid.collapse("native");

@descr:



