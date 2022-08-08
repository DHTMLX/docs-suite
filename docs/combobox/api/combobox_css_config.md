---
sidebar_label: css
title: JavaScript Combo Box - css Config 
description: You can explore the css config of Combo Box in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# css

@short: adds style classes to Combobox

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
 
var combo = new dhx.Combobox("combo_container", { 
    css:"my_first_class my_second_class"
});

@descr:

**Related sample**: [Combobox. Styling (custom CSS)](https://snippet.dhtmlx.com/lldd739i)

Note, that the DHTMLX library provides [a set of own CSS classes](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget) that you can also apply to change the appearance of Combobox:

~~~js
var combo = new dhx.Combobox({
    css: "dhx_widget--bg_white"
});
~~~

[comment]: # (@related: combobox/how_to_start.md#initialize-combobox combobox/customization.md#styling)
