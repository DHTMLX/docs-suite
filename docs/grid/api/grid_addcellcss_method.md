---
sidebar_label: addCellCss
title: addCellCss
description: description
---          

@short: adds a style to a cell

```todoapi
void addCellCss(string|number row,string|number col,string css);
addCellCss(row: string, col: string, css: string): void;
```
@params:
- row 		string,number 		the id of a row
- col 		string,number 		the id of a column
- css 		string 				the name of the CSS class

@example:
<style>
    .myCustomClass{
        background:greenyellow;
    }
</style>
 
grid.addCellCss("1", "b", "myCustomClass");

**Related sample**: [Grid. Add Cell Css](https://snippet.dhtmlx.com/hskmp8rh)
