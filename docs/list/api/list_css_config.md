---
sidebar_label: css
title: JavaScript List - css Config 
hide_title: true
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

var list = new dhx.List("list", {css: "bg-gray"});

@descr:

**Related samples**:
- [List. Custom Styles](https://snippet.dhtmlx.com/s461f09w)
- [List. Add Custom Selection With Custom Css](https://snippet.dhtmlx.com/6hss19d3)

Note, that the DHTMLX library provides [a set of own CSS classes](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget) that you can also apply to change the appearance of List:

~~~js
var list = new dhx.List("list", {
	css: "dhx_widget--bg_white"
});
~~~
