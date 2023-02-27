---
sidebar_label: Separator
title: JavaScript Toolbar - Separator 
description: You can explore the Separator of Toolbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Separator

This is a horizontal (between menu options) or vertical (between toolbar controls) line separating items/groups of items from each other.

![](../assets/toolbar/separator.png)

**Related sample**: [Toolbar. Separator](https://snippet.dhtmlx.com/sguwr3m9)

## Adding Separator

A new Separator can be created with the help of the **add()** method of [Tree Collection](tree_collection.md):

~~~js
toolbar.data.add({
	type:"separator"
});
~~~

### Properties

The configuration object of the Separator control can have [the following properties](toolbar/api/api_separator_properties.md).

## Showing/hiding Separator

You can hide and show Separator with the [show()](toolbar/api/toolbar_show_method.md)/[hide()](toolbar/api/toolbar_hide_method.md) methods of Toolbar by passing the control's id to them:

~~~js
toolbar.show(id);
toolbar.hide(id);
~~~

**Related sample**: [Toolbar. Hide / show items](https://snippet.dhtmlx.com/cldp89u4)

Check the full list of available operations in the [Toolbar API](toolbar/api/api_overview.md) and [Tree Collection API](tree_collection.md).
