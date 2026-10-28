---
sidebar_label: ariaLabel
title: JavaScript Ribbon - ariaLabel Config
description: Set the accessible name of DHTMLX Ribbon with the ariaLabel property, so that screen-reader users can tell several ribbons on a page apart. Explore the API reference of DHTMLX Suite.
---

# ariaLabel

@short: Optional. Sets the accessible name of the ribbon, which a screen reader announces when focus enters the ribbon

#### Usage

~~~ts
ariaLabel?: string;
~~~

#### Example

~~~jsx
const ribbon = new dhx.Ribbon("ribbon_container", {
    ariaLabel: "Document tools",
    data: ribbonItems
});
~~~

@descr:
The value is rendered as the `aria-label` attribute of the element with the `toolbar` role. Use the property to tell several ribbons on one page apart. If the property is not set, the ribbon has no accessible name.

**Related article**: [Accessibility support: Toolbar, Menu, Sidebar and Ribbon](common_features/accessibility_support.md#toolbar-menu-sidebar-and-ribbon)

@changelog: added in v9.4
