---
sidebar_label: css
title: JavaScript DataView - css Config 
description: You can explore the css config of DataView in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# css

@short: Optional. Adds a CSS class(es) to the component

@signature: {'css?: string;'}

@descr:
#### Example

~~~html
<style>
    .custom {
        --dhx-font-color-primary: #fff;
        --dhx-background-primary: #3A434A;
        --dhx-color-primary: #118d8d;

        --dhx-border-color: #4A555E;
        --dhx-border: var(--dhx-border-width) solid var(--dhx-border-color);
    }
</style>

<script>
	const dataview = new dhx.DataView("dataview_container", {
    	itemsInRow: 2, 
    	gap: 10,
    	css: "custom dhx_widget--bordered",
    	template
	});
</script>
~~~

**Related samples**:
- [Dataview. Styling (custom CSS)](https://snippet.dhtmlx.com/j1yv94o8)
- [Dataview. Styling (custom CSS for item)](https://snippet.dhtmlx.com/kpnzizbf)

If you want to apply your own styles for selection of items or focus, you can do it via the corresponding CSS classes: **.dhx_dataview-item--selected** and **.dhx_dataview-item--focus**.
There is no need to use any additional custom classes.

~~~html
<style>
    .dhx_dataview-item--selected {
        border-color: transparent;
        box-shadow: 0px 1px 5px 0px rgb(2, 136, 209, 0.5), 
            inset 0px 0px 0px 1px rgb(2, 136, 209, 1);
    }
</style>

<script>
    const dataview = new dhx.DataView("dataview_container", {itemsInRow: 3});
</script>
~~~

Note, that the DHTMLX library provides [a set of own CSS classes](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget) that you can also apply to change the appearance of DataView:

~~~js
const dataview = new dhx.DataView("dataview_container", {
    css: "dhx_widget--bg_gray"
});
~~~

**Related articles**: 
- [List of CSS classes for styling a widget](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget)
- [Themes](themes.md)
