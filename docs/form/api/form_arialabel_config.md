---
sidebar_label: ariaLabel
title: JavaScript Form - ariaLabel Config
description: Set the accessible name of a DHTMLX Form with the ariaLabel property, so that a screen reader announces a meaningful name for the form. Explore the API reference of DHTMLX Suite.
---

# ariaLabel

@short: Optional. Sets the accessible name of the form, which a screen reader announces

#### Usage

~~~ts
ariaLabel?: string;
~~~

#### Example

~~~jsx
const form = new dhx.Form("form_container", {
    ariaLabel: "Sign-up form",
    rows: [
        { type: "input", name: "email", label: "Email" },
        { type: "button", name: "signup", text: "Sign up" }
    ]
});
~~~

@descr:
The value is rendered as the `aria-label` attribute of the root element of the form, which has the `form` role. If the property is not set, the [`title`](form/api/form_title_config.md) of the form is used. If neither is set, the form has no accessible name.

Form controls have their own `ariaLabel` property. For example, see the [Input properties](form/api/input/api_input_properties.md).

@changelog: added in v9.4.2
