---
sidebar_label: css
title: JavaScript Calendar - css Config
description: You can explore the css config of Calendar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# css

@short: Optional. Adds style classes to Calendar

@signature: {'css?: string;'}

@descr:
#### Example

~~~html
<style>
	.custom {
        --dhx-color-primary: #118d8d;
    }
</style>

<script>
	const calendar = new dhx.Calendar("calendar_container", { 
		css: "custom dhx_widget--bordered"
	});
</script>
~~~

**Related sample**: [Calendar. Styling (custom CSS)](https://snippet.dhtmlx.com/2045cbe1)

Note, that the DHTMLX library provides [a set of own CSS classes](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget) that you can also apply to change the appearance of Calendar:

~~~js
const calendar = new dhx.Calendar("calendar_container", {
    css: "dhx_widget--bg_white dhx_widget--bordered"
});
~~~

**Related articles**: 
- [List of CSS classes for styling a widget](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget)
- [Themes](themes.md)
