---
sidebar_label: css
title: JavaScript TreeGrid - css Config 
description: You can explore the css config of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# css

@short: adds style classes to TreeGrid

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

var treegrid = new dhx.TreeGrid({
    css: "my_first_class my_second_class"
});

@descr:

**Related sample**: [TreeGrid. Styling (custom CSS)](https://snippet.dhtmlx.com/cpvir0od)

Note, that the DHTMLX library provides [a set of own CSS classes](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget) that you can also apply to change the appearance of TreeGrid:

~~~js
var treegrid = new dhx.TreeGrid({
    css: "dhx_widget--bg_white"
});
~~~

[comment]: # (@related: treegrid/initialization.md#initialize-treegrid treegrid/customization.md#styling-treegrid)
