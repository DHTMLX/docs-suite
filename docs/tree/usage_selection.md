---
sidebar_label: Work with Selection object
title: JavaScript Tree - Work with Selection Object 
description: You can explore how to work with Selection Object of Tree in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Work with Selection object

The `selection` object API lets you manage Tree items: select an item, remove selection, and get the id or the object of a selected Tree item.

## Enabling/Disabling Selection object

From v7.0, you can enable item selection with the [`enable()`](selection/api/selection_enable_method.md) method of the `selection` object:

~~~js
tree.selection.enable();
~~~

To disable item selection in Tree, use the [`disable()`](selection/api/selection_disable_method.md) method of the `selection` object:

~~~js
tree.selection.disable();
~~~

**Related sample**: [Tree. Disable / enable selection](https://snippet.dhtmlx.com/g6cmggqt)

:::note
For finer control over item selection, apply the [Selection object events](/selection/#events).
:::

## Selecting an item

To select a Tree item, use the `add()` method of the `selection` object. The method takes an item id as a parameter:

~~~js
const id = tree.selection.getId(); // -> "2"
tree.selection.add("2");
~~~

## Unselecting an item

To remove selection from a selected item, apply the `remove()` method of the `selection` object. The method can take an item id as a parameter:

~~~js
tree.selection.remove("2"); 
~~~

From v7.0, the method unselects all previously selected items when you call it without parameters:

~~~js
tree.selection.remove();
~~~

## Getting id of a selected item

You can get the id of the currently selected item with the `getId()` method of the `selection` object:

~~~js
const selected = tree.selection.getId(); // -> "2"
~~~

## Getting object of a selected item

You can also get the object of a selected item with the `getItem()` method of the `selection` object:

~~~js
const item = tree.selection.getItem();
~~~
