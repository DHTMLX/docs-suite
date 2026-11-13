---
sidebar_label: NavItem
title: JavaScript Toolbar - NavItem 
description: You can explore the NavItem of Toolbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# NavItem

The NavItem control is the default control of navigation-related components. It can contain other controls as nested items.

![Toolbar navItem with an icon, NAV ITEM label, and a number badge in DHTMLX Suite](/img/toolbar/navitem.png)

**Related sample**: [Toolbar. NavItem](https://snippet.dhtmlx.com/os48cj6x)

## Add NavItem {#adding-navitem}

Use the `add()` method of [TreeCollection](/tree_collection/) to add a NavItem control to a toolbar:

~~~js
toolbar.data.add({
    type:"navItem", value:"My NavItem"
});
~~~

### Properties

Check the [list of properties](toolbar/api/api_navitem_properties.md) that you can set in the configuration object of a NavItem control.

## Add an icon {#adding-an-icon}

Use the `icon` property to add an icon to a NavItem control:

~~~js
{
    type:"navItem", value:"Some",
    icon:"dxi dxi-check"
}
~~~

## Add a badge with a number {#adding-a-badge-with-a-number}

Use the `count` property to add a badge with a number to a NavItem control, for example, to count new messages:

~~~js
{
    type:"navItem", value:"Some",
    icon:"dxi dxi-check",
    count:10
}
~~~

## Add HTML content {#adding-html-content}

Use the `html` property to add custom HTML content to a NavItem control:

~~~js
{
    type: "navItem",
    html: "<div class='user-button'><img src='../avatars/Avatar.jpg'/></div>",
}
~~~

**Related sample**: [Toolbar. Item HTML content](https://snippet.dhtmlx.com/5n2b8x84)

## Show and hide a NavItem {#showinghiding-a-navitem}

The [`show()`](toolbar/api/toolbar_show_method.md) and [`hide()`](toolbar/api/toolbar_hide_method.md) methods of Toolbar show and hide a NavItem control by its ID:

~~~js
toolbar.show(id);
toolbar.hide(id);
~~~

**Related sample**: [Toolbar. Hide / show items](https://snippet.dhtmlx.com/cldp89u4)

## Enable and disable a NavItem {#enablingdisabling-a-navitem}

The [`enable()`](toolbar/api/toolbar_enable_method.md) and [`disable()`](toolbar/api/toolbar_disable_method.md) methods of Toolbar enable and disable a NavItem control by its ID:

~~~js
toolbar.enable(id);
toolbar.disable(id);
~~~

**Related sample**: [Toolbar. Enable / disable items](https://snippet.dhtmlx.com/ovblenaf)

## Add a tooltip {#setting-tooltip}

Use the `tooltip` property to add a tooltip to a NavItem control:

~~~js {4}
{
    type:"navItem", 
    value:"Click", 
    tooltip:"Click me and find out why"
}
~~~

**Related sample**: [Toolbar. Tooltips](https://snippet.dhtmlx.com/105levtd)

## Two-state NavItems {#two-state-navitems}

Set the `twoState` property to create a NavItem with two states: active (pressed) and inactive (unpressed). The `active` property sets the initial state:

~~~js {5}
{
    type: "navItem",
    icon: "dxi dxi-format-bold",
    tooltip: "bold text",
    twoState: true, active: false
}
~~~

**Related sample**: [Toolbar. TwoState](https://snippet.dhtmlx.com/1pj4eqw0)

### Change the state of a two-state NavItem {#changing-state-of-a-two-state-navitem-on-the-fly}

The [`setState()`](toolbar/api/toolbar_setstate_method.md) method of Toolbar changes the state of a two-state NavItem:

~~~js {7,9}
{
    type: "navItem", icon: "dxi dxi-format-bold",
    tooltip: "bold text", twoState: true, 
    id:"bold"
}
...
toolbar.setState({"bold":true});    // active:true
// or
toolbar.setState({"bold":false});   // active:false
~~~

The `setState()` method takes one parameter: a key-value pair with the ID of the item and the new value.

### Get the state of a two-state NavItem {#accessing-current-state-of-a-two-state-navitem}

The [`getState()`](toolbar/api/toolbar_getstate_method.md) method returns the current state of a two-state NavItem:

~~~js {7}
{
    type: "navItem", icon: "dxi dxi-format-bold",
    tooltip: "bold text", twoState: true, 
    id:"bold"
}
...
const state = toolbar.getState(); // -> { bold:true } or { bold:false }
~~~
