---
sidebar_label: css
title: css
---          

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

**Related sample**: [Pagination. Custom style](https://snippet.dhtmlx.com/e7bujtsu)

Note, that the DHTMLX library provides [a set of own CSS classes](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget) that you can also apply to change the appearance of Pagination:

~~~js
const pagination = new dhx.Pagination("pagination_container", {
    css: "dhx_widget--bg_white dhx_widget--bordered"
});
~~~

[comment]: # (@related: pagination/customization.md)
