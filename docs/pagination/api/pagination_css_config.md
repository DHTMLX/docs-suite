---
sidebar_label: css
title: JavaScript Pagination - css Config 
description: You can explore the css config of Pagination in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# css

@short: adds style classes to the pagination

@signature: {'css?: string;'}

@example:
<style>
	.custom_class {
		margin: 0px;
	}

	.custom_class button span.dxi {
		color: #5858E3;
	}
</style>

const pagination = new dhx.Pagination("pagination_container", {
    css: "custom_class" 
});

@descr:

**Related sample**: [Pagination. Styling (custom CSS)](https://snippet.dhtmlx.com/e7bujtsu)

Note, that the DHTMLX library provides [a set of own CSS classes](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget) that you can also apply to change the appearance of Pagination:

~~~js
const pagination = new dhx.Pagination("pagination_container", {
    css: "dhx_widget--bg_white dhx_widget--bordered"
});
~~~

**Related articles**: 
- [List of CSS classes for styling a widget](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget)
- [Themes](themes.md)