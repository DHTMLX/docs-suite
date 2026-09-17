---
sidebar_label: Customization
title: JavaScript Grid - Customization 
description: You can explore the customization of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Customization

## Styling grid

You can change the look and feel of a grid. 

![Grid styled with a custom dark theme applied to headers and rows in DHTMLX Suite](/img/grid/styling_grid.png)

**Related sample**: [Grid. Styling (custom CSS)](https://snippet.dhtmlx.com/c5tr3s5r)

For this, take the following steps:

- add one or more CSS classes with the desired settings in the &lt;style&gt; section of your HTML page or in your file with styles (in this case, don't forget to include the file on the page)

~~~html
<style>
    .my-first-class {
        /*some styles*/
    }
    
    .my-second-class {
        /*some styles*/
    }
</style>
~~~

- specify the name of the created CSS class (or names of classes separated by spaces) as the value of the [`css`](grid/api/grid_css_config.md) property in the Grid configuration:

~~~js
const grid = new dhx.Grid("grid_container", { 
    css:"my-first-class my-second-class"
});
~~~

For example:

~~~html
<style>
    .custom {
        --dhx-font-color-primary: #fff;
        --dhx-background-primary: #3A434A;
        --dhx-s-grid-header-background: #2C3338;

        --dhx-border-color: #4A555E;
        --dhx-border: var(--dhx-border-width) solid var(--dhx-border-color);
    }
</style>

<script>
    const grid = new dhx.Grid("grid_container", {
        columns: [
            { minWidth: 150, id: "country", header: [{ text: "Country" }] },
            { id: "population", header: [{ text: "Population" }] },
            { id: "yearlyChange", header: [{ text: "Yearly Change" }] },
            // more columns
        ],
        adjust: true,
        data: dataset,
        css: "custom",
    });
</script>
~~~

## Styling selection

![Grid with a single cell selected and highlighted by a custom red selection border in DHTMLX Suite](/img/grid/styling_selection.png)

**Related sample**: [Grid. Styling selection (custom CSS)](https://snippet.dhtmlx.com/xs7bixmg)

The example below shows how to style selection in Grid:

~~~html
<style>
    .custom {
        --dhx-color-primary: #ff5252;
        --dhx-s-grid-selection-background: rgba(255, 198, 198, 1);
    }
</style>

<script>
    const grid = new dhx.Grid("grid_container", {
        columns: [
            { minWidth: 150, id: "country", header: [{ text: "Country" }] },
            { id: "population", header: [{ text: "Population" }] },
            { id: "yearlyChange", header: [{ text: "Yearly Change" }] },
            // more columns
        ],
        adjust: true,
        data: dataset,
        selection: true,
        css: "custom"
    });
</script>
~~~

## Styling header cells

![Grid with custom styled header cells where the Population header is enlarged and colored in DHTMLX Suite](/img/grid/styling_header.png)

To style the text of header cells, apply an inline style or a CSS class to the `text` property of the column header:

~~~html
<style>
    .title {
        font-size: 1.2em;
        color: tomato;
    }
    
</style>

<script>
    const grid = new dhx.Grid("grid_container", {
        columns: [
              { width: 200, id: "country", header: [{ text: "<span style='font-size:2em'>Country</span>" }] },
              { width: 150, id: "population", header: [{ text: "<span class='title'>Population</span>" }] },
              { width: 150, id: "yearlyChange", header: [{ text: "Yearly Change" }] },
              { width: 150, id: "netChange", header: [{ text: "Net Change" }] },
              { width: 150, id: "density", header: [{ text: "Density (P/Km²)" }] },
              { width: 150, id: "area", header: [{ text: "Land Area (Km²)" }] },
        ],
        data: dataset
    });
</script>
~~~

**Related sample**: [Grid. Styling header cells (custom CSS)](https://snippet.dhtmlx.com/7o4elf48)

## Styling footer cells

To style the text of footer cells, apply an inline style or a CSS class to the `text` property of the column footer:

~~~html
<style>        
    .custom_footer{
        font-size: 18px;
        text-decoration: underline;
    }    
</style>

<script>
    const grid = new dhx.Grid("grid_container", {
    columns: [
        {
            width: 200, id: "country", header: [{ text: "Country" }],
            footer: [
                { text: '<div class="custom_footer">Total</div>' },
                { text: '<div class="custom_footer">Minimal value</div>' },
            ],
            htmlEnable: true
        },
        {
            width: 150, id: "population", header: [{ text: "Population" }],
            footer: [
                { text: ({ totalPopulation}) => `${totalPopulation}`},
                { text: ({ minimalValue }) => `${minimalValue}`}
            ],
        },
    ],
    summary: { 
        totalPopulation: ["population", "sum"],
        minimalValue: ["population", "min"]
    },
    data: dataset
});
</script>
~~~

**Related sample**: [Grid. Styling footer cells (custom CSS)](https://snippet.dhtmlx.com/d254hcvp)

## Styling rows

![Grid with a single row highlighted in orange by a custom CSS class in DHTMLX Suite](/img/grid/rowcss.png)

You can apply custom CSS styles to change the appearance of grid rows. There are two ways to do it:

- with the `rowCss` property in the Grid configuration. As the value of the property, set a function that takes the id of a row as a parameter and returns a string with the name of a CSS class:

~~~html {12}
<style>
    .my_custom_row {
        background: coral;
    }
</style>

<script>
    const grid = new dhx.Grid("grid_container", {
        columns: [
            // columns config
        ],
        rowCss: function (row) { return row.custom ? "my_custom_row" : "" },
        data: dataset
    });
</script>
~~~

**Related sample**: [Grid. Custom row style](https://snippet.dhtmlx.com/2dxtwf9n)

- with the `addRowCss()` method:

~~~html {9}
<style>
    .myCustomClass{
        background:greenyellow;
    }
</style>

<script>
    const rowId = grid.data.getId(1);
    grid.addRowCss(rowId, "myCustomClass");
</script>
~~~

**Related sample**: [Grid. Add row CSS](https://snippet.dhtmlx.com/idvmge2d)

where:

<table>
    <tbody>
        <tr>
            <td><b>rowId</b></td>
            <td>(<i>string,number</i>) the id of a row</td>
        </tr>
        <tr>
            <td><b>css</b></td>
            <td>(<i>string</i>) the name of a CSS class</td>
        </tr>
    </tbody>
</table>

## Styling cells

![Grid with a single cell highlighted in green by a custom CSS class in DHTMLX Suite](/img/grid/cellcss.png)

To style the necessary cells, use the `addCellCss()` method. It takes three parameters:

<table>
    <tbody>
        <tr>
            <td><b>row</b></td>
            <td>(<i>string,number</i>) the id of a row</td>
        </tr>
        <tr>
            <td><b>column</b></td>
            <td>(<i>string,number</i>) the id of a column</td>
        </tr>
        <tr>
            <td><b>css</b></td>
            <td>(<i>string</i>) the name of the CSS class</td>
        </tr>
    </tbody>
</table>

~~~html {18}
<style>
.myCustomClass{
    background:greenyellow;
}
</style>

<script>
    const grid = new dhx.Grid("grid_container", {
        columns: [
            // columns config
        ],
        data: dataset,
        adjust: true
    });

    const rowId = grid.data.getId(1);

    grid.addCellCss(rowId, "country", "myCustomClass");
</script>
~~~

**Related sample**: [Grid. Add cell CSS](https://snippet.dhtmlx.com/hskmp8rh)

## Adding custom marks to cells

![Grid with conditionally marked cells in the Population column shaded red in DHTMLX Suite](/img/grid/markcells.png)

You can mark particular cells in a grid with the `mark` property of a column configuration. Set its value as a function that takes the following parameters:

<table>
    <tbody>
        <tr>
            <td><b>cell</b></td>
            <td>(<i>string</i>) the value of a cell</td>
        </tr>
        <tr>
            <td><b>columnCells</b></td>
            <td>(<i>array</i>) an array of all cell values in the specified column</td>
        </tr>
        <tr>
            <td><b>row</b></td>
            <td>(<i>object</i>) an object with all cells in a row</td>
        </tr>
        <tr>
            <td><b>column</b></td>
            <td>(<i>object</i>) the config of a column (see the columns config)</td>
        </tr>
    </tbody>
</table>

The function returns a string with a custom CSS class for the mark.

~~~html {17-19,24}
<style>
    .my_custom_mark {
        background: lightcoral;
    }
    
    .total_col {
        background: #f2f2f2;
    }
</style>

<script>
    const grid = new dhx.Grid("grid_container", {
        columns: [
            {
                id: "population", header: [{ text: "Population" }],
                // marks specified cells in a column
                mark: function (cell, data, row, column) {
                    return cell > 100000000 ? "my_custom_mark" : ""
                }
            }, 
            {
                id: "density", header: [{ text: "Density (P/Km²)" }],
                // marks all cells in a column
                mark: function (cell, data) { return "total_col"; }
            },
        ],
        data: dataset
    });
</script>
~~~

**Related sample**: [Grid. Conditional formatting. Marking cells with colors](https://snippet.dhtmlx.com/9whjve0v)

You can also highlight cells with minimum and/or maximum values in a grid with the `mark` property of a column configuration. The property is an object that takes two optional parameters:

<table>
    <tbody>
        <tr>
            <td><b>min</b></td>
            <td>(<i>string</i>) a custom CSS class to mark a cell that contains the minimum value</td>
        </tr>
        <tr>
            <td><b>max</b></td>
            <td>(<i>string</i>) a custom CSS class to mark a cell that contains the maximum value</td>
        </tr>
    </tbody>
</table>
<br/>

~~~html {19-22}
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

![Grid marking the maximum population cell in red and the minimum in green in DHTMLX Suite](/img/grid/mark_cell.png)

**Related sample**: [Grid. Mark cells](https://snippet.dhtmlx.com/buirf16n)

## Adding template to cells

![Grid with a custom cell template rendering checkboxes in the Net Change column in DHTMLX Suite](/img/grid/cell_templates.png)

You can customize the content of Grid cells with the `template` property of a [column configuration](grid/api/api_gridcolumn_properties.md). The `template` option is a function that takes three parameters:

<table>
    <tbody>
        <tr>
            <td><b>cellValue</b></td>
            <td>(<i>any</i>) the value of a cell</td>
        </tr>
        <tr>
            <td><b>row</b></td>
            <td>(<i>object</i>) an object with all cells in a row</td>
        </tr>
        <tr>
            <td><b>column</b></td>
            <td>(<i>object</i>) the config of a column</td>
        </tr>
    </tbody>
</table>
<br/>

~~~js {7-9}
const grid = new dhx.Grid("grid_container", {
    columns: [
        { width: 200, id: "country", header: [{text: "Country"}] },
        { width: 150, id: "population", header: [{text: "Population"}] },
        { width: 150, id: "netChange", header: [{text: "Net Change"}],
          htmlEnable: true,
          template: function (text, row, column) {
            return "<input type=\"checkbox\" " + (text > 300000 ? "checked": "")  + ">";
          }
        }
    ],
    data: dataset
});
~~~

**Related sample**: [Grid. Cell templates](https://snippet.dhtmlx.com/9txizaow)

### Event handlers for the template

Starting from v7.0, you can assign event handlers to HTML elements of a custom template of Grid cells with the [](grid/api/grid_eventhandlers_config.md) configuration property of Grid, for instance:

~~~js {7-10,15-21}
const grid = new dhx.Grid("grid_container", {
    columns: [
        { width: 200, id: "country", header: [{ text: "Country" }], htmlEnable: true },
        { width: 150, id: "netChange", header: [{text: "Net Change"}],
            htmlEnable: true,
            tooltip: false,
            template: function (text, row, column) { 
                return "<div class='cell__template'><input type='checkbox' 
                    disabled " + (text > 3000000 ? "checked" : "") + " ></div>";
            }
        },
        // more options
    ],
    data: data,
    eventHandlers: { 
        onmouseover: { 
            cell__template: function(event, data) { 
                console.log(JSON.stringify(data.row, null, 2)); 
            } 
        } 
    } 
});
~~~

**Related sample**: [Grid. Handling events in template](https://snippet.dhtmlx.com/zcv5drxc)

## Adding template to tooltip

![Grid showing a custom rich tooltip with an avatar image and last edit time on cell hover in DHTMLX Suite](/img/grid/tooltip_template.png)

Starting with v7.1, you can customize the content of a column tooltip with the [`tooltipTemplate`](grid/api/api_gridcolumn_properties.md) configuration option of the [column](grid/configuration.md#columns). The `tooltipTemplate` function takes three parameters:

<table>
    <tbody>
        <tr>
            <td><b>value</b></td>
            <td>(<i>any</i>) the value of a cell</td>
        </tr>
        <tr>
            <td><b>row</b></td>
            <td>(<i>object</i>) an object with all cells in a row</td>
        </tr>
        <tr>
            <td><b>column</b></td>
            <td>(<i>object</i>) the config of a column</td>
        </tr>
    </tbody>
</table>
<br/>

~~~js {6-14}
const grid = new dhx.Grid("grid_container", {
    columns: [
        {
            width: 200, id: "country", header: [{ text: "Country" }], align: "left",
            htmlEnable: true, 
            tooltipTemplate: function (value, row, column) { 
                if (row.country === "Bangladesh") {
                    return false; // prevent a tooltip from being shown
                }
                return `<div class="custom-tooltip"> 
                    <img src="../data/common/img/02/${row.avatar}.jpg" /> 
                    <span>Last edit time:<br>${row.editing.toUTCString()}</span> 
                </div>`; 
            } 
        },
        { width: 150, id: "population", header: [{ text: "Population" }] },
        { width: 150, id: "yearlyChange", header: [{ text: "Yearly Change" }] },
        // more options
    ],
    data: dataset
});
~~~

:::info
To prevent a tooltip from being shown, return `false` from the function (from v7.1.12).
:::

**Related sample**: [Grid. Rich tooltip template for the first column](https://snippet.dhtmlx.com/md8tr3pr)

**Related sample**: [Grid. Tooltip template](https://snippet.dhtmlx.com/954f7h9m)

:::note
Enable the [`htmlEnable`](grid/configuration.md#html-content-of-grid-columns) option in the configuration of Grid (or in the configuration of the column) to activate HTML support for the tooltip.
:::
