---
sidebar_label: ariaLabel
title: JavaScript Menu - ariaLabel Config
description: Set the accessible name of a DHTMLX Context Menu with the ariaLabel property, so that a screen reader announces a meaningful name when the context menu opens. Explore the API reference of DHTMLX Suite.
---

# ariaLabel

@short: Optional. Sets the accessible name of the context menu, which a screen reader announces when the context menu opens

#### Usage

~~~ts
ariaLabel?: string;
~~~

#### Example

~~~jsx
const cmenu = new dhx.ContextMenu(null, {
    ariaLabel: "File actions",
    data: menuItems
});
~~~

@descr:
The value is rendered as the `aria-label` attribute of the root element of the context menu, which has the `menu` role. A nested menu is named after the text (or the tooltip) of the item that opens it, but the root menu has no such item. If the property is not set, the root menu has no accessible name.

:::note
This is the property of [Context Menu](menu/creating_context_menu.md).
:::

**Related article**: [Accessibility support: Toolbar, Menu, Sidebar and Ribbon](common_features/accessibility_support.md#toolbar-menu-sidebar-and-ribbon)

@changelog: added in v9.4
