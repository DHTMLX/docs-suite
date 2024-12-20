---
sidebar_label: groupable
title: JavaScript Grid column - groupable Config 
description: You can explore the groupable config of Grid column in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# groupable

@short: Optional. Enables data grouping by the values of a certain column

## Usage

~~~jsx
groupable?: boolean, 
~~~

@default: false

@example:
const grid = new dhx.Grid("grid_container", {
    columns: [
        { id: "country", header: [{ text: "Country" }], groupable: true },
        { id: "population", header: [{ text: "Population" }] },
        { id: "area", header: [{ text: "Land Area (Km²)" }] }
    ],
    group: true,
    data: dataset
});


@descr:

**Related article**: [Enabling data grouping](grid/usage.md#enabling-data-grouping)
