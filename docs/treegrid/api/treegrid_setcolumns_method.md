---
sidebar_label: setColumns()
title: JavaScript TreeGrid - setColumns Method 
description: You can explore the setColumns method of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# setColumns()

@short: sets configuration for TreeGrid columns

@signature: {'setColumns(columns: object[]): void;'}

@params:
- `columns: array` - an array of objects with configuration of columns

@example:
grid.setColumns([
    { id: "a", header: [{ text: "New header for column a" }] },
    { id: "b", header: [{ text: "New header for column b" }] },
    // more columns objects
]);

@descr:

Each column object may contain a set of properties. You will find the full list of the configuration properties of a TreeGrid column [here](treegrid/api/api_treegridcolumn_properties.md).

[comment]: # (@relatedapi: treegrid/api/treegrid_getcolumn_method.md)

[comment]: # (@related: treegrid/usage.md#working-with-columns-and-cells)
