---
sidebar_label: css
title: JavaScript Ribbon - css Config 
description: You can explore the css config of Ribbon in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# css

@short: Optional. Adds style classes to Ribbon

@signature: {'css?: string;'}

@descr:
#### Example

~~~html
<style>
    .custom {
        --dhx-background-secondary: var(--dhx-color-white);
        --dhx-color-primary-light-hover: #aefafa;
        --dhx-color-primary-light-active: #118d8d;
    }
</style>

<script>
	const ribbon = new dhx.Ribbon("ribbon_container", {
    	css: "custom dhx_widget--bordered"
	});
</script>
~~~

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