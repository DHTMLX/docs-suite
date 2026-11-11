---
sidebar_label: NavItem
title: JavaScript Sidebar - NavItem 
description: You can explore the NavItem of Sidebar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# NavItem

The NavItem control is the default control of navigation-related components. It can contain other controls as nested items.

![Sidebar NavItem with an icon, text label and a number badge in DHTMLX Suite](/img/sidebar/navitem.png)

## Add NavItem {#adding-navitem}

Use the `add()` method of TreeCollection to add a NavItem control to a sidebar:

~~~js
sidebar.data.add({
    type:"navItem", value:"My NavItem"
});
~~~

**Related sample**: [Sidebar. Navigation items](https://snippet.dhtmlx.com/potv580p)

### Properties

Check the [list of properties](sidebar/api/api_navitem_properties.md) that you can set in the configuration object of a NavItem control.

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
    html: "<img class='item-avatar' src='../avatars/Avatar_07.jpg'/>"
}
~~~

**Related sample**: [Sidebar. Item HTML content](https://snippet.dhtmlx.com/xb6av4qj)

## Show and hide a NavItem {#showinghiding-a-navitem}

The `show()` and `hide()` methods of Sidebar show and hide a NavItem control by its ID:

~~~js
sidebar.show(id);
sidebar.hide(id);
~~~

## Enable and disable a NavItem {#enablingdisabling-a-navitem}

The `enable()` and `disable()` methods enable and disable a NavItem control by its ID:

~~~js
sidebar.enable(id);
sidebar.disable(id);
~~~

## Add a tooltip {#setting-tooltip}

Use the `tooltip` property to add a tooltip to a NavItem control:

~~~js {4}
{
    type:"navItem", 
    value:"Click", 
    tooltip:"Click me and find out why"
}
~~~
