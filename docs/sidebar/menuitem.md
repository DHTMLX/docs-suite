---
sidebar_label: MenuItem
title: JavaScript Sidebar - MenuItem 
description: You can explore the MenuItem of Sidebar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# MenuItem

The MenuItem control displays a drop-down list of options. It can contain its own submenu.

![Sidebar MenuItem with an expanded drop-down list of options in DHTMLX Suite](/img/sidebar/menuitem.png)

## Add MenuItem {#adding-menuitem}

Use the `add()` method of TreeCollection to add a MenuItem control to a sidebar:

~~~js
sidebar.data.add({
    type:"menuItem", value:"Sidebar menuItem", tooltip: "Press me",  items:[
        { type:"menuItem", value:"Option 1" },
        { type:"menuItem", value:"Option 2" },
        { type:"separator"},
        { type:"menuItem", value:"Option Infinite" }
    ]
});
~~~

### Properties

Check the [list of properties](sidebar/api/api_menuitem_properties.md) that you can set in the configuration object of a MenuItem control.

## Add an icon {#adding-an-icon}

Use the `icon` property to add an icon to a MenuItem control:

~~~js
{
    type:"menuItem", value:"Some",
    icon:"dxi dxi-menu-right"
}
~~~

## Add a badge with a number {#adding-a-badge-with-a-number}

Use the `count` property to add a badge with a number to a MenuItem control, for example, to count new messages:

~~~js
{
    type:"menuItem", value:"Some",
    icon:"dxi dxi-check",
    count:10
}
~~~

## Add HTML content {#adding-html-content}

Use the `html` property to add custom HTML content to a MenuItem control:

~~~js
{
    type: "menuItem",
    html: "<img class='item-avatar' src='../avatars/Avatar_07.jpg'/>"
}
~~~

## Show and hide a MenuItem {#showinghiding-a-menuitem}

The `show()` and `hide()` methods of Sidebar show and hide a MenuItem control by its ID:

~~~js
sidebar.show(id);
sidebar.hide(id);
~~~

## Enable and disable a MenuItem {#enablingdisabling-a-menuitem}

The `enable()` and `disable()` methods enable and disable a MenuItem control by its ID:

~~~js
sidebar.enable(id);
sidebar.disable(id);
~~~

## Add a tooltip {#setting-tooltip}

Use the `tooltip` property to add a tooltip to a MenuItem control:

~~~js {4}
{
    type:"menuItem", 
    value:"Click", 
    tooltip:"Click me and find out why"
}
~~~
