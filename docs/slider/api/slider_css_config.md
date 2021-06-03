---
sidebar_label: css
title: JavaScript Slider - css Config 
description: You can explore the css config of Slider in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# css

@short: adds style classes for the component

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

var slider = new dhx.Slider({
    css:"my_first_class my_second_class"
});

@descr:

**Related sample**: [Slider. Custom Colors](https://snippet.dhtmlx.com/ewizud5e)

Note, that the DHTMLX library provides [a set of own CSS classes](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget) that you can also apply to change the appearance of Slider:

~~~js
var slider = new dhx.Slider({
    css: "dhx_widget--bg_white"
});
~~~

[comment]: # (@related: slider/initializing_slider.md#configuration-properties slider/customization.md)
