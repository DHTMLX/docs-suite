---
sidebar_label: Spacer
title: JavaScript Toolbar - Spacer 
description: You can explore the Spacer of Toolbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Spacer

This item takes space on the toolbar and is used for aligning controls.

![](../assets/toolbar/spacer.png)

**Related sample**: [Toolbar. Spacer](https://snippet.dhtmlx.com/0wt6z7sc)

## Adding Spacer

A new Spacer can be created with the help of the **add()** method of [Tree Collection](tree_collection.md):

~~~js
toolbar.data.add({
	type:"spacer"
});
~~~

### Properties

You can provide [the following properties](toolbar/api/api_spacer_properties.md) in the configuration object of a Spacer control.

## Showing/hiding Spacer

You can hide and show Spacer with the [show()](toolbar/api/toolbar_show_method.md)/[hide()](toolbar/api/toolbar_hide_method.md) methods of Toolbar:

~~~js
toolbar.show(id);
toolbar.hide(id);
~~~

**Related sample**: [Toolbar. Hide / show items](https://snippet.dhtmlx.com/cldp89u4)

Check the full list of available operations in the [Toolbar API](toolbar/api/api_overview.md) and [Tree Collection API](tree_collection.md).
