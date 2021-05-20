---
sidebar_label: css
title: css
---          

@short: the name of a CSS class(es) applied to Layout

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
    css:"my_first_class my_second_class"
});

@descr:

**Related sample**: [Layout. Custom Css](https://snippet.dhtmlx.com/pwxmf0lx)

Note, that the DHTMLX library provides [a set of own CSS classes](helpers/base_elements.md#list-of-css-classes-for-styling-a-layout-cell) that you can also apply to change the appearance of a Layout cell.

~~~js
var layout = new dhx.Layout("layout", {
    css: "dhx_layout-cell--bordered",
	rows: [{
        id: "toolbar",
        html: "Header",
        css: "dhx_layout-cell--border_bottom layout-header",
        gravity: false,
        height: "60px"
	}]
});
~~~

[comment]: # (@related: layout/init.md#initialize-layout layout/customization.md)
