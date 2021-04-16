---
sidebar_label: Customization
title: Customization
---          

There is a possibility to make changes in the look and feel of a message box or a tooltip. You can either create a new CSS class or use a CSS class that DHTMLX library provides.

Using new CSS classes
----------------------------------------

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

- specify the name of the created CSS class (or names of classes separated by spaces) as the value of the **css** property in the [message box](message/configuration.md#messagebox) ([alert](message/configuration.md#alertbox), [confirm](message/configuration.md#confirmbox)), [tooltip](message/configuration.md#tooltip) configuration:

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
  text: "Here is dhtmlxMessage",
  icon: "dxi dxi-close",
  css: "custom-class"
});
~~~

{{editor	https://snippet.dhtmlx.com/7s6p67ht	Message. Message Custom Styles}}


{{editor	https://snippet.dhtmlx.com/g9tba9xi	Message. Alert Custom Styles}}

{{editor	https://snippet.dhtmlx.com/x0barf98	Message. Confirm Custom Styles}}



Using default CSS classes
------------------------------------------------------

The DHTMLX library provides a set of CSS classes that you can apply to change appearance of a message box or a tooltip.

~~~js
dhx.message({
    css:"dhx_widget--bg_gray"
});
~~~

### List of CSS classes

- <b>dhx_widget--bg_white</b> - Sets white background to a widget

- <b>dhx_widget--bg_gray</b> - Sets gray background to a widget

- <b>dhx_widget--bordered</b> - Sets borders on all sides of a widget

- <b>dhx_widget--border_top</b> - Sets a border on the top side of a widget

- <b>dhx_widget--border_bottom</b> - Sets a border on the bottom side of a widget

- <b>dhx_widget--border_left</b> - Sets a border on the left side of a widget

- <b>dhx_widget--border_right</b> - Sets a border on the right side of a widget

- <b>dhx_widget--border-shadow</b> - Adds a shadow border to a widget

- <b>dhx_widget--no-border_top</b> - Removes the top border of a  widget

- <b>dhx_widget--no-border_bottom</b> - Removes the bottom border of a widget

- <b>dhx_widget--no-border_right</b> - Removes the right border of a widget

- <b>dhx_widget--no-border_left</b> - Removes the left border of a widget

