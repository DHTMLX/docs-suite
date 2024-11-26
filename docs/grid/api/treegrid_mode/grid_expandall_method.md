---
sidebar_label: expandAll()
title: JavaScript Grid - expandAll Method 
description: You can explore the expandAll method of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# expandAll()

@short: expands all collapsed tree nodes

:::note
The method works only for Grid with the `type: "tree"` configuration option
:::

@signature: {'expandAll(): void;'}

@example:
const grid = new dhx.Grid("grid_container", {
    type: "tree",
    columns: [
       // columns config
    ],
    data: dataset,
});

grid.expandAll();

@descr:

@changelog: added in v6.3