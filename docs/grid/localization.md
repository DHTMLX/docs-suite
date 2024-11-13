---
sidebar_label: Localization
title: JavaScript Grid - Localization 
description: You can explore how to work with Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Localization

:::tip pro version only
The described functionality requires PRO version of the DHTMLX Grid (or DHTMLX Suite) package.
:::

You can apply different languages to the interface of dhtmlxGrid. You just need to translate the corresponding strings for Grid labels and apply a ready locale to the component.

## Default locale

The default locale for Grid looks like this:

~~~jsx
const en = {
    total: "Total",
    groupText: "Group",
    dropAreaTitle: "Group by:",
    dropAreaPlaceholder: "Drag the column header here",
}
~~~

## Custom locale

To use a different locale, your need to:

- define the necessary language settings: provide translations for all text labels, e.g.:

~~~jsx
const de = {
    // language settings
};
~~~

- apply the language settings calling the `dhx.i18n.setLocale()`` method before Grid initialization:

~~~jsx
dhx.i18n.setLocale("grid", de);
const grid = new dhx.Grid("grid_container");
~~~