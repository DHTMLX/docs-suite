---
sidebar_label: Datepicker
title: JavaScript Toolbar - Datepicker
description: You can explore the Datepicker of Toolbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Datepicker

The Datepicker control lets users select a date in a toolbar. The sections below show how to add and customize the control.

<iframe src="https://snippet.dhtmlx.com/3rotluou?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="450"></iframe>

## Add Datepicker {#adding-datepicker}

Use the [`add()`](tree_collection/api/treecollection_add_method.md) method of TreeCollection to add a Datepicker control to a toolbar:

~~~js
toolbar.data.add({
    type: "datePicker"
});
~~~

## Properties

Check the [list of properties](toolbar/api/api_datepicker_properties.md) that you can set in the configuration object of a Datepicker control.

## Add an icon {#adding-an-icon}

Use the [`icon`](toolbar/customization.md) property to add an icon to a Datepicker control:

~~~js
{
    type: "datePicker",
    icon: "dxi dxi-calendar-today",
}
~~~

## Show and hide Datepicker {#showinghiding-datepicker}

The [`show()`](toolbar/api/toolbar_show_method.md) and [`hide()`](toolbar/api/toolbar_hide_method.md) methods of Toolbar show and hide a Datepicker control by its ID:

~~~js
toolbar.show(id);
toolbar.hide(id);
~~~

## Enable and disable Datepicker {#enablingdisabling-datepicker}

The [`enable()`](toolbar/api/toolbar_enable_method.md) and [`disable()`](toolbar/api/toolbar_disable_method.md) methods enable and disable a Datepicker control by its ID:

~~~js
toolbar.enable(id);
toolbar.disable(id);
~~~
