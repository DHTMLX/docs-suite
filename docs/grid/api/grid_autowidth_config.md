---
sidebar_label: autoWidth
title: JavaScript Grid - autoWidth Config 
description: You can explore the autoWidth config of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# autoWidth

@short: Optional. Makes grid's columns to fit the size of a grid

@signature: {'autoWidth?: boolean;'}

@default: false

@example:
const grid = new dhx.Grid("grid_container", {
    columns: [
        // columns config
    ],
    autoWidth:true,
    data: dataset
});

@descr: 

**Related sample**: [Grid. Columns auto width](https://snippet.dhtmlx.com/4as4y3l4)

{{note The property is ignored if the [adjust](../../../grid/configuration/#autosize-for-columns) property is used.}}

The width of the columns is calculated on the base of the sizes of the container of the grid and the values of the [minWidth/maxWidth](../../../grid/api/api_gridcolumn_properties/) properties if they are set for the columns.

{{note If the **width** property is specified in the configuration object of a column, the **autoWidth** property won't work for this column.}}


@changelog: added in v6.4

[comment]: # (@related: grid/initialization.md#initialize-grid grid/configuration.md#autowidth-for-columns)