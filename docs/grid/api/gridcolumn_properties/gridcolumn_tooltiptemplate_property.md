---
sidebar_label: tooltipTemplate
title: JavaScript Grid column - tooltipTemplate Config 
description: You can explore the tooltipTemplate config of Grid column in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# tooltipTemplate

@short: Optional. A function which returns a template for the content of the tooltip

### Usage

~~~jsx
tooltipTemplate?: (cellValue, row: IRow, column: ICol) => string;
~~~

### Parameters

The `tooltipTemplate` function takes 3 parameters:

- **cellValue** - (required) the value of a cell
- **row** - (required) an object with all cells in a row
- **column** - (required) an object with the configuration of a column (see the [`columns`](grid/api/grid_columns_config.md) config)

Returning *false* from the function will block showing of the tooltip.

@descr:
### Example

~~~jsx
const grid = new dhx.Grid("grid_container", {
    columns: [
        {
            id: "country", header: [{ text: "Country" }], 
            htmlEnable: true, 
            tooltipTemplate: (cellValue, row, col) => `<div class="custom-tooltip">
                <img src="https://snippet.dhtmlx.com/codebase/data/common/img/02/${row.avatar}.jpg" />
                <span>Last edit time:<br>${row.editing.toUTCString()}</span>
            </div>`
        },
        // more columns configuration objects
    ],
    // more options
});
~~~

**Related article**: [Adding template to tooltip](grid/customization.md#adding-template-to-tooltip)

**Related sample**: [Grid. Rich tooltip template for the first column](https://snippet.dhtmlx.com/md8tr3pr)