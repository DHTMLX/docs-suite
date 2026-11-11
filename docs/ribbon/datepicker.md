---
sidebar_label: Datepicker
title: JavaScript Ribbon - Datepicker
description: You can explore the Datepicker of Ribbon in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Datepicker

The Datepicker control lets users select a date in a ribbon. The sections below show how to add and customize the control.

<iframe src="https://snippet.dhtmlx.com/50chb61i?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="450"></iframe>

## Add Datepicker {#adding-datepicker}

Use the [`add()`](tree_collection/api/treecollection_add_method.md) method of TreeCollection to add a Datepicker control to a ribbon:

~~~js
ribbon.data.add({
    type: "datePicker"
});
~~~

## Properties

Check the [list of properties](ribbon/api/api_datepicker_properties.md) that you can set in the configuration object of a Datepicker control.

## Add an icon {#adding-an-icon}

Use the [`icon`](ribbon/customization.md) property to add an icon to a Datepicker control:

~~~js
{
    type: "datePicker",
    icon: "dxi dxi-calendar-today",
}
~~~

## Show and hide Datepicker {#showinghiding-datepicker}

The [`show()`](ribbon/api/ribbon_show_method.md) and [`hide()`](ribbon/api/ribbon_hide_method.md) methods of Ribbon show and hide a Datepicker control by its ID:

~~~js
ribbon.show(id);
ribbon.hide(id);
~~~

## Enable and disable Datepicker {#enablingdisabling-datepicker}

The [`enable()`](ribbon/api/ribbon_enable_method.md) and [`disable()`](ribbon/api/ribbon_disable_method.md) methods enable and disable a Datepicker control by its ID:

~~~js
ribbon.enable(id);
ribbon.disable(id);
~~~
