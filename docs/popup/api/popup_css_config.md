---
sidebar_label: css
title: JavaScript Popup - css Config 
hide_title: true
description: You can explore the css config of Popup in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# css

@short: adds style classes for the component

@signature: {'css?: string;'}

@example:
var popup = new dhx.Popup({
    css:"my_first_class my_second_class"
});

popup.show();

@descr:

**Related sample**: [Popup. Custom Css](https://snippet.dhtmlx.com/rd8zfw5h)

Note, that the DHTMLX library provides [a set of own CSS classes](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget) that you can also apply to change the appearance of Popup.

~~~js
var popup = new dhx.Popup({
    css: "dhx_widget--bg_white"
}); 
~~~
