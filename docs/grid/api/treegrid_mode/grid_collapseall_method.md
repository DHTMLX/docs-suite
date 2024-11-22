---
sidebar_label: collapseAll()
title: JavaScript Grid - collapseAll Method 
description: You can explore the collapseAll method of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# collapseAll()

@short: collapses all expanded tree nodes

:::note
The method works only for Grid with the `type: "tree"` configuration option
:::

@signature: {'collapseAll(): void;'}

@example:
const grid = new dhx.Grid("grid_container", {
    type: "tree",
    columns: [
       // columns config
    ],
    data: dataset,
});

grid.collapseAll();

@descr:



@changelog: added in v6.3