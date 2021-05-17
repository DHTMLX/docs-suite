---
sidebar_label: css
title: css
---          

@short: adds style classes to Ribbon

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

var ribbon = new dhx.Ribbon({
    css:"my_first_class my_second_class"
});

@descr:

**Related sample**: [Ribbon. Custom Css](https://snippet.dhtmlx.com/9ckg47ro)

Note, that the DHTMLX library provides [a set of own CSS classes](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget) that you can also apply to change the appearance of Ribbon.

~~~js
var ribbon = new dhx.Ribbon({
    css: "dhx_widget--bg_white"
});
~~~
