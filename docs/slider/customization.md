---
sidebar_label: Customization
title: Customization
---          

Styling 
-----------

There is a possibility to make changes in the look and feel of a slider. 

![](../assets/slider/custom_style.png)

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
var slider = new dhx.Slider({
    css:"my_first_class my_second-class"
});
~~~

{{editor	https://snippet.dhtmlx.com/ewizud5e	Slider. Custom Colors}}

