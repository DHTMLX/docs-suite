---
sidebar_label: multiSort
title: JavaScript Grid - multiSort Config 
description: You can explore the multiSort config of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# multiSort

@short: Optional. Enables the possibility of sorting Grid data by multiple columns

:::tip Pro version only
This functionality is available in the PRO edition only.
:::

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