---
sidebar_label: getId
title: getId
---          

@short: returns the id of a selected item

@signature: {'getId(): string | string[];'}

@returns:
- id	string | string[]	the id of a selected item

@example:
var id = tree.selection.getId(); // -> "2"


@descr:

{{note The method can be used in the [DataView](dataview/usage_selection.md), [List](list/usage_selection.md), [Tree](tree/usage_selection.md) components. }}

Starting from v7.0, the method can also return an array with ids of selected items if the **multiselection** property of List or DataView is enabled.