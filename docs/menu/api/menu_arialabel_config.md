---
sidebar_label: ariaLabel
title: JavaScript Menu - ariaLabel Config
description: Set the accessible name of DHTMLX Menu or Context Menu with the ariaLabel property, so that a screen reader announces a meaningful name for the menu bar or the root menu of a context menu. Explore the API reference of DHTMLX Suite.
---

# ariaLabel

@short: Optional. Sets the accessible name of the menu bar or of the root menu of a context menu, which a screen reader announces to the user

#### Usage

~~~ts
ariaLabel?: string;
~~~

#### Example

~~~jsx
// names the menu bar
const menu = new dhx.Menu("menu_container", {
    ariaLabel: "Main menu",
    data: menuItems
});

// names the root menu of the context menu
const cmenu = new dhx.ContextMenu(null, {
    ariaLabel: "File actions",
    data: menuItems
});
~~~

@descr:
In Menu, the value is rendered as the `aria-label` attribute of the element with the `menubar` role. Use the property to tell several menus on one page apart. If the property is not set, the menu bar has no accessible name.

In [Context Menu](menu/creating_context_menu.md), the value is rendered as the `aria-label` attribute of the root element of the context menu, which has the `menu` role. A nested menu is named after the text (or the tooltip) of the item that opens it, but the root menu has no such item. If the property is not set, the root menu has no accessible name.

**Related article**: [Accessibility support: Toolbar, Menu, Sidebar and Ribbon](common_features/accessibility_support.md#toolbar-menu-sidebar-and-ribbon)

@changelog: added in v9.4
