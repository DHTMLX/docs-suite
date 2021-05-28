---
sidebar_label: addRowCss()
title: JavaScript Grid - addRowCss Method 
hide_title: true
description: You can explore the addRowCss method of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# addRowCss()

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

**Related sample**: [Grid. Add Row Css](https://snippet.dhtmlx.com/idvmge2d)

[comment]: # (@related: grid/customization.md#styling-rows)
