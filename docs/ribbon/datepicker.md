---
sidebar_label: Datepicker
title: JavaScript Ribbon - Datepicker
description: You can explore the Datepicker of Ribbon in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Datepicker

This is a control of Ribbon intended for date selection. Check the article below to see how to add and customize the Datepicker control in an easy and convenient way.

<iframe src="https://snippet.dhtmlx.com/50chb61i?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="450"></iframe>

## Adding Datepicker

The Datepicker control can be easily added to a ribbon with the help of the [add()](tree_collection/api/treecollection_add_method.md) method of Tree Collection.

~~~js
ribbon.data.add({
    type: "datePicker"
});
~~~

## Properties

You can provide the [following properties](ribbon/api/api_datepicker_properties.md) in the configuration object of a Datepicker control.

## Adding an icon

The Datepicker control can have an icon which is set through the corresponding option [icon](ribbon/customization.md).

~~~js
{
    type: "datePicker",
    icon: "dxi dxi-calendar-today",
}
~~~

## Showing/hiding Datepicker

To hide/show Datepicker, you should pass the ID of Datepicker to the [hide()](ribbon/api/ribbon_hide_method.md) / [show()](ribbon/api/ribbon_show_method.md) methods of Ribbon:

~~~js
ribbon.show(id);
ribbon.hide(id);
~~~

## Enabling/disabling Datepicker

It is possible to enable or disable Datepicker by the [enable()](ribbon/api/ribbon_enable_method.md) / [disable()](ribbon/api/ribbon_disable_method.md) methods:

~~~js
ribbon.enable(id);
ribbon.disable(id);
~~~
