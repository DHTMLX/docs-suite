---
sidebar_label: css
title: JavaScript Toolbar - css Config 
hide_title: true
description: You can explore the css config of Toolbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# css

@short: adds style classes to Toolbar

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

var toolbar = new dhx.Toolbar({
    css: "my_first_class my_second_class"
});

@descr:

Note, that the DHTMLX library provides [a set of own CSS classes](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget) that you can also apply to change the appearance of Toolbar:

~~~js
var toolbar = new dhx.Toolbar("toolbar", {
	css: "dhx_widget--bg-gray"
});
~~~
