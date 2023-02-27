---
sidebar_label: Spacer
title: JavaScript Sidebar - Spacer 
description: You can explore the Spacer of Sidebar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Spacer

This item takes space on the sidebar and is used for aligning controls.

![](../assets/sidebar/spacer.png)

## Adding Spacer

A new Spacer can be created with the help of the **add()** method of Tree Collection:

~~~js
sidebar.data.add({
	type:"spacer"
});
~~~

**Related sample**: [Sidebar. Spacer](https://snippet.dhtmlx.com/wk50830i)

### Properties

You can provide the [following properties](sidebar/api/api_spacer_properties.md) in the configuration object of a Spacer control.

## Showing/hiding Spacer

You can hide and show Spacer with the methods of sidebar:

~~~js
sidebar.show(id);
sidebar.hide(id);
~~~

Check the full list of available operations in the [Sidebar API](sidebar/api/api_overview.md) and [Tree Collection API](tree_collection.md).
