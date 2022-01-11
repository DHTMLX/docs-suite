---
sidebar_label: Work with Selection object
title: JavaScript Tree - Work with Selection Object 
description: You can explore how to work with Selection Object of Tree in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Work with Selection object

You can manipulate with Tree items via the API of the **selection** object. It is possible to select an item, remove selection, and get the id or even the object of a selected Tree item.

## Enabling/Disabling Selection object

Starting from v7.0, you can activate selection of items via the [](../selection/api/selection_enable_method.md) method of the selection object.

~~~js
tree.selection.enable();
~~~

To disable selection of items in Tree, make use of the [](../selection/api/selection_disable_method.md) method of the selection object:

~~~js
tree.selection.disable();
~~~

**Related sample**: [Tree. Disable/Enable selection](https://snippet.dhtmlx.com/g6cmggqt)

{{note To make the process of working with the selection of items more flexible, you can apply the [related](selection.md#events) events of the Selection object.}}

## Selecting an item

To select a particular Tree item, make use of the **add()** method of the **selection** object. As a parameter the method takes the id of an item. 

~~~js
var id = tree.selection.getId(); // -> "2"
tree.selection.add("2");
~~~

## Unselecting an item

To remove selection from a selected item, apply the **remove()** method of the **selection** object. The method may take the id of an item as a parameter:

~~~js
tree.selection.remove("2"); 
~~~

Starting from v7.0, the method unselects all previously selected items when calling without parameters:

~~~js
tree.selection.remove();
~~~

## Getting id of a selected item

You can get the id of the currently selected item with the **getId()** method of the **selection** object:

~~~js
var selected = tree.selection.getId(); // -> "2"
~~~

## Getting object of a selected item

It is also possible to get the object of a selected item using the **getItem()** method of the **selection** object:

~~~js
var item = tree.selection.getItem();
~~~
