---
sidebar_label: css
title: css
---          

@short: adds style classes to the pagination

@type: string

~~~js
<style>
	.custom_class {
		margin: 0px;
	}

	.custom_class button span.dxi {
		color: #5858E3;
	}
</style>
~~~

const pagination = new dhx.Pagination("pagination_container", {
    css: "custom_class" 
});


@template:	api_config
@descr: 
The DHTMLX library provides a set of CSS classes that you can apply to change appearance of Pagination.

~~~js
var chart = new dhx.Pagination("pagination_container", {
    css:"dhx_widget--bg_white dhx_widget--bordered"
});
~~~

### List of CSS classes

- <b>dhx_widget--bg_white</b> - Sets white background to a widget

- <b>dhx_widget--bg_gray</b> - Sets gray background to a widget

- <b>dhx_widget--bordered</b> - Sets borders on all sides of a widget

- <b>dhx_widget--border_top</b> - Sets a border on the top side of a widget

- <b>dhx_widget--border_bottom</b> - Sets a border on the bottom side of a widget

- <b>dhx_widget--border_left</b> - Sets a border on the left side of a widget

- <b>dhx_widget--border_right</b> - Sets a border on the right side of a widget

- <b>dhx_widget--border-shadow</b> - Adds a shadow border to a widget

- <b>dhx_widget--no-border_top</b> - Removes the top border of a  widget

- <b>dhx_widget--no-border_bottom</b> - Removes the bottom border of a widget

- <b>dhx_widget--no-border_right</b> - Removes the right border of a widget

- <b>dhx_widget--no-border_left</b> - Removes the left border of a widget


[Pagination. Custom style](https://snippet.dhtmlx.com/e7bujtsu)

@related: pagination/customization.md
