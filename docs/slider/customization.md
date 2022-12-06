---
sidebar_label: Customization
title: JavaScript Slider - Customization 
description: You can explore the customization of Slider in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Customization

## Styling

There is a possibility to make changes in the look and feel of a slider. 

![Styling Slider](../assets/slider/custom_style.png)

**Related sample**: [Slider. Styling (custom CSS)](https://snippet.dhtmlx.com/ewizud5e)

For this you need to take the following steps:

- add a new CSS class(es) with desired settings in the &lt;style&gt; section of your HTML page or in your file with styles (don't forget to include your file on the page in this case)

~~~html
<style>
	.my_first_class {
		/*some styles*/
	}
    
    .my_second_class {
		/*some styles*/
	}
</style>
~~~

- specify the name of the created CSS class (or names of classes separated by spaces) as the value of the [css](slider/api/slider_css_config.md) property in the Slider configuration:

~~~js
const slider = new dhx.Slider("slider_container", {
    css:"my_first_class my_second-class"
});
~~~

For example:

~~~html
<style>
    .custom {
        --dhx-color-primary: #118d8d;
    }
</style>

<script>
	const slider = new dhx.Slider("slider_container", {
    	css: "custom"
	});
</script>
~~~
