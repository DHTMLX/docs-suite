---
sidebar_label: multiSort
title: JavaScript Grid - multiSort Config 
description: You can explore the multiSort config of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# multiSort

:::tip pro version only 
This functionality requires PRO version of the DHTMLX Grid (or DHTMLX Suite) package.
:::

@short: Optional. Enables the possibility of sorting Grid data by multiple columns


@signature: {'multiSort?: boolean;'}

@default: true

@example:
const grid = new dhx.Grid("grid_container", {
    columns: [
        // columns config
    ],
    multiSort: false,
    data: dataset
});

@descr:

**Related sample**: [Grid. Sorting by multiple columns (multisorting)](https://snippet.dhtmlx.com/4ej0i3qi)

**Related article**: [Sorting by multiple columns](grid/usage.md#sorting-by-multiple-columns)

@changelog:
- Added in v9.1