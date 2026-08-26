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
        // columns config, with 2 levels in the `footer` array of a column
    ],
    // level 0 -> 40px, level 1 -> adjusts to its content
    footerRowHeight: [40, "auto"],
    data: dataset,
});

@descr:

**Related sample**: [Grid. Header, footer and rows height](https://snippet.dhtmlx.com/wjcjl80i)

Grid renders the footer as a stack of levels (rows). The number of levels is defined by the longest `footer` array among the columns, the same way as it works for the header, see the [Header/footer height](grid/configuration.md#headerfooter-height) section of the Configuration guide.

The `footerRowHeight` property defines how tall those levels are and can be set in two ways:

- as a *number* - the same height, in pixels, is applied to every level of the footer:

~~~jsx
const grid = new dhx.Grid("grid_container", {
    columns: [
        // columns config
    ],
    footerRowHeight: 56, // all the levels of the footer are 56px tall
    data: dataset,
});
~~~

- as an *array* - the levels are sized individually. The item at index *i* describes level *i*, counting from the topmost one. An item can be either a height in pixels or the *"auto"* keyword, which adjusts the level height to its content:

~~~jsx
const grid = new dhx.Grid("grid_container", {
    columns: [
        // columns config
    ],
    // level 0 -> 40px, level 1 -> adjusts to its content
    footerRowHeight: [40, "auto"],
    data: dataset,
});
~~~

:::tip pro version only
Measuring the content is available in the PRO version of the DHTMLX Grid (or DHTMLX Suite) package only, exactly like the [`headerAutoHeight`](grid/api/grid_headerautoheight_config.md), [`footerAutoHeight`](grid/api/grid_footerautoheight_config.md) and [`autoHeight`](grid/api/grid_autoheight_config.md) properties.

In the GPL version the array form itself works, individual pixel heights per level are fully supported, but an *"auto"* item is accepted and silently degrades: the level gets the default height of 40px and its text is not wrapped. Use explicit pixel values in the GPL version.
:::

This is how the height of a level is resolved:

| `footerRowHeight` | Level | Height | Text wrapping |
| -------- | ----- | ------ | ------------- |
| *number* | any | the number | no |
| *array*  | a *number* item | the item | no |
| *array*  | an *"auto"* item (**PRO version only**) | fits the content, at least 40 | yes |
| *array*  | beyond the array length | 40 | no |

Extra array items are ignored: an array longer than the actual number of levels does not add levels. A non-positive or non-numeric item falls back to the default 40.

The total height of the footer is calculated as a sum of all level heights in it.

### Relation to `footerAutoHeight`

The [`footerAutoHeight`](grid/api/grid_footerautoheight_config.md) config, as well as [`autoHeight`](grid/api/grid_autoheight_config.md) which turns it on for the whole component, makes every level of the footer fit its content. The array form of `footerRowHeight` is more specific, so it wins:

- if `footerRowHeight` is set as an array, `footerAutoHeight` is ignored for the footer entirely, including the levels which the array does not cover. Use the *"auto"* items to opt individual levels in
- if `footerRowHeight` is set as a number, `footerAutoHeight` works as before: every level fits its content but is never shorter than `footerRowHeight`

### Export

The per-level heights are carried over to the [export](grid/usage.md#exporting-data): the XLSX header and footer rows keep their individual heights, and the PDF/PNG snapshot uses the correct total height of the zone.

@changelog: the array value with individual level heights and the *"auto"* keyword were added in v9.4

[comment]: # (@related: grid/initialization.md#initialize-grid grid/configuration.md#headerfooter-height)
