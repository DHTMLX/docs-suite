---
sidebar_label: css
title: JavaScript Window - css Config 
hide_title: true
description: You can explore the css config of Window in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# css

@short: adds style classes for the component

@signature: {'css?: string;'}

@example:
var dhxWindow = new dhx.Window({
    title: "Window", 
    css:"my_first_class my_second_class"
}); 

dhxWindow.show();

@descr:

**Related sample**: [Window. Custom Styles](https://snippet.dhtmlx.com/t5mvhwx8)

Note, that the DHTMLX library provides [a set of own CSS classes](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget) that you can also apply to change the appearance of Window:

~~~js
var dhxWindow = new dhx.Window({
    title: "Window", 
    css:"dhx_window--bordered"
}); 

dhxWindow.show();
~~~

[comment]: # (@related: window/how_to_start.md window/customization.md#styling)
