---
sidebar_label: css
title: css
---          



@short: adds a CSS class(es) to the component

@signature: css?: string;

@example: 
<style>
    .bg-gray {
        background: #efefef;
    }
</style>
 
 
var dataview = new dhx.DataView("dataview", {itemsInRow: 5, css: "bg-gray"});


@template:	api_config
@descr: 

The DHTMLX library provides a set of CSS classes that you can apply to change appearance of Window.

~~~js
var dataview = new dhx.DataView("dataview", {css: "dhx_widget--bg_gray"});

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

If you want to apply your own styles for selection of items or focus, you can do it via the corresponding CSS classes: **.dhx_dataview-item--selected** and **.dhx_dataview-item--focus**.
There is no need to use any additional custom classes.

~~~js
<style>
    .dhx_dataview-item--selected {
        border-color: transparent;
        box-shadow: 0px 1px 5px 0px rgb(2, 136, 209, 0.5), 
            inset 0px 0px 0px 1px rgb(2, 136, 209, 1);
    }
</style>
 
var dataview = new dhx.DataView("dataview", {itemsInRow: 3});
~~~

@relatedsample:
https://snippet.dhtmlx.com/j1yv94o8	Dataview. Custom Widget Styles
https://snippet.dhtmlx.com/kpnzizbf	Dataview. Custom Item Styles

@related:
dataview/customization.md
