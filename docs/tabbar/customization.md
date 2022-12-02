---
sidebar_label: Customization
title: JavaScript Tabbar - Customization 
description: You can explore the customization of Tabbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Customization

## Styling Tabbar

There is a possibility to make changes in the look and feel of a tabbar.

![](../assets/tabbar/custom_style.png)

For this you need to take the following steps:

- add a new CSS class(es) with desired settings in the &lt;style&gt; section of your HTML page or in your file with styles (don't forget to include your file on the page in this case)

~~~js
<style>
	.my_first_class {
		/*some styles*/
	}
    
    .my_second_class {
		/*some styles*/
	}
</style>
~~~

- specify the name of the created CSS class (or names of classes separated by spaces) as the value of the [css](tabbar/api/tabbar_css_config.md) property in the Tabbar configuration:

~~~js
const tabbar = new dhx.Tabbar("tabbar_container", {
    css:"my_first_class my_second_class"
});
~~~

For example:

~~~html
<style>
	.custom .dhx_tabbar-tab-button--active {
		background-color: rgb(2, 136, 209);
		color: var(--dhx-color-white);
	}
	.custom .dhx_tabbar-header-active {
		background-color: #ff5252;
	}
</style>

<script>
	const tabbar = new dhx.Tabbar("tabbar_container", {
    	mode: "top",
    	css: "custom",
    	tabAlign: "center",
    	views: [
    	    // view objects
    	]
	});
</script>
~~~

**Related sample**: [Tabbar. Styling (custom CSS)](https://snippet.dhtmlx.com/47en9f0a)
