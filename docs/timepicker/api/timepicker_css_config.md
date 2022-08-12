---
sidebar_label: css
title: JavaScript Timepicker - css Config 
description: You can explore the css config of Timepicker in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# css

@short: adds style classes to TimePicker

@signature: {'css?: string;'}

@example:
<style>
	.bg-grey {
		background: #efefef;
	}
</style>

var timepicker = new dhx.Timepicker("timepicker", {
	css: "dhx_timepicker--bordered bg-grey"
});

@descr:

**Related sample**: [Timepicker. Styling (custom CSS)](https://snippet.dhtmlx.com/n4xfu4e9)

Note, that the DHTMLX library provides [a set of own CSS classes](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget) that you can also apply to change the appearance of TimePicker:

~~~js
var timepicker = new dhx.Timepicker("timepicker", {
	css: "dhx_widget--bg-gray"
});
~~~

[comment]: # (@related: timepicker/customization.md#styling timepicker/initialization.md#initialize-timepicker)
