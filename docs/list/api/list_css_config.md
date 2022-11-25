---
sidebar_label: css
title: JavaScript List - css Config 
description: You can explore the css config of List in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# css

@short: adds a CSS class(es) to the component

@signature: {'css?: string;'}

@example:
<style>
	.bg-gray {
		background: #faf9f9;
	}
</style>

const list = new dhx.List("list_container", {css: "bg-gray"});

@descr:

**Related samples**:
- [List. Styling (custom CSS)](https://snippet.dhtmlx.com/s461f09w)
- [List. Styling selection with CSS](https://snippet.dhtmlx.com/6hss19d3)

Note, that the DHTMLX library provides [a set of own CSS classes](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget) that you can also apply to change the appearance of List:

~~~js
const list = new dhx.List("list_container", {
	css: "dhx_widget--bg_white"
});
~~~
