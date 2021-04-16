---
sidebar_label: Separator
title: Separator
---          

This is a line separating items/groups of items from each other.

![](../assets/sidebar/separator.png)

## Adding Separator

A new Separator can be created with the help of the **add()** method of Tree Collection:

~~~js
sidebar.data.add({
	type:"separator"
});
~~~

{{editor	https://snippet.dhtmlx.com/aq2l1z5n	Sidebar. Separator}}

### Properties

You can provide the [following properties](sidebar/api/api_separator_properties.md) in the configuration object of a Separator control.


## Showing/hiding separator

You can hide and show Separator with the methods of Sidebar by passing the control's id to them:

~~~js
sidebar.show(id);
sidebar.hide(id);
~~~

Check the full list of available operations in the [Sidebar API](sidebar/api/refs/sidebar.md) and [Tree Collection API](tree_collection/api/refs/treecollection.md).
