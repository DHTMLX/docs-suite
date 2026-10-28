---
sidebar_label: Localization
title: JavaScript Form - Localization 
description: You can explore the localization of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Localization

You can apply different languages to the DHTMLX Form interface, specifically to its SimpleVault control. Translate the label strings and apply the resulting locale to the component.

## Default locale

The Form SimpleVault control uses the following default (English) locale:

~~~js
const en = {
    simpleVaultText: "Drag & drop files or folders here or",
    simpleVaultLabel: "browse files"
};
~~~

## Custom locale

Follow these steps to use a different locale:

- Define the language settings: translate all text labels. For example, the German locale for the SimpleVault control is:

~~~js
const de = {
    simpleVaultText: "Drag & Drop Dateien oder Ordner hier oder",
    simpleVaultLabel: "Suchen Sie Dateien durch"
};
~~~

- Call the `dhx.i18n.setLocale()` method before Form initialization to apply the settings:

~~~js
dhx.i18n.setLocale("form", de);
const form = new dhx.Form("form_container");
~~~

**Related sample**: [Form. Localization](https://snippet.dhtmlx.com/x8n18cr4)

- For ColorPicker, DatePicker, Combo, and TimePicker controls, call the `dhx.i18n.setLocale()` method with the control name as a parameter, also before Form initialization:

~~~js {2}
dhx.i18n.setLocale("form", de);
dhx.i18n.setLocale("colorpicker", de);
const form = new dhx.Form("form_container");
~~~

:::tip
You localize the ColorPicker, DatePicker, and Combo controls the same way as the [ColorPicker](colorpicker/localizing_colorpicker.md), [Calendar](calendar/localizing_calendar.md), and [Combo](combobox/localization.md) widgets.
:::
