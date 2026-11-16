---
sidebar_label: Separator
title: JavaScript Toolbar - Separator 
description: You can explore the Separator of Toolbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Separator

The Separator control displays a line between items or groups of items: a horizontal line between menu options or a vertical line between toolbar controls.

![Toolbar with vertical separator lines dividing groups of controls in DHTMLX Suite](/img/toolbar/separator.png)

**Related sample**: [Toolbar. Separator](https://snippet.dhtmlx.com/sguwr3m9)

## Add Separator {#adding-separator}

Use the `add()` method of [TreeCollection](/tree_collection/) to add a separator between Toolbar controls:

~~~js
toolbar.data.add({
    type:"separator"
});
~~~

### Properties

Check the [list of properties](toolbar/api/api_separator_properties.md) that you can set in the configuration object of a Separator control.

## Show and hide Separator {#showinghiding-separator}

The [`show()`](toolbar/api/toolbar_show_method.md) and [`hide()`](toolbar/api/toolbar_hide_method.md) methods of Toolbar show and hide a Separator control by its ID:

~~~js
toolbar.show(id);
toolbar.hide(id);
~~~

**Related sample**: [Toolbar. Hide / show items](https://snippet.dhtmlx.com/cldp89u4)

Check the full list of available operations in the [Toolbar API](toolbar/api/api_overview.md) and the [TreeCollection API](/tree_collection/).
