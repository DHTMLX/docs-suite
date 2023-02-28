---
sidebar_label: Localization
title: JavaScript Combo Box - Localization 
description: You can explore the localization of Combo Box in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Localization

You can apply different languages to the interface of DHTMLX Combo. You just need to translate the corresponding strings for Combobox labels and apply a ready locale to the component.

## Default locale

The default locale for Combobox looks like this:

~~~js
const en = {
	notFound: "Not found",
    selectAll: "Select all",
    unselectAll: "Unselect all",
    selectedItems: "selected items",
	createItem: "Create"
};
~~~

## Custom locale

To use a different locale, your need to:

- define necessary language settings - names of buttons and labels:

~~~js
const de = {
	notFound: "Nicht gefunden",
    selectAll: "Alle auswählen",
    unselectAll: "Deaktivieren Sie Alle",
    selectedItems: "Ausgewählte Elemente",
	createItem: "Schaffen"
};
~~~

- apply the language settings by calling the **dhx.i18n.setLocale()** method before Combobox initialization:

~~~js
dhx.i18n.setLocale("combo_container", de);
const combo = new dhx.Combobox("combo_container");
~~~

**Related sample**: [Combobox. Localization](https://snippet.dhtmlx.com/cnj0j9g0)
