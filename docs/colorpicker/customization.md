---
sidebar_label: Customization
title: JavaScript Colorpicker - Customization 
description: You can explore the customization of Colorpicker in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Customization

## Styling

There is a possibility to make changes in the look and feel of a colorpicker. 

![](../assets/colorpicker/colorpicker_css.png)

**Related sample**: [Colorpicker. Custom CSS](https://snippet.dhtmlx.com/mnwi3sp0)

For this you need to take the following steps:

- add a new CSS class(es) with desired settings in the &lt;style&gt; section of your HTML page or in your file with styles (don't forget to include your file on the page in this case)

~~~html
<style>
	.my-first-class {
		/*some styles*/
	}
    
    .my-second-class {
		/*some styles*/
	}
</style>
~~~

- specify the name of the created CSS class (or names of classes separated by spaces) as the value of the [css](colorpicker/api/colorpicker_css_config.md) property in the ColorPicker configuration:

~~~js
var colorpicker = new dhx.Colorpicker({
    css:"my-first-class my-second-class"
});
~~~

For instance:

~~~js
<style>
	.myClass {
		background: #f2f2f2;
		border: solid 1px lightblue;
	}

	.myClass .dhx_palette__cell {
		border-radius: 50%;
	}

	.myClass .dhx_palette__cell:after {
		border-radius: 50%;
	}

	.myClass .dhx_colorpicker-custom-colors__picker {
		border-radius: 50%;
	}
</style>

var colorpicker = new dhx.Colorpicker("colorpicker", {
	css: "myClass dhx_widget--bordered",
});
~~~
