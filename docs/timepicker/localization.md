---
sidebar_label: Localization
title: JavaScript Timepicker - Localization 
description: The Timepicker locale holds the labels of the hours and minutes sliders and of the Save button. Learn how to translate them and apply a custom locale with the dhx.i18n.setLocale() method in the docs of the DHTMLX JavaScript UI library.
---

# Localization

You can apply different languages to the interface of DHTMLX Timepicker. You just need to translate the corresponding strings for the labels of Timepicker and apply a ready locale to the component.

![Timepicker localized into German with translated labels of the hours and minutes sliders in DHTMLX Suite](/img/timepicker/locale.png)

## Default locale

The default locale for Timepicker looks like this:

~~~jsx
const en = {
    // labels of the sliders
    hours: "Hours",
    minutes: "Minutes",
    // label of the Save button
    save: "Save"
};
~~~

Timepicker renders the **Save** button only if you enable the [`controls`](timepicker/api/timepicker_controls_config.md) property.

## Custom locale

To use a different locale, your need to:

- define necessary language settings: provide the labels of the sliders and of the Save button:

~~~jsx
const de = {
    hours: "Stunden",
    minutes: "Minuten",
    save: "Speichern"
};
~~~

- apply the language settings by calling the `dhx.i18n.setLocale()` method before Timepicker initialization:

~~~jsx
dhx.i18n.setLocale("timepicker", de);
const timepicker = new dhx.Timepicker("timepicker_container");
~~~

The method merges the passed labels into the current locale, so you can redefine just some of them.

:::note
A timepicker inside a calendar takes its labels from the locale of Timepicker as well. The calendar locale defines the rest of the labels, see the [Localization](calendar/localizing_calendar.md) guide of Calendar.
:::
