---
sidebar_label: getItem()
title: JavaScript Selection - getItem Method 
description: You can explore the getItem method of Selection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# getItem()

@short: returns the object of a selected item

@signature: {'getItem(): object | array;'}

@returns:
Either an object of a selected item, or an array of selected items.

@example:
const item = component.selection.getItem();
// -> {…}

@descr:

:::note 
The method can be used in the [DataView](/dataview/usage_selection/), [List](/list/usage_selection/), [Tree](/tree/usage_selection/) components.
:::

Starting from v7.0, the method can also return an array of selected items if the **multiselection** property of List or DataView is enabled.
