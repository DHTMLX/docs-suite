---
sidebar_label: ariaLabel
title: JavaScript Sidebar - ariaLabel Config
description: Set the accessible name of DHTMLX Sidebar with the ariaLabel property, so that screen-reader users can tell several sidebars on a page apart. Explore the API reference of DHTMLX Suite.
---

# ariaLabel

@short: Optional. Sets the accessible name of the sidebar, which a screen reader announces when focus enters the sidebar

#### Usage

~~~ts
ariaLabel?: string;
~~~

#### Example

~~~jsx
const sidebar = new dhx.Sidebar("sidebar_container", {
    ariaLabel: "Main navigation",
    data: sidebarItems
});
~~~

@descr:
The value is rendered as the `aria-label` attribute of the element with the `toolbar` role and the vertical orientation. Use the property to tell several sidebars on one page apart. If the property is not set, the sidebar has no accessible name.

**Related article**: [Accessibility support: Toolbar, Menu, Sidebar and Ribbon](common_features/accessibility_support.md#toolbar-menu-sidebar-and-ribbon)

@changelog: added in v9.4
