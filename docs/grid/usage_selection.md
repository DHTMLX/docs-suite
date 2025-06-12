---
sidebar_label: Work with Selection object
title: JavaScript Grid - Work with Selection Object 
description: You can explore how to work with Selection Object of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Work with Selection object

You can manipulate with Grid cells via the API of the `selection` object. It is possible to get the object of one or more selected cells or rows, to set selection both to a single row or cell and to multiple rows or cells. The `selection` object also allows removing selection from previously selected cells.

## Enabling/disabling Selection object

Starting from v7.0, you can activate selection of cells via the [`enable`](grid/api/selection/selection_enable_method.md) method of the `selection` object.

~~~jsx
grid.selection.enable();
~~~

To disable selection of cells in Grid, make use of the [`disable`](grid/api/selection/selection_disable_method.md) method of the `selection` object:

~~~jsx
grid.selection.disable();
~~~

## Setting selection to cells

You can set selection to one or more rows or cells using the [`setCell()`](grid/api/selection/selection_setcell_method.md) method of the `selection` object. The method takes the following parameters:

<table>
    <tbody>
        <tr>
            <td><b>row</b></td>
            <td>(<i>object | string</i>) an object with a cell to be selected or the id of a row</td>
        </tr>
        <tr>
            <td><b>column</b></td>
            <td>(<i>object | string</i>) the config of a column or its id</td>
        </tr>
        <tr>
            <td><b>ctrlUp</b></td>
            <td>(<i>boolean</i>) <i>true</i> - to select the desired rows or cells, otherwise - <i>false</i> (<a href="../configuration/#multiple-selection-of-grid-cells">for the `multiselection` mode</a>)</td>
        </tr>
        <tr>
            <td><b>shiftUp</b></td>
            <td>(<i>boolean</i>) <i>true</i> - to select a range of rows or cells, otherwise - <i>false</i> (<a href="../configuration/#multiple-selection-of-grid-cells">for the `multiselection` mode</a>)</td>
        </tr>
    </tbody>
</table>

### Setting selection to a cell

![](../assets/grid/set_cell.png)

The example below shows how to highlight the first cell in the "Yearly Change" column:

~~~jsx {6}
const grid = new dhx.Grid("grid_container", {
    columns: [
        // columns config
    ],
    selection:"cell",
    multiselection: false,
    data: dataset
});

const row = grid.data.getItem(grid.data.getId(0));
const column = grid.getColumn("yearlyChange");
grid.selection.setCell(row, column);
~~~

**Related sample**: [Grid. Multiselection](https://snippet.dhtmlx.com/4nj0e9ye)

:::note 
The `multiselection` property is disabled.
:::

### Setting selection to multiple cells/rows

You can highlight the desired cells when the [`multiselection:true`](grid/api/grid_multiselection_config.md) and the [`selection:"cell"`](grid/api/grid_selection_config.md) properties are set:

![](../assets/grid/desired_setcell.png)

~~~jsx {5,6}
const grid = new dhx.Grid("grid_container", {
    columns: [
        // columns config
    ],
    selection:"cell",
    multiselection: true,
    data: dataset
});

grid.selection.setCell(grid.data.getId(0),"yearlyChange");
grid.selection.setCell(grid.data.getId(1),"netChange", true, false);
grid.selection.setCell(grid.data.getId(3),"netChange", true, false);
~~~

**Related sample**: [Grid. Multiselection](https://snippet.dhtmlx.com/4nj0e9ye)

It is also possible to select a range of cells at once:

![](../assets/grid/range_setcell.png)

For that, manipulate the `ctrlUp` and `shiftUp` parameters accordingly:

~~~jsx
grid.selection.setCell(grid.data.getId(1),"yearlyChange");
grid.selection.setCell(grid.data.getId(3),"density", false, true);
~~~

**Related sample**: [Grid. Multiselection](https://snippet.dhtmlx.com/4nj0e9ye)

:::note 
Use the `selection:"rows"` property to be able to operate rows. 
:::

To make the process of selecting cells more flexible, you can apply the related events of the `selection` object:

- [`afterSelect`](grid/api/selection/selection_afterselect_event.md)
- [`beforeSelect`](grid/api/selection/selection_beforeselect_event.md)

## Checking whether a cell is selected

You can check whether a particular cell is selected using the [`isSelectedCell()`](grid/api/selection/selection_isselectedcell_method.md) method of the `selection` object. The method takes the following parameters:

<table>
    <tbody>
        <tr>
            <td><b>row</b></td>
            <td>(<i>IRow | Id</i>) an object with a cell to be checked or the id of a row</td>
        </tr>
        <tr>
            <td><b>column</b></td>
            <td>(<i>ICol | Id</i>) the config of a column or its id</td>
        </tr>
    </tbody>
</table>

~~~jsx {14}
const grid = new dhx.Grid("grid_container", {
    columns: [
        // columns config
    ],
    selection:"cell",
    multiselection: false, 
    data: dataset
});

const row = grid.data.getItem(grid.data.getId(0));
const column = grid.getColumn("project");
grid.selection.setCell(row,column);

const selectedCell = grid.selection.isSelectedCell(row,column); 
console.log(selectedCell); // -> true
~~~

## Removing selection

Starting from v7.0, you can remove selection from a selected cell/row or from highlighted cells/rows using the [`removeCell`](grid/api/selection/selection_removecell_method.md) method of the `selection` object. The method takes two parameters:

<table>
    <tbody>
        <tr>
            <td><b>rowId</b></td>
            <td>(<i>string | number</i>) optional, the id of a row</td>
        </tr>
        <tr>
            <td><b>colId</b></td>
            <td>(<i>string | number</i>) optional, the id of a column</td>
        </tr>
    </tbody>
</table>

~~~jsx
// unselects all previously selected cells
grid.selection.removeCell();
 
// unselects all previously selected cells of the specified row
grid.selection.removeCell(rowId);
 
// removes selection from the specified cell
grid.selection.removeCell(rowId, colId);
~~~

To make the process of unselecting cells more flexible, you can apply the related events of the `selection` object:

- [`afterUnSelect`](grid/api/selection/selection_afterunselect_event.md) 
- [`beforeUnSelect`](grid/api/selection/selection_beforeunselect_event.md)

## Getting object of selected cells

To get the object of a selected Grid cell, use the [`getCell()`](grid/api/selection/selection_getcell_method.md) method of the `selection` object:

~~~jsx
const selectedCell = grid.selection.getCell();
// -> {row: {…}, column: {…}}
~~~

To get the object of multiple selected cells, use the [`getCells()`](grid/api/selection/selection_getcells_method.md) method of the `selection` object:

~~~jsx
const selectedCells = grid.selection.getCells();
// -> [{…}, {…}, {…}]
0: {row: {…}, column: {…}}
1: {row: {…}, column: {…}}
2: {row: {…}, column: {…}}
~~~
