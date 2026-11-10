---
sidebar_label: Separator
title: JavaScript Sidebar - Separator 
description: You can explore the Separator of Sidebar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Separator

The Separator control displays a line between items or groups of items.

![Sidebar Separator lines dividing navigation items with icons in DHTMLX Suite](/img/sidebar/separator.png)

## Add Separator {#adding-separator}

Use the `add()` method of TreeCollection to add a Separator control to a sidebar:

~~~js
sidebar.data.add({
    type:"separator"
});
~~~

**Related sample**: [Sidebar. Separator](https://snippet.dhtmlx.com/aq2l1z5n)

### Properties

Check the [list of properties](sidebar/api/api_separator_properties.md) that you can set in the configuration object of a Separator control.

## Show and hide Separator {#showinghiding-separator}

The `show()` and `hide()` methods of Sidebar show and hide a Separator control by its ID:

~~~js
sidebar.show(id);
sidebar.hide(id);
~~~

Check the full list of operations in the [Sidebar API](sidebar/api/api_overview.md) and the [TreeCollection API](/tree_collection/).
