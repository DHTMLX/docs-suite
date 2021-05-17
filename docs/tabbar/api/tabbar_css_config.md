---
sidebar_label: css
title: css
---          

@short: the name of a CSS class(es) applied to Tabbar

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

var tabbar = new dhx.Tabbar({
    css: "my_first_class my_second_class"
});

@descr:

**Related sample**: [Tabbar. Custom Css](https://snippet.dhtmlx.com/47en9f0a)

Note, that the DHTMLX library provides [a set of own CSS classes](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget) that you can also apply to change the appearance of Tabbar:

~~~js
var tabbar = new dhx.Tabbar({
    css: "dhx_widget--bg_white"
});
~~~
