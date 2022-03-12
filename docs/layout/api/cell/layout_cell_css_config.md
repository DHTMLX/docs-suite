---
sidebar_label: css
title: JavaScript Layout - css Config 
description: You can explore the css config of a cell of Layout in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# css

@short: the name of a CSS class(es) applied to a cell of Layout

@signature: {'css?: string;'}

@example:
<style>
    .my_first_class {
        /*some styles*/
    }
 
    .my_second_class {
        /*some styles*/
    }
</style>

var layout = new dhx.Layout("layout_container", {
    rows: [
        {
            id: "toolbar",
            html: "Header",
            css: "my_second_class",
            height: "60px"
        },
        {
            id: "content",
            html: "Content",
            css: "my_first_class",
        }
    ]
});

@descr:

**Related sample**: [Layout. Custom Css](https://snippet.dhtmlx.com/pwxmf0lx)

Note, that the DHTMLX library provides [a set of own CSS classes](helpers/base_elements.md#list-of-css-classes-for-styling-a-layout-cell) that you can also apply to change the appearance of a Layout cell.

~~~js
var layout = new dhx.Layout("layout", {
    css: "dhx_layout-cell--bordered",
	rows: [
        {
            id: "toolbar",
            html: "Header",
            css: "dhx_layout-cell--border_bottom layout-header",
            gravity: false,
            height: "60px"
	    }
    ]
});
~~~

[comment]: # (@related: layout/initialization.md#initialize-layout layout/customization.md)
