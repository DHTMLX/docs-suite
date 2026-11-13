---
sidebar_label: Button
title: JavaScript Toolbar - Button 
description: You can explore the Button of Toolbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Button

The Button control displays a button with a text label and an optional icon. A button can have two states and show a badge with a number, for example, to count new messages.

![Toolbar button with an icon, label, and a number badge in DHTMLX Suite](/img/toolbar/buttons.png)

**Related sample**: [Toolbar. Button](https://snippet.dhtmlx.com/7aysw3gb)

## Add a button {#adding-button}

Use the `add()` method of [TreeCollection](/tree_collection/) to add a button to a toolbar:

~~~js
toolbar.data.add({
    type:"button", value:"Best button"
});
~~~

### Properties

Check the [list of properties](toolbar/api/api_button_properties.md) that you can set in the configuration object of a Button control.

## Add an icon {#adding-an-icon}

Use the `icon` property to add an [icon](toolbar/customization.md#icons) to a button:

~~~js
{
    type:"button", value:"Done",
    icon:"dxi dxi-check"
}
~~~

## Add a badge with a number {#adding-a-badge-with-a-number}

Set the `count` property to add a badge with a number to a button, for example, to show the number of new messages:

~~~js
{
    type:"button", value:"Done",
    icon:"dxi dxi-check",
    count:10
}
~~~

## Add HTML content {#adding-html-content}

Use the `html` property to add custom HTML content to a button:

~~~js
{
    type: "button",
    html: "<div class='user-button'><img src='../avatars/Avatar.jpg'/></div>",
}
~~~

**Related sample**: [Toolbar. Item HTML content](https://snippet.dhtmlx.com/5n2b8x84)

## Show and hide a button {#showinghiding-a-button}

The [`show()`](toolbar/api/toolbar_show_method.md) and [`hide()`](toolbar/api/toolbar_hide_method.md) methods show and hide a button by its ID:

~~~js
toolbar.show(id);
toolbar.hide(id);
~~~

**Related sample**: [Toolbar. Hide / show items](https://snippet.dhtmlx.com/cldp89u4)

## Enable and disable a button {#enablingdisabling-a-button}

The [`enable()`](toolbar/api/toolbar_enable_method.md) and [`disable()`](toolbar/api/toolbar_disable_method.md) methods enable and disable a button by its ID:

~~~js
toolbar.enable(id);
toolbar.disable(id);
~~~

**Related sample**: [Toolbar. Enable / disable items](https://snippet.dhtmlx.com/ovblenaf)

## Add a tooltip {#setting-tooltip}

Use the `tooltip` property to add a tooltip to a button:

~~~js {4}
{
    type:"button", 
    value:"Click", 
    tooltip:"Click me and find out why"
}
~~~

**Related sample**: [Toolbar. Tooltips](https://snippet.dhtmlx.com/105levtd)
