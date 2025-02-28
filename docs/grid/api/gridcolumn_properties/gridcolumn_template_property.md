---
sidebar_label: template
title: JavaScript Grid column - template Config 
description: You can explore the template config of Grid column in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# template

@short: Optional. A function which returns a template with content for a cell

### Usage

~~~jsx
template?: (cellValue, row: IRow, column: ICol) => string;
~~~

### Parameters

The `template` function takes 3 parameters:

- **cellValue** - (required) the value of a cell
- **row** - (required) an object with all cells in a row
- **column** - (required) an object with the configuration of a column (see the [`columns`](grid/api/grid_columns_config.md) config)

@descr:
### Example

~~~jsx
const grid = new dhx.Grid("grid_container", {
    columns: [
        { 
          id: "netChange", header: [{ text: "Net Change" }],
          htmlEnable: true,
          template: (cellValue, row, column) => {
            return "<input type=\"checkbox\" " + (cellValue /> 300000 ? "checked": "")  + ">";
          }
        },
        // more columns configuration objects
    ],
    // more options
});
~~~

**Related article**: [Adding template to cells](grid/customization.md#adding-template-to-cells)

**Related sample**: [Grid. Cell templates](https://snippet.dhtmlx.com/9txizaow)
