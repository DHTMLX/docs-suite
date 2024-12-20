---
sidebar_label: summary
title: JavaScript Grid column - summary Config 
description: You can explore the summary config of Grid column in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# summary

@short: Optional. Creates the list of calculated values based on the column's data

## Usage

~~~jsx
summary?: { 
    [key: string]: string | [string, string] | (row: IRow[]) => string | number 
} | string
~~~

## Parameters

The defined list  of calculated values is available only at the column's level. Can be initialized either as an *object* or as a *string*. 
As an *object* it contains calculated values set as *key:value* pairs, where the *keys* are the field names and *values* can be:
- a string with the name of the [applied functor](/helpers/data_calculation_functions/)
- a tuple `[string, string]` that specifies the field name and the name of the applied functor
- a `(rows: IRow[]) => string | number;` function for calculating the summary of the column

@example:
const grid = new dhx.Grid("grid_container", {
    columns: [
        {
            id: "quantity",
            type: "number",
            header: [{ text: "Quantity" }],
            footer: [{ text: ({ sum }) => sum }],
            summary: "sum",
            numberMask: { prefix: "$" },
        },
        // more columns
    ],
    data: dataset
});

@descr:
**Note that**, when the column `summary` property is initialized as a *string*, the resulting value (excluding "count") is used with applied `patternMask/numberMask`, if there are any. 

**Related article**: [Custom statistics in the column header/footer and spans](grid/configuration.md#custom-statistics-in-the-column-headerfooter-and-spans)