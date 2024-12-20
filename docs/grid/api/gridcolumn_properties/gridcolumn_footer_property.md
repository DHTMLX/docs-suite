---
sidebar_label: footer
title: JavaScript Grid column - footer Config 
description: You can explore the footer config of Grid column in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# footer

@short: Optional. An array of objects with footer rows configuration

## Usage

~~~jsx
footer?: [
    {
        text?: string | ((content: {
            [key: string]: string | number | null
        }) => string),
        tooltip?: boolean | object, // true by default
        tooltipTemplate?: (
            content: { value: string } & { [key: string]: string | number | null },
            header: IHeader,
            column: ICol
        ) => string | boolean,
        align?: "left" | "center" | "right", // "left" by default
        colspan?: number,
        rowspan?: number,
        css?: string,
        htmlEnable?: boolean, // false by default
    },
],
~~~

## Parameters

Each footer object may include:

- [`text`](grid/configuration.md#headerfooter-text) - (optional) the text of a footer or a callback function which is called with the following parameter:
    - **content** - an object with the content of the footer tooltip that contains the calculated values as *key:value* pairs, where:
        - the *key* is either the key defined in the list or the functor name
        - the *value* can be a *string/number* or *null* 
The calculated values are taken either from the **summary** config option of the component or the **summary** config option of a column
- `tooltip` - (optional) enables/disables the footer tooltip, or sets the configuration object with the tooltip settings; *true* by default. When set as an object, the **tooltip** config can have the following properties:
    - **force** - (optional) forces opening of a tooltip; if set to true, the **showDelay** and **hideDelay** settings are ignored, *false* by default
    - **showDelay** - (optional) the time period that should pass before showing a tooltip, in ms
    - **hideDelay** - (optional) the time period that should pass before hiding a tooltip, in ms
    - **margin** - (optional) the margin between the node and tooltip; *8px* by default
    - **position** - (optional) the position of a tooltip: *"right"*, *"bottom"*, *"center"*, *"left"*, *"top"*; *"bottom"* by default
    - **css** - (optional) the style of a tooltip box
- [`tooltipTemplate`](grid/configuration.md#column-headerfooter-tooltip) - (optional) sets a template for the footer tooltip. Takes into account the [**htmlEnable**](grid/configuration.md#html-content-of-grid-columns) property. The value of the **tooltipTemplate** property is a callback function which is called with the following parameters:
    - **content** - an object with the content of the footer tooltip. Contains two properties which are available either from the component's or from the column's configuration:
        - **value** - the value rendered in a cell, including the applied templates
        - an object with the calculated values of the **summary** property, set as *key:value* pairs where:
            - the *key* is either the key defined in the list or the functor name
            - the *value* can be a *string/number* or *null*
    - **footer** - the object of the column footer
    - **column** - the object of a column
    Return *false* to disable the tooltip
- `align` - (optional) aligns data in the footer: "left" | "center" | "right", "left" by default
- `colspan` - (optional) the number of columns in a colspan
- `rowspan` - (optional) the number of rows in a rowspan
- `css` - (optional) styling to be applied to a footer
- `htmlEnable` - (optional) *false* by default. If set to *true*, specifies the HTML content (inner HTML) of a footer. If set to *false*, the content of the footer cells will be displayed as a string value

@example:
const grid = new dhx.Grid("grid_container", {
    columns: [
        { 
            width: 150, 
            id: "population", 
            header: [{ text: () => `<mark>Population</mark>`, htmlEnable: true }],
            footer: [{ text: ({ totalPopulation, count }) => `Total: ${totalPopulation}, Count: ${count}` }],
            summary: "count"
        }
    ],
    summary: { totalPopulation: ["population", "sum"] },
    data: dataset
});

@descr:

**Related article**: [Configuration](grid/configuration.md)

**Related sample**: [Grid. Grid with footer](https://snippet.dhtmlx.com/9jl55ep7)