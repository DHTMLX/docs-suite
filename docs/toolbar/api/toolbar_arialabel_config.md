---
sidebar_label: ariaLabel
title: JavaScript Toolbar - ariaLabel Config
description: Set the accessible name of DHTMLX Toolbar with the ariaLabel property, so that screen-reader users can tell several toolbars on a page apart. Without it, the name comes from the aria_toolbar locale key of DHTMLX Suite.
---

# ariaLabel

@short: Optional. Sets the accessible name of the toolbar, which a screen reader announces when focus enters the toolbar

#### Usage

~~~ts
ariaLabel?: string;
~~~

#### Example

~~~jsx
const toolbar = new dhx.Toolbar("toolbar_container", {
    ariaLabel: "Formatting",
    data: toolbarItems
});
~~~

@descr:
The value is rendered as the `aria-label` attribute of the element with the `toolbar` role. Use the property to tell several toolbars on one page apart. If the property is not set, the toolbar is named by the `aria_toolbar` locale key, which can be [translated](common_features/accessibility_support.md#localization-of-screen-reader-strings) like the other screen-reader strings.

**Related articles**:
- [Accessibility support: Toolbar, Menu, Sidebar and Ribbon](common_features/accessibility_support.md#toolbar-menu-sidebar-and-ribbon)
- [Localization of screen-reader strings](common_features/accessibility_support.md#localization-of-screen-reader-strings)

@changelog: added in v9.4
