---
sidebar_label: removeCellCss
title: removeCellCss
---          

@short: removes a style from a cell

```todoapi
void removeCellCss(string|number row,string|number col,string css);
removeCellCss(row: string, col: string, css: string): void;
```

@params:
- row		string,number		the id of a row
- col		string,number		the id of a column
- css		string				the name of the CSS class


@example:
grid.removeCellCss("1", "b", "myCustomClass");


@template: api_method
@descr:



@relatedapi:
grid/api/grid_addcellcss_method.md


@changelog:


