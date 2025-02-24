---
sidebar_label: template
title: JavaScript Grid column - template Config 
description: You can explore the template config of Grid column in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# template

@short: Optional. A function which returns a template with content for a cell(s)

### Usage

~~~jsx
template?: (cellValue: any, row: object, column: object) => string;
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
        { width: 200, id: "country", header: [{text: "Country"}] },
        { width: 150, id: "population", header: [{text: "Population"}] },
        { width: 150, id: "netChange", header: [{text: "Net Change"}],
          htmlEnable: true,
          template: function (text, row, column) {
            return "<input type=\"checkbox\" " + (text /> 300000 ? "checked": "")  + ">";
          }
        }
    ],
    data: dataset
});
~~~

**Related article**: [Adding template to cells](grid/customization.md#adding-template-to-cells)

**Related sample**: [Grid. Cell templates](https://snippet.dhtmlx.com/9txizaow)
