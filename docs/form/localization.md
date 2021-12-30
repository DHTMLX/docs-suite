---
sidebar_label: Localization
title: JavaScript Form - Localization 
description: You can explore the localization of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Localization

You can apply different languages to the interface of dhtmlxForm, specifically to its SimpleVault control. You just need to translate the corresponding strings for Form labels and apply a ready locale to the component.

## Default locale

The default (English) locale for Form SimpleVault control looks like this:

~~~js
var en = {
	simpleVaultText: "Drag & drop files or folders here or",
	simpleVaultLabel: "browse files"
};
~~~

## Custom locale

To use a different locale, your need to:

- define necessary language settings: provide translation for all text labels, e.g. the German locale for the SimpleVault control looks like this:

~~~js
var de = {
    simpleVaultText: "Drag & Drop Dateien oder Ordner hier oder",
	simpleVaultLabel: "Suchen Sie Dateien durch"
};
~~~

- apply the language settings by calling the **dhx.i18n.setLocale()** method before Form initialization:

~~~js
dhx.i18n.setLocale("form", de);
var form = new dhx.Form("form_container");
~~~

**Related sample**: [Form. Localization](https://snippet.dhtmlx.com/x8n18cr4)

- apply the language settings by calling the **dhx.i18n.setLocale()** method with the name of the control as a parameter for ColorPicker, DatePicker, Combo, TimePicker controls before Form initialization:

~~~js {2}
dhx.i18n.setLocale("form", de);
dhx.i18n.setLocale("colorpicker", de);
var form = new dhx.Form("form_container");
~~~

:::tip
The localization of the ColorPicker, DatePicker, Combo controls is the same as the localization of the widgets: [ColorPicker](colorpicker/localizing_colorpicker.md), [Calendar](calendar/localizing_calendar.md) and [Combo](combobox/localization.md).
:::
