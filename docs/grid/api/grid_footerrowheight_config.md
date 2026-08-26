---
sidebar_label: footerRowHeight
title: JavaScript Grid - footerRowHeight Config 
description: You can explore the footerRowHeight config of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# footerRowHeight

@short: Optional. Sets the height of rows (levels) in the footer

@signature: {'footerRowHeight?: number | (number | "auto")[];'}

@default: 40

@example:
const grid = new dhx.Grid("grid_container", {
    columns: [
        // columns config
    ],
    footerRowHeight: [50, "auto"]
});

@descr:

**Related sample**: [Grid. Header, footer and rows height](https://snippet.dhtmlx.com/wjcjl80i)

Grid renders the footer as a stack of levels (rows). The number of levels is defined by the longest `footer` array among the columns:

~~~jsx
columns: [
    { id: "price", footer: [{ text: summary => `Avg: ${summary.avg}` }, { text: "Price" }] }, // 2 levels
    { id: "stock", footer: ["", { text: "In stock" }] },
]
~~~

The `footerRowHeight` property defines how tall those levels are and can be set in two ways:

- as a *number* - the same height, in pixels, is applied to every level of the footer:

~~~jsx
const grid = new dhx.Grid("grid_container", {
    columns: [
        // columns config
    ],
    footerRowHeight: 50 // both levels are 50px tall
});
~~~

- as an *array* - the levels are sized individually. The item at index *i* describes level *i*, counting from the topmost one. An item can be either a height in pixels or the *"auto"* keyword, which adjusts the level height to its content:

~~~jsx
const grid = new dhx.Grid("grid_container", {
    columns: [
        // columns config
    ],
    footerRowHeight: ["auto", 60] // the first level fits its content, the second one is 60px tall
});
~~~

The total height of the footer is calculated as a sum of all level heights in it.

@changelog: the array value with individual level heights and the *"auto"* keyword were added in v9.4

[comment]: # (@related: grid/initialization.md#initialize-grid grid/configuration.md#headerfooter-height)
