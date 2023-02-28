---
sidebar_label: css
title: JavaScript Tabbar - css Config 
description: You can explore the css config of Tabbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# css

@short: Optional. The name of a CSS class(es) applied to Tabbar

@signature: {'css?: string;'}

@descr:
#### Example

~~~html
<style>
	.custom .dhx_tabbar-tab-button--active {
		background-color: rgb(2, 136, 209);
		color: var(--dhx-color-white);
	}
	.custom .dhx_tabbar-header-active {
		background-color: #ff5252;
	}
</style>

<script>
	const tabbar = new dhx.Tabbar("tabbar_container", {
    	mode: "top",
    	css: "custom",
    	tabAlign: "center",
    	views: [
    	    // view objects
    	]
	});
</script>
~~~

**Related sample**: [Tabbar. Styling (custom CSS)](https://snippet.dhtmlx.com/47en9f0a)

Note, that the DHTMLX library provides [a set of own CSS classes](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget) that you can also apply to change the appearance of Tabbar:

~~~js
const tabbar = new dhx.Tabbar("tabbar_container", {
    css: "dhx_widget--bg_white"
});
~~~

**Related articles**: 
- [List of CSS classes for styling a widget](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget)
- [Themes](themes.md)
