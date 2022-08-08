---
sidebar_label: css
title: JavaScript DataView - css Config 
description: You can explore the css config of DataView in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# css

@short: adds a CSS class(es) to the component

@signature: {'css?: string;'}

@example:
<style>
    .bg-gray {
        background: #efefef;
    }
</style>
 
var dataview = new dhx.DataView("dataview", {itemsInRow: 5, css: "bg-gray"});

@descr: 

**Related samples**:
- [Dataview. Styling (custom CSS)](https://snippet.dhtmlx.com/j1yv94o8)
- [Dataview. Styling (custom CSS for item)](https://snippet.dhtmlx.com/kpnzizbf)

If you want to apply your own styles for selection of items or focus, you can do it via the corresponding CSS classes: **.dhx_dataview-item--selected** and **.dhx_dataview-item--focus**.
There is no need to use any additional custom classes.

~~~js
<style>
    .dhx_dataview-item--selected {
        border-color: transparent;
        box-shadow: 0px 1px 5px 0px rgb(2, 136, 209, 0.5), 
            inset 0px 0px 0px 1px rgb(2, 136, 209, 1);
    }
</style>
 
var dataview = new dhx.DataView("dataview", {itemsInRow: 3});
~~~

Note, that the DHTMLX library provides [a set of own CSS classes](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget) that you can also apply to change the appearance of DataView:

~~~js
var dataview = new dhx.DataView("dataview", {
    css: "dhx_widget--bg_gray"
});
~~~

[comment]: # (@related: dataview/customization.md)
