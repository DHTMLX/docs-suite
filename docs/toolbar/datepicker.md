---
sidebar_label: Datepicker
title: JavaScript Toolbar - Datepicker
description: You can explore the Datepicker of Toolbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Datepicker

This is a control of Toolbar to select a date. Check the article below to see how easy and convenient to add and customize the Datepicker control.

<iframe src="https://snippet.dhtmlx.com/3rotluou?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="450"></iframe>

## Adding Datepicker

The Datepicker control can be easily added to a toolbar with the help of the [add()](tree_collection/api/treecollection_add_method.md) method of Tree Collection.

~~~js
toolbar.data.add({
    type: "datePicker"
});
~~~

## Properties

You can provide the [following properties](toolbar/api/api_datepicker_properties.md) in the configuration object of a Datepicker control.

## Adding an icon

The Datepicker control can have an icon which is set through the corresponding option [icon](toolbar/customization.md).

~~~js
{
    type: "datePicker",
    icon: "dxi dxi-calendar-today",
}
~~~

## Showing/hiding Datepicker

To hide/show Datepicker, you should pass the ID of Datepicker to the [hide()](toolbar/api/toolbar_hide_method.md) / [show()](toolbar/api/toolbar_show_method.md) methods of Toolbar:

~~~js
toolbar.show(id);
toolbar.hide(id);
~~~

## Enabling/disabling Datepicker

It is possible to enable or disable Datepicker by the [enable()](toolbar/api/toolbar_enable_method.md) / [disable()](toolbar/api/toolbar_disable_method.md) methods:

~~~js
toolbar.enable(id);
toolbar.disable(id);
~~~
