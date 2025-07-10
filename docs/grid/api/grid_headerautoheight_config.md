---
sidebar_label: headerAutoHeight
title: JavaScript Grid - headerAutoHeight Config 
description: You can explore the headerAutoHeight config of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# headerAutoHeight

:::tip pro version only 
This functionality requires PRO version of the DHTMLX Grid (or DHTMLX Suite) package.
:::

@short: Optional. Allows adjusting the height of the header for the content to fit in

@signature: {'headerAutoHeight?: boolean;'}

@default: false

@example:
const grid = new dhx.Grid("grid", {
    columns: [
        // columns config
    ],
    data: dataset,
    autoHeight: false, // disable autoHeight in the data, the header and the footer
    headerAutoHeight: true // enable autoHeight in the header
});

@descr: 

**Related sample**: [Grid. Header/footer autoHeight mode](https://snippet.dhtmlx.com/jwz9k66d?tag=grid)

Redefines the [autoHeight](grid/api/grid_autoheight_config.md) config for the header.

@changelog: added in v8.3
