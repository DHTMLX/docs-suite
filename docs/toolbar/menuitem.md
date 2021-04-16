---
sidebar_label: MenuItem
title: MenuItem
---          

MenuItem is a drop-down list of options, can contain its own sub-menu. 

![](../assets/toolbar/menuitem.png)

## Adding MenuItem

A menuItem can be easily added to a sidebar with the help of the **add()** method of Tree Collection:

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

You can provide [the following properties](toolbar/api/api_menuitem_properties.md) in the configuration object of a MenuItem control.

## Adding an icon

A menuItem can have an icon which is set through the corresponding option **icon**:

~~~js
{
    type:"menuItem", value:"Some",
    icon:"dxi dxi-menu-right"
}
~~~

## Adding a badge with a number

You can add a number badge to the menuItem to display information like the number of new messages. The badge is set via the **count** property:

~~~js
{
    type:"menuItem", value:"Some",
    icon:"dxi dxi-check",
    count:10
}
~~~

## Adding HTML content

You can add any custom HTML content to a menuItem with the help of the **html** property:

~~~js
{
    type: "menuItem",
    html: "<img class='item-avatar' src='../avatars/Avatar_07.jpg'/>"
}
~~~

## Showing/hiding a menuItem

To hide/show a menuItem, you should pass the ID of the menuItem to the **hide() / show()** Sidebar methods:

~~~js
toolbar.show(id);
toolbar.hide(id);
~~~

## Enabling/disabling a navItem 

Any menuItem in the toolbar can be enabled/disabled:

~~~js
toolbar.enable(id);
toolbar.disable(id);
~~~

## Setting tooltip

You can add a tooltip to a menuItem:

~~~js
{
    type:"menuItem", 
    value:"Click", 
    tooltip:"Click me and find out why"  /*!*/
}
~~~
