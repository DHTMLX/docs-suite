---
sidebar_label: css
title: css
---          

@short: the name of a CSS class(es) applied to Layout

@signature: css?: string;

@example: 
<style>
    .my_first_class {
        /*some styles*/
    }
 
    .my_second_class {
        /*some styles*/
    }
</style>

var layout = new dhx.Layout("layout_container", {
    css:"my_first_class my_second_class"
});


@template:	api_config
@descr: 

The DHTMLX library provides a set of CSS classes that you can apply to change appearance of the Layout cell.

~~~js
var layout = new dhx.Layout("layout", {
    css: "dhx_layout-cell--bordered",
		rows: [{
		        id: "toolbar",
                html: "Header",
                css: "dhx_layout-cell--border_bottom layout-header",
                gravity: false,
                height: "60px"
		}]
});
~~~

### List of CSS classes

- <b>dhx_layout-cell--bg_white</b> - Sets white background to a layout-cell

- <b>dhx_layout-cell--bg_gray</b> - Sets gray background to a layout-cell

- <b>dhx_layout-cell--bordered</b> - Sets borders on all sides of a layout-cell

- <b>dhx_layout-cell--border_top</b> - Sets a border on the top side of a layout-cell

- <b>dhx_layout-cell--border_bottom</b> - Sets a border on the bottom side of a layout-cell

- <b>dhx_layout-cell--border_left</b> - Sets a border on the left side of a layout-cell

- <b>dhx_layout-cell--border_right</b> - Sets a border on the right side of a layout-cell

- <b>dhx_layout-cell--border-shadow</b> - Adds a shadow border to a layout-cell

- <b>dhx_layout-cell--no-border_top</b> - Removes the top border of a  layout-cell

- <b>dhx_layout-cell--no-border_bottom</b> - Removes the bottom border of a layout-cell

- <b>dhx_layout-cell--no-border_right</b> - Removes the right border of a layout-cell

- <b>dhx_layout-cell--no-border_left</b> - Removes the left border of a layout-cell

@related: layout/init.md#initializelayout
layout/customization.md

@relatedsample: https://snippet.dhtmlx.com/pwxmf0lx	Layout. Custom Css
