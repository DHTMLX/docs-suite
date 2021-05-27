---
sidebar_label: css
title: JavaScript Tree - css Config 
hide_title: true
description: You can explore the css config of Tree in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
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

var tree = new dhx.Tree("tree_container", {css: "bg-gray"});

@descr:

**Related samples**:
- [Tree. Custom Styles](https://snippet.dhtmlx.com/ocv4p7zg)
- [Tree. Custom Toggle Icon](https://snippet.dhtmlx.com/zapehxd3)

Note, that the DHTMLX library provides [a set of own CSS classes](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget) that you can also apply to change the appearance of Tree:

~~~js
var tree = new dhx.Tree("tree", {
	css: "dhx_widget--bg-gray"
});
~~~

[comment]: # (@related: tree/initialization_of_dhtmlxtree.md#initialize-tree tree/setting_tree_appearance.md#styling)
