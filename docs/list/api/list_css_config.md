---
sidebar_label: css
title: css
---          



@short: adds a CSS class(es) to the component

@signature: css?: string;

@example: 
<style>
	.bg-gray {
		background: #faf9f9;
	}
</style>


var list = new dhx.List("list", {css: "bg-gray"});


@template:	api_config
@descr: 
The DHTMLX library provides a set of CSS classes that you can apply to change appearance of List.

~~~js
var list = new dhx.List("list", {css:"dhx_widget--bg_white"});
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


@relatedsample: 
https://snippet.dhtmlx.com/s461f09w	List. Custom Styles
https://snippet.dhtmlx.com/6hss19d3	List. Add Custom Selection With Custom Css

