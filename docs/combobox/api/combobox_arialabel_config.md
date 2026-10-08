---
sidebar_label: ariaLabel
title: JavaScript Combo Box - ariaLabel Config
description: Set the accessible name of the DHTMLX Combo Box input with the ariaLabel property, so that a screen reader announces a meaningful name when focus enters the combo box. Explore the API reference of DHTMLX Suite.
---

# ariaLabel

@short: Optional. Sets the accessible name of the input of Combo, which a screen reader announces when focus enters the combo box

#### Usage

~~~ts
ariaLabel?: string;
~~~

#### Example

~~~jsx
const combo = new dhx.Combobox("combo_container", {
    ariaLabel: "Country",
    data: countries
});
~~~

@descr:
The value is rendered as the `aria-label` attribute of the input with the `combobox` role. If the property is not set, the input is named *"Select value"* when the combo box is in the [`readOnly`](combobox/api/combobox_readonly_config.md) mode and *"Type or select value"* otherwise.

**Related article**: [Accessibility support: Combobox](common_features/accessibility_support.md#combobox)

@changelog: added in v9.4
