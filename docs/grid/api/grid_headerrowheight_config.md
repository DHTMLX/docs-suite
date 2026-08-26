---
sidebar_label: headerRowHeight
title: JavaScript Grid - headerRowHeight Config 
description: You can explore the headerRowHeight config of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# headerRowHeight

@short: Optional. Sets the height of rows (levels) in the header

@signature: {'headerRowHeight?: number | (number | "auto")[];'}

@default: 40

@example:
const grid = new dhx.Grid("grid_container", {
    columns: [
        {
            id: "country", width: 200,
            header: [{ text: "Location", colspan: 2 }, { text: "Country" }, { text: "ISO code" }],
        },
        {
            id: "region", width: 200,
            header: ["", { text: "Region" }, { text: "Subregion of the world" }],
        },
    ],
    // level 0 -> 56px, level 1 -> adjusts to its content, level 2 -> 32px
    headerRowHeight: [56, "auto", 32],
    data: dataset,
});

@descr:

**Related sample**: [Grid. Header, footer and rows height](https://snippet.dhtmlx.com/wjcjl80i)

Grid renders the header as a stack of levels (rows). The number of levels is defined by the longest `header` array among the columns:

~~~jsx
columns: [
    { id: "country", header: [{ text: "Region", colspan: 2 }, { text: "Country" }] }, // 2 levels
    { id: "population", header: ["", { text: "Population" }] },
]
~~~

The `headerRowHeight` property defines how tall those levels are and can be set in two ways:

- as a *number* - the same height, in pixels, is applied to every level of the header:

~~~jsx
const grid = new dhx.Grid("grid_container", {
    columns: [
        {
            id: "country", width: 200,
            header: [{ text: "Location", colspan: 2 }, { text: "Country" }, { text: "ISO code" }],
        },
        {
            id: "region", width: 200,
            header: ["", { text: "Region" }, { text: "Subregion of the world" }],
        },
    ],
    headerRowHeight: 56, // all the three levels are 56px tall
    data: dataset,
});
~~~

- as an *array* - the levels are sized individually. The item at index *i* describes level *i*, counting from the topmost one. An item can be either a height in pixels or the *"auto"* keyword, which adjusts the level height to its content:

~~~jsx
const grid = new dhx.Grid("grid_container", {
    columns: [
        {
            id: "country", width: 200,
            header: [{ text: "Location", colspan: 2 }, { text: "Country" }, { text: "ISO code" }],
        },
        {
            id: "region", width: 200,
            header: ["", { text: "Region" }, { text: "Subregion of the world" }],
        },
    ],
    // level 0 -> 56px, level 1 -> adjusts to its content, level 2 -> 32px
    headerRowHeight: [56, "auto", 32],
    data: dataset,
});
~~~

:::tip pro version only
Measuring the content is available in the PRO version of the DHTMLX Grid (or DHTMLX Suite) package only, exactly like the [`headerAutoHeight`](grid/api/grid_headerautoheight_config.md), [`footerAutoHeight`](grid/api/grid_footerautoheight_config.md) and [`autoHeight`](grid/api/grid_autoheight_config.md) properties.

In the GPL version the array form itself works, individual pixel heights per level are fully supported, but an *"auto"* item is accepted and silently degrades: the level gets the default height of 40px and its text is not wrapped. Use explicit pixel values in the GPL version.
:::

This is how the height of a level is resolved:

| `headerRowHeight` | Level | Height | Text wrapping |
| -------- | ----- | ------ | ------------- |
| *number* | any | the number | no |
| *array*  | a *number* item | the item | no |
| *array*  | an *"auto"* item (**PRO version only**) | fits the content, at least 40 | yes |
| *array*  | beyond the array length | 40 | no |

Extra array items are ignored: an array longer than the actual number of levels does not add levels. A non-positive or non-numeric item falls back to the default 40.

The total height of the header is calculated as a sum of all level heights in it.

### Relation to `headerAutoHeight`

The [`headerAutoHeight`](grid/api/grid_headerautoheight_config.md) config, as well as [`autoHeight`](grid/api/grid_autoheight_config.md) which turns it on for the whole component, makes every level of the header fit its content. The array form of `headerRowHeight` is more specific, so it wins:

- if `headerRowHeight` is set as an array, `headerAutoHeight` is ignored for the header entirely, including the levels which the array does not cover. Use the *"auto"* items to opt individual levels in
- if `headerRowHeight` is set as a number, `headerAutoHeight` works as before: every level fits its content but is never shorter than `headerRowHeight`

### Export

The per-level heights are carried over to the [export](grid/usage.md#exporting-data): the XLSX header and footer rows keep their individual heights, and the PDF/PNG snapshot uses the correct total height of the zone.

@changelog: the array value with individual level heights and the *"auto"* keyword were added in v9.4

[comment]: # (@related: grid/initialization.md#initialize-grid grid/configuration.md#headerfooter-height)
