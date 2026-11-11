---
sidebar_label: NavItem
title: JavaScript Ribbon - NavItem 
description: You can explore the NavItem of Ribbon in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# NavItem

The NavItem control is the default control of navigation-related components. It can contain other controls as nested items.

![Ribbon nav item with a save icon and a red counter badge in DHTMLX Suite](/img/ribbon/navitem.png)

## Add NavItem {#adding-navitem}

Use the `add()` method of TreeCollection to add a NavItem control to a ribbon:

~~~js
ribbon.data.add({
    type:"navItem", value:"My NavItem"
});
~~~

**Related sample**: [Ribbon. Nav items](https://snippet.dhtmlx.com/zijc2nta)

### Properties

Check the [list of properties](ribbon/api/api_navitem_properties.md) that you can set in the configuration object of a NavItem control.

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
    html: "<div id='preloader'><div id='loader'></div></div >",
}
~~~

**Related sample**: [Ribbon. Item HTML content](https://snippet.dhtmlx.com/3djaib6o)

## Show and hide a NavItem {#showinghiding-a-navitem}

The `show()` and `hide()` methods of Ribbon show and hide a NavItem control by its ID:

~~~js
ribbon.show(id);
ribbon.hide(id);
~~~

## Enable and disable a NavItem {#enablingdisabling-a-navitem}

The `enable()` and `disable()` methods enable and disable a NavItem control by its ID:

~~~js
ribbon.enable(id);
ribbon.disable(id);
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
