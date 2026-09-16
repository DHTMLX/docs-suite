---
sidebar_label: Localization
title: JavaScript Grid - Localization 
description: You can explore how to work with Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Localization

:::tip pro version only
The described functionality requires PRO version of the DHTMLX Grid (or DHTMLX Suite) package.
:::

You can apply different languages to the Grid interface. Translate the corresponding strings for Grid labels and apply the resulting locale to the component.

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

To use a different locale, do the following:

- define the necessary language settings: provide translations for all text labels, for example:

~~~jsx
const de = {
    // language settings
};
~~~

- apply the language settings with the `dhx.i18n.setLocale()` method before Grid initialization:

~~~jsx
dhx.i18n.setLocale("grid", de);
const grid = new dhx.Grid("grid_container");
~~~