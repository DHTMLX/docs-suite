---
sidebar_label: autoWidth
title: JavaScript TreeGrid - autoWidth Config 
description: You can explore the autoWidth config of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# autoWidth

@short: Optional. Makes treegrid's columns to fit the size of a treegrid

@signature: {'autoWidth?: boolean;'}

@default: false

@example:
const treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [
        // columns config
    ],
    autoWidth:true,
    data: dataset
});

@descr:

**Related sample**: [TreeGrid. Columns auto width](https://snippet.dhtmlx.com/irybslog)

{{note The property is ignored if the [adjust](../../../treegrid/configuration/#autosize-for-columns) property is used.}}

The width of the columns is calculated on the base of the sizes of the container of the grid and the values of the [minWidth/maxWidth](../../../treegrid/api/api_treegridcolumn_properties/) properties if they are set for the columns.

{{note If the **width** property is specified in the configuration object of a column, the **autoWidth** property won't work for this column.}}



@changelog: added in v6.4

[comment]: # (@related: treegrid/configuration.md#autowidth-for-columns)
