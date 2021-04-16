---
sidebar_label: css
title: css
---          

@short: adds style classes for the component

@signature:    css?: string;

@example: 
var dhxWindow = new dhx.Window({
    title: "Window", 
    css:"my_first_class my_second_class"
}); 

dhxWindow.show();

@template:	api_config
@descr: 
The DHTMLX library provides a set of CSS classes that you can apply to change appearance of Window.

~~~js
var dhxWindow = new dhx.Window({
    title: "Window", 
    css:"dhx_window--bordered"
}); 

dhxWindow.show();
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


@related: window/how_to_start.md
window/customization.md#styling

@relatedsample: https://snippet.dhtmlx.com/t5mvhwx8	Window. Custom Styles