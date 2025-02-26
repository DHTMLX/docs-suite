---
sidebar_label: mark
title: JavaScript Grid column - mark Config 
description: You can explore the mark config of Grid column in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# mark

@short: Optional. Returns a template for marking a cell(s) or applies the desired CSS classes to cells with minimal|maximal values in a column 

### Usage

~~~jsx
mark?:
    { min?: string, max?: string } | 
    (cell, columnCells: [], row?: IRow, column?: ICol) => string;
~~~

### Parameters

The `mark` property can be either an *object* or a *function*:
- as an *object* contains min and max properties, to apply desired CSS classes to cells with minimal|maximal values in a column
- as a *function* returns a template for marking a cell(s) and takes several parameters:
	- **cell** - (required) the value of a cell
	- **columnCells** - (required) an array of all cell values in the specified column
	- **row** - (optional) an object with all cells in a row
	- **column** - (optional) an object with the configuration of a column (see the [columns](grid/api/grid_columns_config.md) config)

@descr:
### Example

~~~html
<style>
    .max_cell {
        background: #f44336;
        color: #FFF;
    }

    .min_cell {
        background: #4CAF50;
        color: #FFF
    }
</style>

<script>
    const grid = new dhx.Grid("grid_container", {
        columns: [
            { width: 200, id: "country", header: [{ text: "Country" }] },
            {
                width: 150, id: "population", header: [{ text: "Population" }],
                mark: {
                    min: "min_cell",
                    max: "max_cell"
                }
            },
            // more options
        ],
        data: dataset
    });
</script>
~~~


**Related article**: [Adding custom marks to cells](grid/customization.md#adding-custom-marks-to-cells)

**Related sample**: [Grid. Mark cells](https://snippet.dhtmlx.com/buirf16n)