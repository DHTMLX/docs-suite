---
sidebar_label: css
title: JavaScript Grid - css Config 
description: You can explore the css config of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# css

@short: adds style classes to Grid

@signature: {'css?: string;'}

@descr:
#### Example

~~~html
<style>
    .custom {
        --dhx-font-color-primary: #fff;
        --dhx-background-primary: #3A434A;
        --dhx-s-grid-header-background: #2C3338;

        --dhx-border-color: #4A555E;
        --dhx-border: var(--dhx-border-width) solid var(--dhx-border-color);
    }
</style>

<script>
	const grid = new dhx.Grid("grid_container", {
    	columns: [
        	{ minWidth: 150, id: "country", header: [{ text: "Country" }] },
        	{ id: "population", header: [{ text: "Population" }] },
        	{ id: "yearlyChange", header: [{ text: "Yearly Change" }] },
        	// more columns
    	],
    	adjust: true,
    	data: dataset,
    	css: "custom",
	});
</script>
~~~

**Related sample**: [Grid. Styling (custom CSS)](https://snippet.dhtmlx.com/c5tr3s5r)

Note, that the DHTMLX library provides [a set of own CSS classes](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget) that you can also apply to change the appearance of Grid:

~~~js
const grid = new dhx.Grid("grid_container", {
    css: "dhx_widget--bg_white"
});
~~~

**Related articles**: 
- [List of CSS classes for styling a widget](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget)
- [Themes](themes.md)
