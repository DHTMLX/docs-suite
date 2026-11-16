---
sidebar_label: Spacer
title: JavaScript Toolbar - Spacer 
description: You can explore the Spacer of Toolbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Spacer

The Spacer control adds empty space on the toolbar and helps you align controls.

![Toolbar using a spacer to align controls to the left and right sides in DHTMLX Suite](/img/toolbar/spacer.png)

**Related sample**: [Toolbar. Spacer](https://snippet.dhtmlx.com/0wt6z7sc)

## Add Spacer {#adding-spacer}

Use the `add()` method of [TreeCollection](/tree_collection/) to add a Spacer control to a toolbar:

~~~js
toolbar.data.add({
    type:"spacer"
});
~~~

### Properties

Check the [list of properties](toolbar/api/api_spacer_properties.md) that you can set in the configuration object of a Spacer control.

## Show and hide Spacer {#showinghiding-spacer}

The [`show()`](toolbar/api/toolbar_show_method.md) and [`hide()`](toolbar/api/toolbar_hide_method.md) methods of Toolbar show and hide a Spacer control by its ID:

~~~js
toolbar.show(id);
toolbar.hide(id);
~~~

**Related sample**: [Toolbar. Hide / show items](https://snippet.dhtmlx.com/cldp89u4)

Check the full list of available operations in the [Toolbar API](toolbar/api/api_overview.md) and the [TreeCollection API](/tree_collection/).
