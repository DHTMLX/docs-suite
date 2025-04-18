---
sidebar_label: autoWidth
title: JavaScript Grid column - autoWidth Config 
description: You can explore the autoWidth config of Grid column in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# autoWidth

@short: Optional. Enables/disables the ability of a column to adjust its size to the size of Grid

### Usage

~~~jsx
autoWidth?: boolean;
~~~

@default: false

@descr:
### Example

~~~jsx
const grid = new dhx.Grid("grid_container", {
    columns: [
        { id: "country", header: [{ text: "Country" }], autoWidth: false },
        // more columns configuration objects
    ],
    autoWidth: true,
    // more options
});
~~~

Also note:

- If `autoWidth` is set for a column, the width of the column is calculated on the base of the sizes of the container of the grid and the values of the `minWidth/maxWidth` properties if they are set for the column.
- The property is ignored if the [`adjust`](grid/configuration.md#autosize-for-columns) property is used.
- If the `width` property is specified in the configuration object of a column, the `autoWidth` property won't work for this column.

**Related article**: [Autowidth for columns](grid/configuration.md/#autowidth-for-columns)