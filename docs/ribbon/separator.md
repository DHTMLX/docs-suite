---
sidebar_label: Separator
title: JavaScript Ribbon - Separator 
description: You can explore the Separator of Ribbon in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Separator

The Separator control displays a line between items or groups of items.

![Ribbon with vertical separators dividing grouped button sections in DHTMLX Suite](/img/ribbon/separator.png)

## Add Separator {#adding-separator}

Use the `add()` method of TreeCollection to add a separator between Ribbon controls:

~~~js
ribbon.data.add({
    type:"separator"
});
~~~

**Related sample**: [Ribbon. Separator](https://snippet.dhtmlx.com/wqhahyw8)

### Properties

Check the [list of properties](ribbon/api/api_separator_properties.md) that you can set in the configuration object of a Separator control.

## Show and hide Separator {#showinghiding-separator}

Use the methods of Ribbon to show and hide a Separator control by its ID:

~~~js
ribbon.showItem(id);
ribbon.hideItem(id);
~~~
