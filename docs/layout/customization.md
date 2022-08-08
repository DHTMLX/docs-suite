---
sidebar_label: Customization
title: JavaScript Layout - Customization 
description: You can explore the customization of Layout in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Customization

## Styling Layout cells

There is a possibility to make changes in the look and feel of a layout by styling its cells. 

![](../assets/layout/custom_css.png)

For this you need to take the following steps:

- add a new CSS class(es) with desired settings in the &lt;style&gt; section of your HTML page or in your file with styles (don't forget to include your file on the page in this case):

~~~html
<style>
	.my_first_class {
		/*some styles*/
	}
    
    .my_second-class {
		/*some styles*/
	}
</style>
~~~

- specify the name of the created CSS class (or names of classes separated by spaces) as the value of the [css](layout/api/cell/layout_cell_css_config.md) property in the configuration of a Layout cell:

~~~js
var layout = new dhx.Layout("layout_container",{
    row: [
		{
			header: "Sub Block Header row",
			css:"my_first_class my_second_class"
		}
    ]    
});
~~~

For example:

~~~js
<style>
	.layout-header {
		background: #0288d1;
        color: #fff;
        font-size: 24px;
        font-weight: 800;
	}
</style>

var layout = new dhx.Layout("layout_container", {
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

**Related sample**: [Layout. Styling (custom CSS)](https://snippet.dhtmlx.com/pwxmf0lx)
