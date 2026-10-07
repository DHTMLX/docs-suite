---
sidebar_label: ariaLabel
title: JavaScript Window - ariaLabel Config
description: Set the accessible name of DHTMLX Window with the ariaLabel property. Screen readers announce it when the window opens, and without it the name comes from the window title or from the aria_dialog locale key of DHTMLX Suite.
---

# ariaLabel

@short: Optional. Sets the accessible name of the window, which a screen reader announces when the window opens

#### Usage

~~~ts
ariaLabel?: string;
~~~

#### Example

~~~jsx
const dhxWindow = new dhx.Window({
    ariaLabel: "Order details",
    modal: true
});

dhxWindow.show();
~~~

@descr:
The value is rendered as the `aria-label` attribute of the element with the `dialog` role. A window is exposed as a dialog, so it needs a name of its own to be distinguishable from the rest of the page.

The name is resolved in the following order:

1. the `ariaLabel` value, when it is set;
2. the [`title`](window/api/window_title_config.md) value, when the window has a header title;
3. the `aria_dialog` locale key, which can be [translated](common_features/accessibility_support.md#localization-of-screen-reader-strings) like the other screen-reader strings.

Set `ariaLabel` explicitly when the visible title is not descriptive enough on its own, or when the window has no title at all.

**Related articles**:
- [Accessibility support: Window](common_features/accessibility_support.md#window)
- [Localization of screen-reader strings](common_features/accessibility_support.md#localization-of-screen-reader-strings)

@changelog: added in v9.4
