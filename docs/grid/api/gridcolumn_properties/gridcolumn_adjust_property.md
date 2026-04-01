---
sidebar_label: adjust
title: JavaScript Grid column - adjust Config 
description: You can explore the adjust config of Grid column in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# adjust

@short: Optional. Defines whether the width of a column is automatically adjusted to its content

### Usage

~~~jsx
adjust?: "data" | "header" | "footer" | boolean; 
~~~

@default: false

@descr:
:::info
You can't enable `autoHeight` and `adjust` properties at the same time, as they are mutually exclusive.
:::

### Example

~~~jsx
const grid = new dhx.Grid("grid_container", { 
    columns: [
        { id: "country", header: [{ text: "Country" }], adjust: "header" },
        // more columns configuration objects
    ],
    adjust: false,
    // more options
});
~~~

#### Take into account the information below:

- the `adjust` property has a priority over the `autoWidth` property if it is specified either for the grid or for the column, and over the `width` property of the column
- the width the columns will be adjusted to also depends on the values of the `minWidth/maxWidth` properties if they are set for a column
- you can't enable `autoHeight` and `adjust` properties at the same time, as they are mutually exclusive

:::note
Note that if you change the font type, size, or offsets, the correct calculation of the `adjust` property of a cell may not be guaranteed.
:::

**Related article**: [Autosize for columns](grid/configuration.md#autosize-for-columns)

