---
sidebar_label: css
title: JavaScript Layout - css Config 
description: You can explore the css config of Layout in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# css

@short: Optional. The name of a CSS class(es) applied to Layout

@signature: {'css?: string;'}

@descr:
#### Example

~~~html
<style>
    .layout {
		color: #fff;
		--dhx-background-secondary: #7a7a7a;
		--dhx-border-color: #bababa;
		--dhx-border: var(--dhx-border-width) solid var(--dhx-border-color);
	}

	.layout-header {
		--dhx-background-primary: #3A434A;
	}
	.dhx_layout-cell-inner_html {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>

<script>
	const layout = new dhx.Layout("layout_container", {
        type: "space",
        css: "layout",
		rows: [
	    	{
	            id: "toolbar",
	            html: "Header",
	            css: "layout-header",
	            height: "60px"
	        },
            // more objects
		]
	});
</script>
~~~

**Related sample**: [Layout. Styling (custom CSS)](https://snippet.dhtmlx.com/pwxmf0lx)

Note, that the DHTMLX library provides [a set of own CSS classes](helpers/base_elements.md#list-of-css-classes-for-styling-a-layout-cell) that you can also apply to change the appearance of a Layout cell.

~~~js
const layout = new dhx.Layout("layout_container", {
    css: "dhx_layout-cell--bordered",
	rows: [
        {
            id: "toolbar",
            html: "Header",
            css: "dhx_layout-cell--border_bottom layout-header",
            gravity: false,
            height: "60px"
	    }
    ]
});
~~~

**Related articles**: 
- [List of CSS classes for styling a widget](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget)
- [Themes](themes.md)
