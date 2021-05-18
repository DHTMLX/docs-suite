---
sidebar_label: addRowCss()
title: addRowCss()
---          

@short: adds a style to a row

@signature: {'addRowCss(id: string | number, css: string): void;'}

@params:
- `id: string | number` - the id of a row
- `css: string` - the name of the CSS class

@example:
<style>
    .myCustomClass{
        background:greenyellow;
    }
</style>

grid.addRowCss("2", "myCustomClass");

@descr:

**Related sample**: [TreeGrid. Add row css](https://snippet.dhtmlx.com/kort67nu)

[comment]: # (@related: treegrid/customization.md#styling-rows)
