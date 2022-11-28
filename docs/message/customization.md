---
sidebar_label: Customization
title: JavaScript Message - Customization 
description: You can explore the customization of Message in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Customization

There is a possibility to make changes in the look and feel of a message box or a tooltip. You can either create a new CSS class or use a CSS class that DHTMLX library provides.

## Using new CSS classes

![](../assets/message/custom_style.png)

To use a new CSS class you need to take the following steps:

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

- specify the name of the created CSS class (or names of classes separated by spaces) as the value of the **css** property in the [message box](message/configuration.md#message-box) ([alert](message/configuration.md#alert-box), [confirm](message/configuration.md#confirm-box)), [tooltip](message/configuration.md#tooltip) configuration:

~~~js
dhx.message({
    css:"my_first_class my_second_class"
});
~~~

For example:

~~~js
<style>
  .custom-class .dhx_message__text {
    font-size: 16px;
  }
  .custom-class .dhx_message__icon {
    color: red;
  }
</style>

dhx.message({
  text: "Here is DHTMLX Message",
  icon: "dxi dxi-close",
  css: "custom-class"
});
~~~

**Related sample**: [Message. Message styling (custom CSS)](https://snippet.dhtmlx.com/7s6p67ht)

**Related sample**: [Message. Alert styling (custom CSS)](https://snippet.dhtmlx.com/g9tba9xi)

**Related sample**: [Message. Confirm styling (custom CSS)](https://snippet.dhtmlx.com/x0barf98)

## Using default CSS classes

The DHTMLX library provides [a set of own CSS classes](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget) that you can apply to change the appearance either of a message box or a tooltip.

~~~js
dhx.message({
    css:"dhx_widget--bg_gray"
});
~~~
