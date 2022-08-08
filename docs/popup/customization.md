---
sidebar_label: Customization
title: JavaScript Popup - Customization 
description: You can explore the customization of Popup in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Customization

## Styling

There is a possibility to make changes in the look and feel of a popup. 

![](../assets/popup/custom_css.png)

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

- specify the name of the created CSS class (or names of classes separated by spaces) as the value of the [css](popup/api/popup_css_config.md) property in the Popup configuration:

~~~js
var dhxPopup = new dhx.Popup({ 
    css:"my-first-class my-second-class"
});

popup.show();
~~~

**Related sample**: [Popup. Styling (custom CSS)](https://snippet.dhtmlx.com/rd8zfw5h)
