---
sidebar_label: css
title: JavaScript Sidebar - css Config 
description: You can explore the css config of Sidebar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# css

@short: adds style classes to Sidebar

@signature: {'css?: string;'}

@descr:
#### Example

~~~html
<style>
	.custom,.custom--popup-menu {
		--dhx-background-primary: #3A434A;
		--dhx-background-secondary: #5a6872;
		--dhx-background-additional: #5a6872;
		--dhx-s-toolbar-background: var(--dhx-background-primary);

		--dhx-color-primary: #118d8d;
		--dhx-color-primary-hover: #49e9e9;
		--dhx-color-primary-active: #49e9e9;

		--dhx-font-color-primary: #fff;
		--dhx-font-color-secondary: rgba(255, 255, 255, 0.75);
		--dhx-font-color-additional: #fff;
	}
</style>

<script>
    const sidebar = new dhx.Sidebar("sidebar_container", {
        css: "custom",
    });
</script>
~~~

**Related sample**: [Sidebar. Styling (custom CSS)](https://snippet.dhtmlx.com/3mhhvvcr)

Note, that the DHTMLX library provides [a set of own CSS classes](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget) that you can also apply to change the appearance of Sidebar:

~~~js
const sidebar = new dhx.Sidebar("sidebar_container", {
    css: "dhx_widget--bg_white"
});
~~~

**Related articles**: 
- [List of CSS classes for styling a widget](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget)
- [Themes](themes.md)
