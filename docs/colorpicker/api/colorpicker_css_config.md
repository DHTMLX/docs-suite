---
sidebar_label: css
title: JavaScript Colorpicker - css Config 
description: You can explore the css config of Colorpicker in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# css

@short: Optional. Adds custom CSS classes to Colorpicker

@signature: {'css?: string;'}

@descr:
#### Example

~~~html
<style>
	.custom-class {
		background: #f2f2f2;
		border: solid 1px lightblue;
	}

	.custom-class .dhx_palette__cell {
		border-radius: 50%;
	}

	.custom-class .dhx_palette__cell:after {
		border-radius: 50%;
	}

	.custom-class .dhx_colorpicker-custom-colors__picker {
		border-radius: 50%;
	}
</style>

<script>
	const colorpicker = new dhx.Colorpicker("colorpicker_container", {
		css: "custom-class dhx_widget--bordered",
	});
</script>
~~~

**Related sample**: [Colorpicker. Styling (custom CSS)](https://snippet.dhtmlx.com/mnwi3sp0)

Note, that the DHTMLX library provides [a set of own CSS classes](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget) that you can also apply to change the appearance of Colorpicker:

~~~js
const colorpicker = new dhx.Colorpicker("colorpicker_container", {
    css: "dhx_widget--bg_white"
});
~~~

**Related articles**: 
- [List of CSS classes for styling a widget](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget)
- [Themes](themes.md)
