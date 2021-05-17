---
sidebar_label: css
title: css
---          

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

**Related sample**: [Timepicker. Custom Style](https://snippet.dhtmlx.com/n4xfu4e9)

Note, that the DHTMLX library provides [a set of own CSS classes](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget) that you can also apply to change the appearance of TimePicker:

~~~js
var timepicker = new dhx.Timepicker("timepicker", {
	css: "dhx_widget--bg-gray"
});
~~~

[comment]: # (@related: timepicker/customization.md#styling timepicker/initialization.md#initialize-timepicker)
