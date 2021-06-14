---
sidebar_label: addRowCss()
title: JavaScript TreeGrid - addRowCss Method 
description: You can explore the addRowCss method of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# addRowCss()

@short: adds a style to a row

@signature: {'addRowCss(rowId: Id, css: string): void;'}

@params:
- `rowId: string | number` - the id of a row
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
