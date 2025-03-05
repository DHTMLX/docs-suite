---
sidebar_label: width
title: JavaScript Grid column - width Config 
description: You can explore the width config of Grid column in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# width

@short: Optional. The width of a column

:::note
Note that width can't be less than 20px.
The property is ignored if the [`adjust`](grid/api/gridcolumn_properties/gridcolumn_adjust_property.md) property is used.
:::

### Usage

~~~jsx
width?: number; 
~~~

@default: 100

@descr:
### Example

~~~jsx
const grid = new dhx.Grid("grid_container", {
    columns: [
        { id: "country", header: [{ text: "Country" }], width: 200 },
        // more columns configuration objects
    ],
    // more options
});
~~~




