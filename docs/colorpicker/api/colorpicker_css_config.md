---
sidebar_label: css
title: JavaScript Colorpicker - css Config 
description: You can explore the css config of Colorpicker in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# css

@short: adds custom CSS classes to ColorPicker

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
 
var colorpicker = new dhx.Colorpicker({
    css:"my_first_class my_second_class"
});

@descr:

**Related sample**: [Colorpicker. Styling (custom CSS)](https://snippet.dhtmlx.com/mnwi3sp0)

Note, that the DHTMLX library provides [a set of own CSS classes](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget) that you can also apply to change the appearance of ColorPicker:

~~~js
var colorpicker = new dhx.Colorpicker({
    css: "dhx_widget--bg_white"
});
~~~

[comment]: # (@related: colorpicker/how_to_start.md#initialize-colorpicker)
