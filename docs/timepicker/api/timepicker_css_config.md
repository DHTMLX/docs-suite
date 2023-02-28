---
sidebar_label: css
title: JavaScript Timepicker - css Config 
description: You can explore the css config of Timepicker in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# css

@short: Optional. Adds style classes to TimePicker

@signature: {'css?: string;'}

@descr:
#### Example

~~~html
<style>
  .custom {
    --dhx-font-color-primary: #c00;
    --dhx-color-primary: #ff5c5c;
  }
</style>

<script>
	const timepicker = new dhx.Timepicker("timepicker_container", {
  		css: "custom dhx_widget--bordered"
	});
</script>
~~~

**Related sample**: [Timepicker. Styling (custom CSS)](https://snippet.dhtmlx.com/n4xfu4e9)

Note, that the DHTMLX library provides [a set of own CSS classes](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget) that you can also apply to change the appearance of TimePicker:

~~~js
const timepicker = new dhx.Timepicker("timepicker_container", {
	css: "dhx_widget--bg-gray"
});
~~~

**Related articles**: 
- [List of CSS classes for styling a widget](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget)
- [Themes](themes.md)
