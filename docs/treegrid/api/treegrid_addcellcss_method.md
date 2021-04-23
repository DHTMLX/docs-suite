---
sidebar_label: addCellCss
title: addCellCss
---          

@short: adds a style to a cell
todoanton возможно правильно addCellCss(row: string | number, col: string | number , css: string): void;
@signature: {'addCellCss(row: string, col: string, css: string): void;'}

@params:
- row 		string | number 		the id of a row
- col 		string | number 		the id of a column
- css 		string 				the name of the CSS class

@example:
<style>
    .myCustomClass{
        background:greenyellow;
    }
</style>
 
grid.addCellCss("1", "b", "myCustomClass");


@template: api_method
@descr:


@related: treegrid/customization.md#stylingcells

**Related sample**: [TreeGrid. Add cell css](https://snippet.dhtmlx.com/smjecfzp)

@changelog:


