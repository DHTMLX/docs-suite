---
sidebar_label: css
title: JavaScript Window - css Config 
description: You can explore the css config of Window in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# css

@short: adds style classes for the component

@signature: {'css?: string;'}

@example:
const dhxWindow = new dhx.Window({
    title: "Window", 
    css:"my_first_class my_second_class"
}); 

dhxWindow.show();

@descr:

**Related sample**: [Window. Styling (custom CSS)](https://snippet.dhtmlx.com/t5mvhwx8)

Note, that the DHTMLX library provides [a set of own CSS classes](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget) that you can also apply to change the appearance of Window:

~~~js
const dhxWindow = new dhx.Window({
    title: "Window", 
    css:"dhx_window--bordered"
}); 

dhxWindow.show();
~~~

**Related articles**: 
- [List of CSS classes for styling a widget](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget)
- [Themes](themes.md)
