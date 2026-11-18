---
sidebar_label: Work with Window
title: JavaScript Window - Work with Window 
description: You can explore how to work with Window in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Work with Window

## Attach HTML content {#attaching-content}

Use the [`attachHTML()`](window/api/window_attachhtml_method.md) method to attach HTML content to a window. The method takes a string with HTML as a parameter.

~~~jsx
const dhxWindow = new dhx.Window({ title: "Window" });
const html = "<h1>Header</h1><p>paragraph</p>";
dhxWindow.attachHTML(html);
dhxWindow.show();
~~~

**Related sample**: [Window. Attach HTML](https://snippet.dhtmlx.com/6uelt44m)

## Attach DHTMLX components {#attaching-dhtmlx-components}

Use the [`attach()`](window/api/window_attach_method.md) method to attach other DHTMLX components to a window:

~~~jsx
dhxWindow.attach("richtext", { mode: "document" });
dhxWindow.show();
~~~

**Related sample**: [Window. Attach widget](https://snippet.dhtmlx.com/t9ncuuou)

:::note 
You can't attach Message, Popup, or Window to Window: these components can't have a parent container.
:::

## Repaint Window {#repainting-window}

If you change the configuration of a window, call the [`paint()`](window/api/window_paint_method.md) method to repaint it on the page:

~~~jsx
dhxWindow.paint();
~~~

## Fullscreen mode

Call the [`setFullScreen()`](window/api/window_setfullscreen_method.md) method to switch a window to full-screen mode:

~~~jsx
dhxWindow.setFullScreen();
~~~

**Related sample**: [Window. Fullscreen mode](https://snippet.dhtmlx.com/aftti5fy)

To exit full-screen mode, call the [`unsetFullScreen()`](window/api/window_unsetfullscreen_method.md) method:

~~~jsx
dhxWindow.unsetFullScreen();
~~~

To check whether a window is in full-screen mode, use the [`isFullScreen()`](window/api/window_isfullscreen_method.md) method:

~~~jsx
dhxWindow.setFullScreen();
dhxWindow.isFullScreen(); // -> true
~~~

## Show and hide Window {#showinghiding-window}

Use the [`show()`](window/api/window_show_method.md) and [`hide()`](window/api/window_hide_method.md) methods to show and hide a window. The [`show()`](window/api/window_show_method.md) method takes two optional parameters:

- [`left`](window/api/window_show_method.md) — (`number`) the left coordinate of a window
- [`top`](window/api/window_show_method.md) — (`number`) the top coordinate of a window

If you call the method without parameters, it shows the window in the default position on the page.

~~~jsx
// shows a window in the specified position
dhxWindow.show(34, 54);

// hides a window
dhxWindow.hide();
~~~

**Related sample**: [Window. Showing / hiding Window](https://snippet.dhtmlx.com/ee2vf9xw)

## Set the active state {#setting-the-active-state}

When you work with several windows, you may need to make one of them active and bring it to the front. To do this, call the [`setActive()`](window/api/window_setactive_method.md) method of that window.

The example below creates two windows. The second window overlaps the first one on initialization, and the `setActive()` call brings the first window back to the front.

~~~jsx
const windowConfig = {
    width: 300,
    height: 300,
    html: "<div style='padding: 20px'>Window content</div>"
};

const window1 = new dhx.Window({
    ...windowConfig,
    title: "Window 1",
});

const window2 = new dhx.Window({
    ...windowConfig,
    title: "Window 2",
});

// displaying both windows
window1.show();
window2.show(); // Window 2 is currently on top

// bringing Window 1 to the front without refreshing its content
window1.setActive();
~~~

**Related sample**: [Window. Setting the active state](https://snippet.dhtmlx.com/lvm3kfwq)

The `setActive()` method activates a window **without re-rendering its content**. The DOM state, such as form input values, scroll positions, or media playback, stays intact.

## Set and get Window size {#sizing-window}

Use the [`setSize()`](window/api/window_setsize_method.md) method to change the size of a window. The method takes two parameters:

- [`width`](window/api/window_setsize_method.md) — (`number`) the width of a window
- [`height`](window/api/window_setsize_method.md) — (`number`) the height of a window

~~~jsx
dhxWindow.setSize(250, 250);
~~~

To get the current size of a window, use the [`getSize()`](window/api/window_getsize_method.md) method. The method returns an object with the width and height of the window:

~~~jsx
const size = dhxWindow.getSize(); // -> {width: 960, height: 469}
~~~

**Related sample**: [Window. Set/get Window size](https://snippet.dhtmlx.com/0zqxydvm)

## Set and get Window position {#positioning-window}

Use the [`setPosition()`](window/api/window_setposition_method.md) method to set the position of a window dynamically. The method takes two parameters:

- [`left`](window/api/window_setposition_method.md) — (`number`) the left coordinate of a window
- [`top`](window/api/window_setposition_method.md) — (`number`) the top coordinate of a window

~~~jsx
dhxWindow.setPosition(20, 20);
dhxWindow.show();
~~~

To get the current position of a window, use the [`getPosition()`](window/api/window_getposition_method.md) method. The method returns an object with the left and top coordinates of the window:

~~~jsx
const position = dhxWindow.getPosition(); // -> { left: 480, top: 234 }
~~~

**Related sample**: [Window. Get/set Window position](https://snippet.dhtmlx.com/hc3ronrk)

## Check Window visibility {#checking-visibility-of-window}

The [`isVisible()`](window/api/window_isvisible_method.md) method checks whether a window is visible. It returns `true` if the window is visible and `false` otherwise.

~~~jsx
const visible = window.isVisible(); // -> true/false
~~~

**Related sample**: [Window. Get Window visible status](https://snippet.dhtmlx.com/woz5c09h)
