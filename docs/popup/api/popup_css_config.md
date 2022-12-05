---
sidebar_label: css
title: JavaScript Popup - css Config 
description: You can explore the css config of Popup in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# css

@short: adds style classes for the component

@signature: {'css?: string;'}

@descr:
#### Example

~~~html
<style>
	.custom {
		--dhx-font-color-primary: var(--dhx-color-white);
		--dhx-background-primary: var(--dhx-color-primary);

		margin-top: 25px;
		animation: opacity .4s ease-in-out forwards;
	}
</style>

<script>
	const popup = new dhx.Popup({
	    css: "dhx_widget--border-shadow custom"
	});
</script>
~~~

@descr:

**Related sample**: [Popup. Styling (custom CSS)](https://snippet.dhtmlx.com/rd8zfw5h)

Note, that the DHTMLX library provides [a set of own CSS classes](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget) that you can also apply to change the appearance of Popup.

~~~js
const popup = new dhx.Popup({
    css: "dhx_widget--bg_white"
}); 
~~~

**Related articles**: 
- [List of CSS classes for styling a widget](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget)
- [Themes](themes.md)
