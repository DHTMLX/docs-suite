---
sidebar_label: collapsed
title: JavaScript Grid - collapsed Config 
description: You can explore the collapsed config of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# collapsed

@short: Optional. Defines that a treegrid is initialized in the collapsed state

:::note
The property works only for Grid with the `type: "tree"` configuration option
:::

@signature: {'collapsed?: boolean;'}

@default: false

@example:         
const grid = new dhx.Grid("grid_container", {
    type: "tree",
    columns: [
        // columns config
    ],
    data: dataset,
    collapsed: true
});

@descr:

**Related sample**: [Grid (TreeGrid). Collapsed mode](https://snippet.dhtmlx.com/t4iswa2y)

@changelog: added in v8.1
