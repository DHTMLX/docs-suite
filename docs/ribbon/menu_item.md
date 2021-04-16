---
sidebar_label: menuItem Control
title: menuItem Control
---   

```tododelete не используется?``` 

This is a dropdown menu.

![](../assets/ribbon/select_button.png)

## Adding menuItem

You can add a menuItem to the ribbon with the help of the **add()** method of the **data** module:

~~~js
myRibbon.data.add({
	type:"menuItem", value:"Menu", childs:[
		{ type:"menuItem", value:"Option 1" },
		{ type:"menuItem", value:"Option 2" },
		{ type:"menuOption", value:"Option Infinite" }
	]
});
~~~

## Attributes

You can provide the following attributes in the configuration object of a menuItem:

- **id** (string|number) - optional, the ID of the control;
- **type** (string) -  always "menuItem";
- **value** (string) - optional, the text label;
- **icon** (string) - the icon;
- **hotkey** (string) - optional, adds a hotkey to a menu item that has no childs (otherwise adds it, but it doesn't open the menu item childs, just "clicks" the menu item itself);
- **$disabled** (boolean) - optional, disables the menu option;
- **css** (string) - optional, adds a custom CSS class;
- **childs** (array of objects) - adds submenu options that can have all the above properties.

You can add [separators](ribbon/separator.md) between menu options.

## Changing the width of popups with menu options

You can set the width of dropdown menus with the **popupWidth** property of the ribbon configuration:

~~~js
var myribbon = new dhx.ribbon("ribbon",{
    popupWidth:100
});
~~~

## Showing/Hiding menuItem

A menu item can be hidden and shown again with the methods of ribbon:

~~~js
ribbon.show(id);
ribbon.hide(id);
~~~

## Enabling/Disabling menuItem

Menu items can be enabled and disabled:

~~~js
ribbon.enable(id);
ribbon.disable(id);
~~~

@todo:
$openIcon property cannot be reset, can it? hotkeys for menuItems with children? show()/hide() ?

