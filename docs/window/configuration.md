---
sidebar_label: Configuration
title: JavaScript Window - Configuration 
description: You can explore the configuration of Window in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Configuration

This article describes the configuration options of DHTMLX Window. Set them in the configuration object that you pass to the window constructor. The options let you do the following:

- Add a title and a footer to a window
- Set the window size
- Make a window closable, movable, resizable, or modal
- Let a window cross the borders of the browser window
- Place a window into a custom container
- Set the HTML content of a window

## Closability

![Closable Window with a header, Close button, text and an illustration in DHTMLX Suite](/img/window/closable.png)

The [](window/api/window_closable_config.md) property adds a Close button to the top right corner of a window. Users can click this button to close the window. The default value of the property is `false`.

~~~js
const dhxWindow = new dhx.Window({
    closable:false
});
~~~

**Related sample**: [Window. Closable, movable, resizable](https://snippet.dhtmlx.com/nthbfzfr)

## Custom node

Use the [](window/api/window_node_config.md) property to place a window into a custom container:

~~~js
const dhxWindow = new dhx.Window({
    node:"customDiv"
});
~~~

**Related sample**: [Window. Window container](https://snippet.dhtmlx.com/2rrclo09)

:::note
If you don't specify a container, the window appears in the document body.
:::

## Footer

![Window with a footer holding Decline and Accept buttons below the content in DHTMLX Suite](/img/window/with_footer.png)

Add a footer to a window to hold controls that work with the window content. Set the [](window/api/window_footer_config.md) property to `true`:

~~~js
const dhxWindow = new dhx.Window({
    footer:true
});
~~~

**Related sample**: [Window. Window with footer](https://snippet.dhtmlx.com/qu5j85ag)

The default footer has no controls. To add controls to the footer, use the [](window/api/window_footer_config.md) object of the window. Follow the instructions in the [](window/customization.md) article.

## Modality

![Modal Window over a grayed out blocked background page in DHTMLX Suite](/img/window/modal_window.png)

Set the [](window/api/window_modal_config.md) property to `true` to make a window modal:

~~~js
const dhxWindow = new dhx.Window({
    modal:true
});
~~~

**Related sample**: [Window. Modal Window](https://snippet.dhtmlx.com/ioejsm4e)

A modal window blocks the rest of the page when it opens. Only the modal window stays active, while the page behind it turns gray and stops responding.

## Movability

![Movable Window with a drag move cursor icon above its header in DHTMLX Suite](/img/window/movable.png)

Set the [](window/api/window_movable_config.md) property to `true` to let users move a window around the screen:

~~~js
const dhxWindow = new dhx.Window({
    movable:true
});
~~~

**Related sample**: [Window. Closable, movable, resizable](https://snippet.dhtmlx.com/nthbfzfr)

## Overflowing browser window

A default window can't cross the borders of the browser window. To let a window cross them, set the [](window/api/window_viewportoverflow_config.md) configuration property to `true`:

~~~js
const dhxWindow = new dhx.Window({
    viewportOverflow:true
});
~~~

**Related sample**: [Window. Viewport overflow](https://snippet.dhtmlx.com/qfhdlzri)

:::note
Use the property together with the [](window/api/window_movable_config.md) property.
:::

## Resizing

![Resizable Window with a diagonal resize handle in the top right corner in DHTMLX Suite](/img/window/resizable.png)

The default window has a fixed size that users can't change in the UI. Set the [](window/api/window_resizable_config.md) property to `true` to make a window resizable:

~~~js
const dhxWindow = new dhx.Window({
    resizable:true
});
~~~

**Related sample**: [Window. Closable, movable, resizable](https://snippet.dhtmlx.com/nthbfzfr)

When users hover over an edge of the window, a resizer appears. Users can drag it to change the window size.

:::note
To limit resizing, set the [](window/api/window_minwidth_config.md) and [](window/api/window_minheight_config.md) properties.
:::

## HTML content {#setting-html-content}

Pass HTML content to the [](window/api/window_html_config.md) configuration option to display it in a window:

~~~js
const dhxWindow = new dhx.Window({
    html:"<h1>Header</h1><p>paragraph</p>"
});
~~~

## Sizing

Use the following options to set the initial width and height of a window and its minimum size:

~~~js
const dhxWindow = new dhx.Window({
    width:250,
    height:250,
    minWidth:170,
    minHeight:170
});
~~~

**Related sample**: [Window. Closable, movable, resizable](https://snippet.dhtmlx.com/nthbfzfr)

The size options have the following default values:

- [`minWidth`](window/api/window_minwidth_config.md) — `100`
- [`minHeight`](window/api/window_minheight_config.md) — `100`
- [`width`](window/api/window_width_config.md) — 50% of the browser window width
- [`height`](window/api/window_height_config.md) — 50% of the browser window height

## Title

A new window has an empty header. Set the [](window/api/window_title_config.md) property to add a text label to the header:

~~~js
const dhxWindow = new dhx.Window({
    title: "DHX Window"
});
~~~

The header can also contain buttons. Use the [](window/api/window_header_config.md) object of the window to manage them. For details, check the [](window/customization.md) article.
