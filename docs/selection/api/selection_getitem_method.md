---
sidebar_label: getItem
title: getItem
---          

@short: returns the object of a selected item

@signature: {'getItem(): any;'}

@returns:
- item		object | array		the object of a selected item

@example:
var item = tree.selection.getItem();
// -> {value: "Books", id: "Books", opened: true, …}


@descr:
Starting from v7.0, the method can also return an array of selected items if the **multiselection** property of List or DataView is enabled.

{{note The method can be used in the [DataView](dataview/usage_selection.md), [List](list/usage_selection.md), [Tree](tree/usage_selection.md) components. }}
