---
sidebar_label: Work with Window
title: JavaScript Window - Work with Window 
description: You can explore how to work with Window in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Work with Window

## Attaching content

You can easily attach some HTML content to a window via the [](window/api/window_attachhtml_method.md) method. It takes as a parameter a string with HTML.

~~~js
const dhxWindow = new dhx.Window({title: "Window"});
const html = "<h1>Header</h1><p>paragraph</p>";
dhxWindow.attachHTML(html);
dhxWindow.show();
~~~

**Related sample**: [Window. Attach HTML](https://snippet.dhtmlx.com/6uelt44m)

## Attaching DHTMLX components

DHTMLX Window allows attaching other DHTMLX components inside it.

~~~js
dhxWindow.attach("richtext",{mode: "document"});
dhxWindow.show();
~~~

**Related sample**: [Window. Attach widget](https://snippet.dhtmlx.com/t9ncuuou)

{{note The Message, Popup, Window components can't be attached to Window because these components can't have the parent container due to their architecture principles.}}
## Repainting window

In case you've changed some configuration settings of a window, you can repaint it on a page via the [](window/api/window_paint_method.md) method:

~~~js
dhxWindow.paint();
~~~

## Fullscreen mode

DHTMLX Window can be displayed in the full screen mode. To activate the full screen mode, make use of the [](window/api/window_setfullscreen_method.md) method:

~~~js
dhxWindow.setFullScreen();
~~~

**Related sample**: [Window. Fullscreen mode](https://snippet.dhtmlx.com/aftti5fy)

To disable the full screen mode, apply the [](window/api/window_unsetfullscreen_method.md) method:

~~~js
dhxWindow.unsetFullScreen();
~~~

To check whether the full screen mode is activated or not, use the [](window/api/window_isfullscreen_method.md) method:

~~~js
dhxWindow.setFullScreen();
dhxWindow.isFullScreen(); // -> true
~~~

## Showing/hiding window

You can hide a particular window or show it in a particular position on a page with the help of the [](window/api/window_hide_method.md) and [](window/api/window_show_method.md) methods. The [](window/api/window_show_method.md) method takes two optional parameters:

- [left](window/api/window_show_method.md) - (*number*) the left margin of a window
- [top](window/api/window_show_method.md) - (*number*) the top margin of a window

If called without parameters, the method shows a window in the default position on a page.

~~~js
// shows a window in the specified position
dhxWindow.show(34,54);

// hides a window
dhxWindow.hide();
~~~

**Related sample**: [Window. Showing / hiding Window](https://snippet.dhtmlx.com/ee2vf9xw)

## Sizing window

You can change the size of a window via the [](window/api/window_setsize_method.md) method. It takes two parameters:

- [width](window/api/window_setsize_method.md) - (*number*) the width of a window
- [height](window/api/window_setsize_method.md) - (*number*) the height of a window

~~~js
dhxWindow.setSize(250,250);
~~~

To get the current size of a window, use the [](window/api/window_getsize_method.md) method. It will return an object with width and height of a window:

~~~js
const size = dhxWindow.getSize(); // -> {width: 960, height: 469}
~~~

**Related sample**: [Window. Set/get Window size](https://snippet.dhtmlx.com/0zqxydvm)

## Positioning window

To set the position of a window on the fly, make use of the [](window/api/window_setposition_method.md) method. You should pass two parameters to the method:

- [left](window/api/window_setposition_method.md) - (*number*)	the left coordinate of a window
- [top](window/api/window_setposition_method.md) - (*number*)	the top coordinate of a window

~~~js
dhxWindow.setPosition(20,20);
dhxWindow.show();
~~~

To get the current position of a window, use the [](window/api/window_getposition_method.md) method. It will return an object with left and top coordinates of a window:

~~~js
const position = dhxWindow.getPosition(); // -> {left: 480, top: 234}
~~~

**Related sample**: [Window. Get/set Window position](https://snippet.dhtmlx.com/hc3ronrk)

## Checking visibility of window

You can check whether a window is hidden or shown on a page using the [](window/api/window_isvisible_method.md) method of the Window API. The method returns *true*, if a window is visible, and *false* if it's hidden.

~~~js
const visible = window.isVisible(); // -> true/false
~~~

**Related sample**: [Window. Get Window visible status](https://snippet.dhtmlx.com/woz5c09h)
