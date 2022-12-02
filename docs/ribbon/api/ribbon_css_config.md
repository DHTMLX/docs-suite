---
sidebar_label: css
title: JavaScript Ribbon - css Config 
description: You can explore the css config of Ribbon in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# css

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

const ribbon = new dhx.Ribbon("ribbon_container", {
    css:"my_first_class my_second_class"
});

@descr:

**Related sample**: [Ribbon. Styling (custom CSS)](https://snippet.dhtmlx.com/9ckg47ro)

Note, that the DHTMLX library provides [a set of own CSS classes](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget) that you can also apply to change the appearance of Ribbon.

~~~js
const ribbon = new dhx.Ribbon("ribbon_container", {
    css: "dhx_widget--bg_white"
});
~~~

**Related articles**: 
- [List of CSS classes for styling a widget](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget)
- [Themes](themes.md)