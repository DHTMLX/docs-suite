---
sidebar_label: footerPosition
title: JavaScript Grid - footerPosition Config 
description: You can explore the footerPosition config of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# footerPosition

:::tip pro version only 
This functionality requires PRO version of the DHTMLX Grid (or DHTMLX Suite) package.
:::

@short: Optional. Defines the positioning logic for the footer and bottom-pinned rows within the component container

@signature: {'footerPosition?: "bottom" | "relative";'}

@default: "relative"

@example:
const grid = new dhx.Grid("grid_container", {
    columns: [
        // columns config
    ],
    data: dataset,
    footerPosition: "bottom", // "relative" by default
    bottomSplit: 2
});

@descr:
The property has the following values:

- `relative` - the footer follows the content immediately. If the number of rows is small and doesn't fill the container, the footer moves up to stay attached to the last row.
- `bottom` - the footer and [bottom-pinned rows](/grid/api/grid_bottomsplit_config/) are strictly locked to the bottom edge of the container. They remain at the base of the component even if the content occupies only a fraction of the available height.

@changelog: added in v9.3

**Related sample**:
- [Grid. Fixed rows positioned at the bottom](https://snippet.dhtmlx.com/w5xzdjb7)
- [Grid. Footer positioned at the bottom](https://snippet.dhtmlx.com/8sbf8b2y)

**Related article**: [Configuration](/grid/configuration/#footer-position)