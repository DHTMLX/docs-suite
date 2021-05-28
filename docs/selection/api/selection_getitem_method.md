---
sidebar_label: getItem()
title: JavaScript Selection - getItem Method 
description: You can explore the getItem method of Selection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# getItem()

@short: returns the object of a selected item

@signature: {'getItem(): any;'}

@returns:
The object of a selected item.

@example:
var item = tree.selection.getItem();
// -> {value: "Books", id: "Books", opened: true, …}

@descr:

{{note The method can be used in the [DataView](dataview/usage_selection.md), [List](list/usage_selection.md), [Tree](tree/usage_selection.md) components. }}

Starting from v7.0, the method can also return an array of selected items if the **multiselection** property of List or DataView is enabled.
