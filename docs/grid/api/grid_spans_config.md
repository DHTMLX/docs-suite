---
sidebar_label: spans
title: JavaScript Grid - spans Config 
description: You can explore the spans config of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# spans

@short: Optional. Describes the configuration of cols/rows spans

@signature: {'spans?: object[];'}

@example:
const grid = new dhx.Grid("grid_container", {
    columns: [ 
        // columns config
    ],
    spans: [
        {row:"0", column:"a", rowspan:5 },
        {row:"0", column:"b", rowspan:9, text:"<h2>Some content here</h2>"},
        {row:"0", column:"c", colspan:2, text:"Some content"},
        {row:"10", column:"a", colspan:4, text:"Some header", css:"myCustomColspan"}
    ],
    data: dataset
});

@descr:

**Related sample**: [Grid. Grouped headers (spans)](https://snippet.dhtmlx.com/eol76o68)

Each object in the spans array contains the following properties:

- `row` - (*string | number*) obligatory, the id of a row
- `column` - (*string|number*) obligatory, the id of a column
- `rowspan` - (*number*) optional, the number of rows in a span
- `colspan` - (*number*) optional, the number of columns in a span
- `text` - (*string|number*) optional, the content of a span. You can specify the text of the column span via the `text` property. It can be set either as a *string* or a *callback function* which is called with the following parameter: 
    - `content` - an object with the content of the span tooltip that contains the counted values as `[key: string]`, where the key is either the *key* defined in the list or the functor name. The counted values are taken either from the [`summary`](grid/api/grid_summary_config.md) config option of the component or the [`summary`](grid/api/api_gridcolumn_properties.md) config option of a column
:::note
In case key names in the `summary` configs are the same, values are taken from the column's configuration option. 
:::

:::info important
If the value of a spanned cell is initialized with the `text` property set as a *callback function*, the cell content can't be edited.
:::

~~~jsx {17}
const grid = new dhx.Grid("grid_container", {
    columns: [
        { width: 200, id: "country", header: [{ text: "Country" }] },
        { 
            width: 150, 
            id: "population", 
            header: [{ text: "Population" }],
            summary: "count"
        }
    ],
    summary: { totalPopulation: ["population", "sum"] },
    spans: [
        {
            row: "rowid",
            column: "population",
            rowspan: 9,
            text: ({ count }) => ("Count population:" + count)
        },
    ],
    data: dataset
});
~~~

- `css` - (*string*) optional, the name of a CSS class applied to a span
- [`tooltip`](grid/configuration.md#column-and-spans-tooltips) - (*boolean|object*) optional, enables a tooltip on hovering over the content of a span, or sets the configuration object with the tooltip settings; *true* by default. When set as an object, the `tooltip` config can have the following properties:
    - `force` - (optional) forces opening of a tooltip; if set to true, the `showDelay` and `hideDelay` settings are ignored, *false* by default
    - `showDelay` - (optional) the time period that should pass before showing a tooltip, in ms
    - `hideDelay` - (optional) the time period that should pass before hiding a tooltip, in ms
    - `margin` - (optional) the margin between the node and tooltip
    - `position` - (optional) the position of a tooltip: *"right"*, *"bottom"*, *"center"*, *"left"*, *"top"*; *"bottom"* by default
    - `css` - (optional) the style of a tooltip box
- [`tooltipTemplate`](grid/configuration.md#adding-templates-for-column-and-spans-tooltip) - (*function*) sets a template for the span tooltip. The value of the `tooltipTemplate` property is a callback function which is called with the following parameters:
    - `content` - an object with the content of the span tooltip. Contains two properties which are available either from the component's or from the column's configuration:
        - `value` - the value rendered in a cell, including the applied templates
        - `[key: string]` - the counted values of the **summary** property, where the *key* is either the key defined in the list or the functor name
    - `span` - the object of the column span

~~~jsx {17-18}
const grid = new dhx.Grid("grid_container", {
    columns: [
        { width: 200, id: "country", header: [{ text: "Country" }] },
        { 
            width: 150, 
            id: "population", 
            header: [{ text: "Population" }],
            summary: "count"
        }
    ],
    summary: { totalPopulation: ["population", "sum"] },
    spans: [
        {
            row: "rowid",
            column: "population",
            rowspan: 9,
            text: "Some text",
            toltipTemplate: ({ value, count }) => (`value: ${value}; count: ${count}`),
        },
    ],
    data: dataset
});
~~~


**Note**, that if both the **spans** and [leftSplit](grid/api/grid_leftsplit_config.md) properties are set in the Grid config, the following rules will be applied:

- All necessary columns or rows will be in a span if the **spans** property is set for the columns located within the frozen area.
- If the **spans** property is set for a number of columns or rows placed as in the frozen part as in the movable one, then the columns remained in the movable part only will be in a span.

@changelog:
- The `tooltipTemplate` property is added in v9.0
- The ability to set the `tooltip` config as an object is added in v8.4
- The `tooltip` property is added in v6.5.

[comment]: # (@related: grid/initialization.md#initialize-grid grid/configuration.md#spans)
