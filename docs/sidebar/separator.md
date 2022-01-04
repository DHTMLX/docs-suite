---
sidebar_label: Separator
title: JavaScript Sidebar - Separator 
description: You can explore the Separator of Sidebar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Separator

This is a line separating items/groups of items from each other.

![](../assets/sidebar/separator.png)

## Adding Separator

A new Separator can be created with the help of the **add()** method of Tree Collection:

~~~js
sidebar.data.add({
	type:"separator"
});
~~~

**Related sample**: [Sidebar. Separator](https://snippet.dhtmlx.com/aq2l1z5n)

### Properties

You can provide the [following properties](sidebar/api/api_separator_properties.md) in the configuration object of a Separator control.

## Showing/hiding Separator

You can hide and show Separator with the methods of Sidebar by passing the control's id to them:

~~~js
sidebar.show(id);
sidebar.hide(id);
~~~

Check the full list of available operations in the [Sidebar API](sidebar/api/api_overview.md) and [Tree Collection API](tree_collection/index.md).
