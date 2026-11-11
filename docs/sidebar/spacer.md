---
sidebar_label: Spacer
title: JavaScript Sidebar - Spacer 
description: You can explore the Spacer of Sidebar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Spacer

The Spacer control adds empty space on the sidebar and helps you align controls.

![Sidebar Spacer adding empty space between navigation items in DHTMLX Suite](/img/sidebar/spacer.png)

## Add Spacer {#adding-spacer}

Use the `add()` method of TreeCollection to add a Spacer control to a sidebar:

~~~js
sidebar.data.add({
    type:"spacer"
});
~~~

**Related sample**: [Sidebar. Spacer](https://snippet.dhtmlx.com/wk50830i)

### Properties

Check the [list of properties](sidebar/api/api_spacer_properties.md) that you can set in the configuration object of a Spacer control.

## Show and hide Spacer {#showinghiding-spacer}

The `show()` and `hide()` methods of Sidebar show and hide a Spacer control by its ID:

~~~js
sidebar.show(id);
sidebar.hide(id);
~~~

Check the full list of operations in the [Sidebar API](sidebar/api/api_overview.md) and the [TreeCollection API](/tree_collection/).
