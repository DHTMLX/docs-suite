---
sidebar_label: Work with Selection object
title: JavaScript DataView - Work with Selection Object 
description: You can explore how to work with Selection Object of DataView in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Work with Selection object

The `selection` object API lets you manage DataView items: select an item, remove selection, and get the id or the object of a selected DataView item.

## Enabling/Disabling Selection object

From v7.0, you can enable item selection with the [`enable()`](selection/api/selection_enable_method.md) method of the `selection` object:

~~~js
dataview.selection.enable();
~~~

To disable item selection in DataView, use the [`disable()`](selection/api/selection_disable_method.md) method of the `selection` object:

~~~js
dataview.selection.disable();
~~~

**Related sample**: [Dataview. Disable / enable selection](https://snippet.dhtmlx.com/kn42gb50)

:::note
For finer control over item selection, apply the [Selection object events](/selection/#events).
:::

## Selecting an item

To select a DataView item, use the `add()` method of the `selection` object. The method takes an item id as a parameter:

~~~js
const id = dataview.selection.getId(); // -> "2"
dataview.selection.add("2");
~~~

From v7.0, the method selects all unselected items when you call it without parameters:

~~~js
dataview.selection.add();
~~~

## Unselecting an item

To remove selection from a selected item, apply the `remove()` method of the `selection` object. The method can take an item id as a parameter:

~~~js
dataview.selection.remove("2"); 
~~~

From v7.0, the method unselects all previously selected items when you call it without parameters:

~~~js
dataview.selection.remove();
~~~

## Getting id of a selected item

You can get the id of the currently selected item with the `getId()` method of the `selection` object:

~~~js
const selected = dataview.selection.getId(); // -> "2"
~~~

From v7.0, the method can also return an array of ids of selected items if the DataView [multiselection](dataview/api/dataview_multiselection_config.md) property is enabled.

## Getting object of a selected item

You can also get the object of a selected item with the `getItem()` method of the `selection` object:

~~~js
const item = dataview.selection.getItem();
~~~

From v7.0, the method can also return an array of selected items if the DataView [multiselection](dataview/api/dataview_multiselection_config.md) property is enabled.
