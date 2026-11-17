---
sidebar_label: Localization
title: JavaScript Colorpicker - Localization 
description: You can explore the localization of Colorpicker in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Localization

DHTMLX Colorpicker allows you to apply different languages to its interface. Translate the strings for Colorpicker labels and tooltips and apply the resulting locale to the component.

## Default locale

Colorpicker uses the following default locale:

~~~js
const en = {
    cancel: "Cancel",
    select: "Select",
    rightClickToDelete: "Right click to delete",
    customColors: "Custom colors",
    addNewColor: "Add new color"
};
~~~

## Custom locale

Follow these steps to use a different locale:

- Define the language settings: translate the button labels, the labels of the custom colors section, and the tooltip:

~~~js
const de = {
    cancel: "Abbrechen",
    select: "Wählen",
    rightClickToDelete: "Rechtsklick zu entfernen",
    customColors: "Seine Farben",
    addNewColor: "Neue Farbe hinzufügen"
}
~~~

- Call the `dhx.i18n.setLocale()` method before Colorpicker initialization to apply the settings:

~~~js
dhx.i18n.setLocale("colorpicker", de);
const colorpicker = new dhx.Colorpicker("colorpicker_container");
~~~

**Related sample**: [Colorpicker. Localization](https://snippet.dhtmlx.com/l870h1gh)
