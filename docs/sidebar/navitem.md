---
sidebar_label: NavItem
title: JavaScript Sidebar - NavItem 
description: You can explore the NavItem of Sidebar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# NavItem

This is a default control for navigation-related components, can contain any other controls as nested items. 

![](../assets/sidebar/navitem.png)

## Adding NavItem

A navItem can be easily added to a sidebar with the help of the **add()** method of Tree Collection:

~~~js
sidebar.data.add({
    type:"navItem", value:"My NavItem"
});
~~~

**Related sample**: [Sidebar. Navigation Items](https://snippet.dhtmlx.com/potv580p)

### Properties

You can provide the [following properties](sidebar/api/api_navitem_properties.md) in the configuration object of a NavItem control.

## Adding an icon

A navItem can have an icon which is set through the corresponding option **icon**:

~~~js
{
    type:"navItem", value:"Some",
    icon:"dxi dxi-check"
}
~~~

## Adding a badge with a number

You can add a number badge to the navItem to display information like the number of new messages. The badge is set via the **count** property:

~~~js
{
    type:"navItem", value:"Some",
    icon:"dxi dxi-check",
    count:10
}
~~~

## Adding HTML content

You can add any custom HTML content to a navItem with the help of the **html** property:

~~~js
{
    type: "navItem",
    html: "<img class='item-avatar' src='../avatars/Avatar_07.jpg'/>"
}
~~~

**Related sample**: [Sidebar. Item HTML Content](https://snippet.dhtmlx.com/xb6av4qj)

## Showing/hiding a navItem

To hide/show a navItem, you should pass the ID of the navItem to the **hide() / show()** Sidebar methods:

~~~js
sidebar.show(id);
sidebar.hide(id);
~~~

## Enabling/disabling a navItem 

Any navItem in the sidebar can be enabled/disabled:

~~~js
sidebar.enable(id);
sidebar.disable(id);
~~~

## Setting tooltip

You can add a tooltip to a navItem:

~~~js
{
    type:"navItem", 
    value:"Click", 
    tooltip:"Click me and find out why"  /*!*/
}
~~~
