---
sidebar_label: blockSelection
title: JavaScript Grid - blockSelection Config 
description: You can explore the blockSelection config of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# blockSelection

:::tip Pro version only 
This functionality requires PRO version of the DHTMLX Grid (or DHTMLX Suite) package.
:::

@short: Optional. Enables/disables block selection management within a grid

### Usage

~~~jsx
blockSelection?:
    | boolean
    | {
        disabled?: boolean;
        mode?: "range" | "manual";
        handle?: boolean | {
            allowAxis?: "x" | "y" | "xy";
            handler?:
                | boolean
                | ((args: {
                    cell: { row: object; column: object };
                    array: { row: object; column: object }[];
                    range: { row: object; column: object }[];
                    dir: "up" | "down" | "right" | "left";
                    index: number;
                    grid: IProGrid;
                }) => void);
        };
        area?: boolean;
    };
~~~

@default: false

@example: 
const grid = new dhx.Grid("grid_container", {
    columns: [
        { id: "a", header: [{ text: "A" }] },
        { id: "b", header: [{ text: "B" }] },
    ],
    data: [
        { id: "1", a: "A1", b: "B1" },
        { id: "2", a: "A2", b: "B2" },
    ],
    blockSelection: true // enables the BlockSelection module
});

@descr:
### Parameters

The `blockSelection` property can be set in two ways:

- as a *boolean* value it enables or disables the block selection module upon the component initialization
- as an *object* it enables the module and allows setting additional configuration options during the component initialization. The following options are available:

<table>
    <tbody>
        <tr>
            <td><b>disabled</b></td>
            <td>disables the module on startup, `false` by default</td>
        </tr>
        <tr>
            <td><b>mode</b></td>
            <td>the operating mode of the module:<ul><li><i>"range"</i> - managed through the Range module</li><li><i>"manual"</i> - managed through the manual control</li></ul></td>
        </tr>
        <tr>
            <td><b>handle</b></td>
            <td>enables the handle for resizing. Can be set as a *boolean* value or as an *object*, `true` by default. <br>As an *object* can contain the following properties:<ul><li><b>allowAxis</b> - restricts the handle movement: `"x"` (horizontal), `"y"` (vertical), `"xy"` (both directions). `"xy"` by default</li><li><b>handler</b> - a *function* to process the handle actions or *boolean* to enable/disable. As a *function*, the property takes the following parameters:</li><ul><li><b>cell</b> - the object of the current cell. Contains the following properties:</li><ul><li>*row* - the configuration object of a row</li><li>*column* - the configuration object of a column</li></ul></ul><ul><li><b>array</b> - an array of all selected cells. Each cell object contains the following properties: </li><ul><li>*row* - the configuration object of a row</li><li>*column* - the configuration object of a column</li></ul></ul><ul><li><b>range</b> - an array of pre-selected cells. Each cell object contains the following properties: </li><ul><li>*row* - the configuration object of a row</li><li>*column* - the configuration object of a column</li></ul></ul><ul><li><b>dir</b> - the direction of cells selection: "up" | "down" | "right" | "left"</li></ul><ul><li><b>index</b> - the index of the iterated cell</li></ul><ul><li><b>grid</b> - the `dhx.Grid` component object</li></ul></ul></td>
        </tr>
        <tr>
            <td><b>area</b></td>
            <td>enables the display of the selection area, `true` by default</td>
        </tr>
    </tbody>
</table>

:::note
By default, the `blockSelection` property is set to `false`. When `blockSelection` is set to `true` or the module is set to the "range" mode, the **Range** module is initialized.
:::


~~~jsx
// this example demonstrates configuring the module with the handle disabled and the "range" mode enabled
const grid = new dhx.Grid("grid_container", {
    columns: [
        { id: "a", header: [{ text: "A" }] },
        { id: "b", header: [{ text: "B" }] },
    ],
    data: [
        { id: "1", a: "A1", b: "B1" },
        { id: "2", a: "A2", b: "B2" },
    ],
    blockSelection: {
        mode: "range",
        handle: false,
    }
});
~~~

~~~jsx
// this example demonstrates configuring the handle and its behavior
const grid = new dhx.Grid("grid_container", {
    columns: [
        { id: "a", header: [{ text: "A" }] },
        { id: "b", header: [{ text: "B" }] },
    ],
    data: [
        { id: "1", a: "A1", b: "B1" },
        { id: "2", a: "A2", b: "B2" },
    ],
    blockSelection: {
        mode: "range",
        handle: {
            allowAxis: "x", // the handle movement is restricted by the "x" axis
            handler: ({ array, range, grid, cell, index }) => {
                if (array.length <= 1) {
                    return;
                }
                const firstCell = range[0];
                // the copied cells will have the "-copied" suffix
                const value = firstCell.row[firstCell.column.id] + (index ? "-copied" : ""); 
                grid.data.update(
                    cell.row.id,
                    { [cell.column.id]: value },
                    index < array.length - 1 // the silent mode for all the cells except for the last cell
                );
            }
        }
    }
});
~~~

**Related sample:** [Grid. BlockSelection with handle configuration](https://snippet.dhtmlx.com/8gx20g1d)

**Related article:** [Managing block selection in Grid](grid/configuration.md/#managing-block-selection-in-grid)

@changelog: added in v9.2

