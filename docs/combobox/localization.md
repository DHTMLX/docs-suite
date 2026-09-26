---
sidebar_label: Localization
title: JavaScript Combo Box - Localization 
description: You can explore the localization of Combo Box in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Localization

You can apply different languages to the DHTMLX Combobox interface. Translate the label strings and apply the resulting locale to the component.

**Related sample**: [Combobox. Localization](https://snippet.dhtmlx.com/cnj0j9g0?tag=combobox)

## Default locale

Combobox uses the following default locale:

~~~js
const en = {
    notFound: "Not found",
    selectAll: "Select all",
    unselectAll: "Unselect all",
    selectedItems: "Selected items",
    createItem: "Create",
    placeholder: "Click to select"
};
~~~

## Custom locale

Follow these steps to use a different locale:

- Define the language settings—button and label names:

~~~js
const de = {
    notFound: "Nicht gefunden",
    selectAll: "Alle auswählen",
    unselectAll: "Deaktivieren Sie Alle",
    selectedItems: "Ausgewählte Elemente",
    createItem: "Schaffen",
    placeholder: "Klicken um auszuwählen"
};
~~~

- Call the `dhx.i18n.setLocale()` method before Combobox initialization to apply the settings:

~~~js
dhx.i18n.setLocale("combobox", de);
const combo = new dhx.Combobox("combo_container");
~~~


