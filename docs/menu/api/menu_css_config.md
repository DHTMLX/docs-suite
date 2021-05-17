---
sidebar_label: css
title: css
---          

@short: adds style classes to Menu

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

var menu = new dhx.Menu({
    css: "my_first_class my_second_class"
});

@descr:

**Related sample**: [Menu. Custom Css](https://snippet.dhtmlx.com/kfy2th5n)

Note, that the DHTMLX library provides [a set of own CSS classes](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget) that you can also apply to change the appearance of Menu:

~~~js
var menu = new dhx.Menu({
    css: "dhx_widget--bg_white"
});
~~~
