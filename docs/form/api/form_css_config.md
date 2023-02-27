---
sidebar_label: css
title: JavaScript Form - css Config 
description: You can explore the css Config of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# css

@short: Optional. The name of a CSS class(es) applied to the control group

@signature: {'css?: string;'}

@descr:
#### Example

~~~html
<style>
    .custom {
        --dhx-background-primary: rgb(238, 238, 238);
        --dhx-color-primary: #118d8d;
        --dhx-color-primary-active: #118d8d;
	    --dhx-color-primary-hover: #1ad1d1;
    }
</style>

<script>
	const form = new dhx.Form("form_container", {
    	padding: 40,
    	width: 400,
    	css: "custom",
    	rows: [
        	{
            	type: "input",
            	label: "Name",
            	placeholder: "John Doe",
        	},
        	{
            	type: "input",
            	label: "Email",
            	placeholder: "jd@mail.name"
        	},
        	// more controls
    	]
	});
</script>
~~~

**Related sample**: [Form. Styling (custom CSS)](https://snippet.dhtmlx.com/wnscgb50)

Note, that the DHTMLX library provides [a set of own CSS classes](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget) that you can also apply to change the appearance of Form:

~~~js
const form = new dhx.Form("form_container", {
    css: "dhx_widget--bg_white"
});
~~~

**Related articles**: 
- [List of CSS classes for styling a widget](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget)
- [Themes](themes.md)
