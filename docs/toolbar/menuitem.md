---
sidebar_label: MenuItem
title: JavaScript Toolbar - MenuItem 
description: You can explore the MenuItem of Toolbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# MenuItem

The MenuItem control displays a drop-down list of options. It can contain its own submenu.

![Toolbar menuItem with an expanded dropdown list of options in DHTMLX Suite](/img/toolbar/menuitem.png)

## Add MenuItem {#adding-menuitem}

Use the [`add()`](tree_collection/api/treecollection_add_method.md) method of TreeCollection to add a MenuItem control to a toolbar:

~~~js
toolbar.data.add({
    type:"menuItem", value:"Toolbar menuItem", tooltip: "Press me",  items:[
        { type:"menuItem", value:"Option 1" },
        { type:"menuItem", value:"Option 2" },
        { type:"separator"},
        { type:"menuItem", value:"Option Infinite" }
    ]
});
~~~

### Properties

Check the [list of properties](toolbar/api/api_menuitem_properties.md) that you can set in the configuration object of a MenuItem control.

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

The `show()` and `hide()` methods of Toolbar show and hide a MenuItem control by its ID:

~~~js
toolbar.show(id);
toolbar.hide(id);
~~~

## Enable and disable a MenuItem {#enablingdisabling-a-menuitem}

The `enable()` and `disable()` methods of Toolbar enable and disable a MenuItem control by its ID:

~~~js
toolbar.enable(id);
toolbar.disable(id);
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
