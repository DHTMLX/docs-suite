---
sidebar_label: forEach()
title: JavaScript Tabbar - forEach Method
description: The forEach method of DHTMLX Tabbar iterates over the cells of the tabs and calls a callback function for each cell with the cell object, its index and the array of cells. Explore the API reference of DHTMLX Suite.
---

# forEach()

@short: iterates over the cells of Tabbar

#### Usage

~~~ts
forEach(callback: (cell: object, index: number, array: object[]) => any): void;
~~~

@params:
- `callback: function` - a function that Tabbar calls for each cell with the following parameters:
    - `cell` - the object of a cell
    - `index` - the index of a cell
    - `array` - an array with the cells

#### Example

~~~jsx
tabbar.forEach((cell, index, array) => {
    console.log("This is a cell: ", cell);
    console.log("This is a cell index: ", index);
    console.log("This is an array of cells: ", array);
});
~~~

**Related API**: [`getCell()`](tabbar/api/tabbar_getcell_method.md)

**Related article**: [Iterating over cells](tabbar/work_with_tabbar.md#iterating-over-cells)
