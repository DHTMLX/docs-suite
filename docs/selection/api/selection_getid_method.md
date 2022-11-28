---
sidebar_label: getId()
title: JavaScript Selection - getId Method 
description: You can explore the getId method of Selection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# getId()

@short: returns the id of a selected item

@signature: {'getId(): string | string[];'}

@returns:
The id of a selected item.

@example:
const id = component.selection.getId(); // -> "2"

@descr:

{{note The method can be used in the [DataView](dataview/usage_selection.md), [List](list/usage_selection.md), [Tree](tree/usage_selection.md) components. }}

Starting from v7.0, the method can also return an array with ids of selected items if the **multiselection** property of List or DataView is enabled.
