---
sidebar_label: Datepicker
title: Datepicker
---          

`to do check`

A control to select a date. Check the article below to see how easy and convenient to add and customize the Datepicker control. 

<iframe src="https://snippet.dhtmlx.com/3rotluou?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="450"></iframe>

## Adding Datepicker

The Datepicker control can be easily added to a toolbar with the help of the [**add()**](tree_collection/api/treecollection_add_method.md) method of the Tree Collection.

@example:
toolbar.data.add({
    type: "datePicker",
});
@examplestop:

## Properties

You can provide the [following properties](toolbar/api/api_datepicker_properties.md) in the configuration object of a Datepicker control.

## Adding an icon

The Datepicker control can have an icon which is set through the corresponding option [icon](toolbar/customization.md).

@example:
{
  type: "datePicker",
  icon: "dxi dxi-calendar-today",
}
@examplestop:

## Showing/hiding a Datepicker 

To hide/show the Datepicker, you should pass the ID of the Datepicker to the [hide()](toolbar/api/toolbar_hide_method.md) / [show()](toolbar/api/toolbar_show_method.md) Toolbar methods:

@example:
toolbar.show(id);
toolbar.hide(id);
@examplestop:

## Enabling/disabling a Datepicker 

Any control in the toolbar can be [enabled](toolbar/api/toolbar_enable_method.md) / [disabled](toolbar/api/toolbar_disable_method.md):

@example:
toolbar.enable(id);
toolbar.disable(id);
@examplestop:
