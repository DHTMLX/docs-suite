---
sidebar_label: Work with Selection object
title: JavaScript List - Work with Selection Object 
description: You can explore how to work with Selection Object of List in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Work with Selection object

You can manipulate with List items via the API of the **selection** object. It is possible to select an item, remove selection, and get the id or even the object of a selected List item.

## Enabling/Disabling Selection object

Starting from v7.0, you can activate selection of items via the [](../selection/api/selection_enable_method.md) method of the selection object.

~~~js
list.selection.enable();
~~~

To disable selection of items in List, make use of the [](../selection/api/selection_disable_method.md) method of the selection object:

~~~js
list.selection.disable();
~~~

**Related sample**: [List. Disable/Enable Selection](https://snippet.dhtmlx.com/i4zj985o)

{{note To make the process of working with the selection of items more flexible, you can apply the [related](selection/index.md#events) events of the Selection object.}}

## Selecting an item

To select a particular List item, make use of the **add()** method of the **selection** object. As a parameter the method takes the id of an item. 

~~~js
var id = list.selection.getId(); // -> "2"
list.selection.add("2");
~~~

**Related sample**: [List. Set Selection](https://snippet.dhtmlx.com/io8oxxg2)

Starting from v7.0, the method selects all unselected items when calling without parameters:

~~~js
list.selection.add();
~~~

## Unselecting an item

To remove selection from a selected item, apply the **remove()** method of the **selection** object. The method may take the id of an item as a parameter:

~~~js
list.selection.remove("2"); 
~~~

Starting from v7.0, the method unselects all previously selected items when calling without parameters:

~~~js
list.selection.remove();
~~~

## Getting id of a selected item

You can get the id of the currently selected item with the **getId()** method of the **selection** object:

~~~js
var selected = list.selection.getId(); // -> "2"
~~~

**Related sample**: [List. Get Selection](https://snippet.dhtmlx.com/elonnovx)

Starting from v7.0, the method can also return an array with ids of selected items if the [multiselection](list/api/list_multiselection_config.md) property of List is enabled.

## Getting object of a selected item

It is also possible to get the object of a selected item using the **getItem()** method of the **selection** object:

~~~js
var item = list.selection.getItem();
~~~

Starting from v7.0, the method can also return an array of selected items if the [multiselection](list/api/list_multiselection_config.md) property of List is enabled.
