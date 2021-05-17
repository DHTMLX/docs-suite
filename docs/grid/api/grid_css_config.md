---
sidebar_label: css
title: css
---          

@short: adds style classes to Grid

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
 
var grid = new dhx.Grid({
    css:"my_first_class my_second_class"
});

@descr:

Note, that the DHTMLX library provides [a set of own CSS classes](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget) that you can also apply to change the appearance of Grid:

~~~js
var grid = new dhx.Grid({
    css: "dhx_widget--bg_white"
});
~~~

[comment]: # (@related: grid/initialization.md#initialize-grid)
