---
sidebar_label: addCellCss()
title: JavaScript Grid - addCellCss Method ()
description: You can explore the addCellCss method of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# addCellCss()

@short: adds a style to a cell

@signature: {'addCellCss(rowId: string | number, colId: string | number, css: string): void;'}

@params:
- `rowId: string | number` - the id of a row
- `colId: string | number` - the id of a column
- `css: string` - the name of the CSS class

@descr:
#### Example

~~~html
<style>
    .myCustomClass{
        background:greenyellow;
    }
</style>

<script>
    ...
    grid.addCellCss("1", "b", "myCustomClass");
</script>
~~~

**Related sample**: [Grid. Add cell CSS](https://snippet.dhtmlx.com/hskmp8rh)
