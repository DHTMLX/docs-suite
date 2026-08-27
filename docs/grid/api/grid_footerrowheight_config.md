---
sidebar_label: footerRowHeight
title: JavaScript Grid - footerRowHeight Config 
description: You can explore the footerRowHeight config of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# footerRowHeight

@short: Optional. Sets the height of rows in the footer

### Usage

~~~jsx
footerRowHeight?: number | (number | "auto")[];
~~~

:::tip pro version only
The "auto" value is a PRO feature. Measuring the content is available in the PRO version of the DHTMLX Grid (or DHTMLX Suite) package only, exactly like the [`headerAutoHeight`](grid/api/grid_headerautoheight_config.md), [`footerAutoHeight`](grid/api/grid_footerautoheight_config.md) and [`autoHeight`](grid/api/grid_autoheight_config.md) properties.
:::

### Default config

~~~jsx
footerRowHeight: 40
~~~

### Example
~~~jsx
const grid = new dhx.Grid("grid_container", {
    columns: [
        {
            id: "country", width: 200,
            header: [{ text: "Location", colspan: 2 }, { text: "Country" }, { text: "ISO code" }],
            footer: [{ text: "Total", rowspan: 2 }],
        },
        {
            id: "region", width: 200,
            header: ["", { text: "Region" }, { text: "Subregion of the world" }],
            footer: [{ text: "Count" }, { text: "The number of the listed countries" }],
        },
    ],
    // level 0 -> 40px, level 1 -> adjusts to its content
    footerRowHeight: [40, "auto"],
    data: dataset,
});
~~~

### Footer levels and their height

Grid renders the footer as a stack of **levels** (rows). The number of levels is defined by the longest `footer` array among the columns:

~~~jsx
columns: [
    { id: "country", footer: [{ text: "Total", rowspan: 2 }] },
    { id: "region", footer: [{ text: "Count" }, { text: "The number of the listed countries" }] }, // 2 levels
]
~~~

The `footerRowHeight` property defines the height of those levels. You can set it in two ways:

- as a **number** - the same height, in pixels, is applied to every level of the footer:

~~~jsx
footerRowHeight: 56 // the height of both levels is 56px
~~~

- as an **array** - the levels are sized individually. The item at index *i* describes level *i*, counting from the topmost one. An item can be either a height in pixels or the *"auto"* keyword (**PRO version only**), which adjusts the level height to its content:

~~~jsx
// level 0 -> 40px, level 1 -> adjusts to its content
footerRowHeight: [40, "auto"]
~~~

:::info
In the GPL version, the array form still works: individual pixel heights per level are fully supported. An *"auto"* item is accepted without an error, but it has no effect: the level gets the default height of 40px and its text is not wrapped. Use explicit pixel values instead.
:::

### Height resolution rules

| `footerRowHeight` | Level | Height | Text wrapping |
| -------- | ----- | ------ | ------------- |
| *number* | any | the number | no |
| *array*  | a *number* item | the item | no |
| *array*  | an *"auto"* item (**PRO version only**) | fits the content, at least 40px | yes |
| *array*  | beyond the array length | 40px | no |

Extra array items are ignored: an array longer than the actual number of levels does not add levels. A non-positive or non-numeric item falls back to the default 40px.

The height of the footer is calculated as a sum of all row heights in it.

### Relation to `footerAutoHeight`

The [`footerAutoHeight`](grid/api/grid_footerautoheight_config.md) config, as well as [`autoHeight`](grid/api/grid_autoheight_config.md), which turns it on for the whole component, makes **every** level of the footer fit its content. The array form of `footerRowHeight` defines the height of each level explicitly, therefore it takes precedence over `footerAutoHeight`:

- if `footerRowHeight` is set as an **array**, `footerAutoHeight` is ignored for the footer entirely, including the levels which the array does not cover. Use the *"auto"* items to opt individual levels in
- if `footerRowHeight` is set as a **number**, `footerAutoHeight` works as before: every level fits its content but is never shorter than `footerRowHeight`

### Level heights in the export

The per-level heights are carried over to the [export](grid/usage.md#exporting-data): the XLSX header and footer rows keep their individual heights, and the PDF/PNG snapshot uses the correct total height of the zone.

**Change log**: the array value with individual level heights and the *"auto"* keyword were added in v9.4

**Related API:**
- [`headerRowHeight`](grid/api/grid_headerrowheight_config.md)
- [`footerAutoHeight`](grid/api/grid_footerautoheight_config.md)
- [`autoHeight`](grid/api/grid_autoheight_config.md)
- [`rowHeight`](grid/api/grid_rowheight_config.md)

**Related article**: [Header/footer height](grid/configuration.md#headerfooter-height)

**Related samples**: 
- [Grid. Header, footer and rows height](https://snippet.dhtmlx.com/wjcjl80i)
- [Grid. Individual height of the header/footer rows](https://snippet.dhtmlx.com/1hf173dk)
