---
sidebar_label: Work with Selection object
title: JavaScript DataView - Work with Selection Object 
description: You can explore how to work with Selection Object of DataView in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Work with Selection object

You can manipulate with DataView items via the API of the **selection** object. It is possible to select an item, remove selection, and get the id or even the object of a selected DataView item.

## Enabling/Disabling Selection object

Starting from v7.0, you can activate selection of items via the [enable()](selection/api/selection_enable_method.md) method of the selection object.

~~~js
dataview.selection.enable();
~~~

To disable selection of items in DataView, make use of the [disable()](selection/api/selection_disable_method.md) method of the selection object:

~~~js
dataview.selection.disable();
~~~

**Related sample**: [Dataview. Disable / enable selection](https://snippet.dhtmlx.com/kn42gb50)

{{note To make the process of working with the selection of items more flexible, you can apply the [related](selection.md#events) events of the Selection object.}}

## Selecting an item

To select a particular DataView item, make use of the **add()** method of the **selection** object. As a parameter the method takes the id of an item. 

~~~js
const id = dataview.selection.getId(); // -> "2"
dataview.selection.add("2");
~~~

Starting from v7.0, the method selects all unselected items when calling without parameters:

~~~js
dataview.selection.add();
~~~

## Unselecting an item

To remove selection from a selected item, apply the **remove()** method of the **selection** object. The method may take the id of an item as a parameter:

~~~js
dataview.selection.remove("2"); 
~~~

Starting from v7.0, the method unselects all previously selected items when calling without parameters:

~~~js
dataview.selection.remove();
~~~

## Getting id of a selected item

You can get the id of the currently selected item with the **getId()** method of the **selection** object:

~~~js
const selected = dataview.selection.getId(); // -> "2"
~~~

Starting from v7.0, the method can also return an array with ids of selected items if the [multiselection](dataview/api/dataview_multiselection_config.md) property of DataView is enabled.

## Getting object of a selected item

It is also possible to get the object of a selected item using the **getItem()** method of the **selection** object:

~~~js
const item = dataview.selection.getItem();
~~~

Starting from v7.0, the method can also return an array of selected items if the [multiselection](dataview/api/dataview_multiselection_config.md) property of DataView is enabled.
