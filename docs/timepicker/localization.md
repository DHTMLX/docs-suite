---
sidebar_label: Localization
title: JavaScript Timepicker - Localization 
description: The Timepicker locale holds the labels of the hours and minutes sliders and of the Save button. Learn how to translate them and apply a custom locale with the dhx.i18n.setLocale() method in the docs of the DHTMLX JavaScript UI library.
---

# Localization

You can apply different languages to the DHTMLX Timepicker interface. Translate the strings for the Timepicker labels and apply the locale to the component.

![Timepicker localized into German with translated labels of the hour and minute sliders in DHTMLX Suite](/img/timepicker/locale.png)

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

Follow these steps to use a different locale:

- Define the language settings. Provide the labels of the sliders and of the Save button:

~~~jsx
const de = {
    hours: "Stunden",
    minutes: "Minuten",
    save: "Speichern"
};
~~~

- Call the `dhx.i18n.setLocale()` method before you initialize Timepicker:

~~~jsx
dhx.i18n.setLocale("timepicker", de);
const timepicker = new dhx.Timepicker("timepicker_container");
~~~

The method merges the passed labels into the current locale, so you can redefine only the labels you need.

:::note
A timepicker inside a calendar takes its labels from the Timepicker locale as well. The calendar locale defines the other labels. For details, read the Calendar [Localization](calendar/localizing_calendar.md) guide.
:::
