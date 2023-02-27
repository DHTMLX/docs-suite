---
sidebar_label: css
title: JavaScript Combo Box - css Config 
description: You can explore the css config of Combo Box in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# css

@short: Optional. Adds style classes to Combobox

@signature: {'css?: string;'}

@descr:
#### Example

~~~html
<style>
  	body {
        margin: 0;
    }
	.custom-class .dhx_combobox-input-box {
		border-radius: 20px;
		background: #FFF;
	}
</style>

<script>
	const combobox = new dhx.Combobox("combobox_container", {
    	css: "custom-class"
	});
</script>
~~~

**Related sample**: [Combobox. Styling (custom CSS)](https://snippet.dhtmlx.com/lldd739i)

Note, that the DHTMLX library provides [a set of own CSS classes](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget) that you can also apply to change the appearance of Combobox:

~~~js
const combo = new dhx.Combobox("combo_container", {
    css: "dhx_widget--bg_white"
});
~~~

**Related articles**: 
- [List of CSS classes for styling a widget](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget)
- [Themes](themes.md)
