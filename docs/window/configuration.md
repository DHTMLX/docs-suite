---
sidebar_label: Configuration
title: Configuration
---          

dhtmlxWindow provides a set of configuration options you can define in the constructor of the component before its initialization. It's possible to set a title into the header of a window, add a footer with controls,
specify the sizes of a window and decide whether it should be resizable, movable or modal, set some HTML content and define other useful settings to adapt the component to your needs.

Closability
------------

![](../assets/window/closable.png)


There is the [](window/api/window_closable_config.md) property that adds a Close button into the right top part of a window to allow a user to close a window on clicking it. This option is set to *true* by default.

~~~js
var dhxWindow = new dhx.Window({
    closable:false
});
~~~

{{editor	https://snippet.dhtmlx.com/d1nbhada	Window. Closable Window}}

Custom node
------------------

To place a window into a custom node you need to specify the container for a window via the [](window/api/window_node_config.md) property:

~~~js
var dhxWindow = new dhx.Window({
    node:"customDiv"
});
~~~

{{editor	https://snippet.dhtmlx.com/2rrclo09	Window. Window Container}}

{{note If no HTML container is specified, the window will be placed in the body.}}

Footer
-----------

![](../assets/window/with_footer.png)

You can provide a window with a footer that will include some additional controls for manipulating the content.

~~~js
var dhxWindow = new dhx.Window({
	footer:true
});
~~~

{{editor	https://snippet.dhtmlx.com/qu5j85ag	Window. Window With Footer}}

By default a footer is initialized with no controls. To add a control into the footer, you need to manipulate the [](window/api/window_footer_config.md) object of the toolbar. Follow the instructions given in the article window/customization.md.

Modality
-------------

![](../assets/window/modal_window.png)


It is possible to make a window modal, if there's a necessity. Use the [](window/api/window_modal_config.md) property to turn this functionality on:

~~~js
var dhxWindow = new dhx.Window({
    modal:true
});
~~~

{{editor	https://snippet.dhtmlx.com/ioejsm4e	Window. Modal Window}}

A modal window blocks the main window on its calling. It means that only the modal window remains active, while the main window becomes gray and unresponsive.




Movability
-----------

![](../assets/window/movable.png)


To equip a window with the ability to be moved around the screen, you should set the [](window/api/window_movable_config.md) property to *true*:

~~~js
var dhxWindow = new dhx.Window({
    movable:true
});
~~~

{{editor	https://snippet.dhtmlx.com/mkwuasj0	Window.  Movable Window}}

Overflowing browser window
----------------

By default, a window can't cross the borders of a browser window. To enable such a possibility, make use of the [](window/api/window_viewportoverflow_config.md) configuration property.

~~~js
var dhxWindow = new dhx.Window({
    viewportOverflow:true
});
~~~

{{editor	https://snippet.dhtmlx.com/qfhdlzri	Window. Viewport Overflow}}

{{note The property makes sense when set together with the [](window/api/window_movable_config.md) property.}}

Resizing 
--------

![](../assets/window/resizable.png)


The default window has fixed sizes with no possibility to change them from UI. You can switch on the corresponding configuration option to make a window resizable. 

~~~js
var dhxWindow = new dhx.Window({
    resizable:true
});
~~~

{{editor	https://snippet.dhtmlx.com/1suzi8gj	Window. Resizable Window.}}

Then you will be able to regulate the sizes of a window by dragging resizers that appear on hovering sides of a window. 

{{note To define the resizing limits, set necessary values to the [](window/api/window_minwidth_config.md) / [](window/api/window_minheight_config.md) properties.}}

Setting HTML content
-------------------

You can set some HTML content into a window via the [](window/api/window_html_config.md) configuration option, as in:

~~~js
var dhxWindow = new dhx.Window({
	htmlContent:"<h1>Header</h1><p>paragraph</p>"
});
~~~

Sizing
----------

You can adjust the size of a window via a set of options that define both the initial width and height of a window and the minimal dimensions of the component.

~~~js
var dhxWindow = new dhx.Window({
    width:250,
    height:250,
    minWidth:170,
    minHeight:170
});
~~~
 
{{editor	https://snippet.dhtmlx.com/1suzi8gj	Window. Resizable Window.}}

Default values of the size-related properties are:

- [minWidth](window/api/window_minwidth_config.md) - 100
- [minHeight](window/api/window_minheight_config.md) - 100
- [width](window/api/window_width_config.md) -  50% of the browser window's width
- [height](window/api/window_height_config.md) - 50% of the browser window's height 

Title
----------

dhtmlxWindow is initialized with an empty header. You can provide some text label for the header of the window via the [](window/api/window_title_config.md) property.

~~~js
var dhxWindow = new dhx.Window({
	title: "DHX Window"
});
~~~

The header can also contain some buttons. You can control them via the [](window/api/window_header_config.md) object of the toolbar. Check details in the article window/customization.md.

