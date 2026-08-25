---
sidebar_label: columns
title: JavaScript Grid - columns Config 
description: You can explore the columns config of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# columns

@short: Required. Specifies the configuration of grid columns

@signature: {'columns: object[];'}

@example:
const grid = new dhx.Grid("grid_container", {
    columns: [
        { width: 100, id: "a", header: [{ text: "#" }] },
        { width: 100, id: "b", header: [{ text: "Title" }] },
        { width: 200, id: "c", header: [{ text: "Name" }] },
        { width: 200, id: "d", header: [{ text: "Address" }] }
    ],
    data: dataset
});

@descr:

Each column object may contain a set of properties. You will find the full list of the configuration properties of a Grid column [here](grid/api/api_gridcolumn_properties.md).

**Related articles**: 
- [Configuration](grid/configuration.md#columns)
- [Grid column properties](grid/api/api_gridcolumn_properties.md)
