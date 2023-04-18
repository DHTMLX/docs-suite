---
sidebar_label: addRowCss()
title: JavaScript Grid - addRowCss Method 
description: You can explore the addRowCss method of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# addRowCss()

@short: adds a style to a row

@signature: {'addRowCss(rowId: string | number, css: string): void;'}

@params:
- `rowId: string | number` - the id of a row
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
    grid.addRowCss("2", "myCustomClass");
</script>
~~~

**Related sample**: [Grid. Add row CSS](https://snippet.dhtmlx.com/idvmge2d)

[comment]: # (@related: grid/customization.md#styling-rows)
