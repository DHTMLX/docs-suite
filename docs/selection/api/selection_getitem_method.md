---
sidebar_label: getItem
title: getItem
---          

@short: returns the object of a selected item

@signature: todo, not found [here](https://cdn.dhtmlx.com/suite/pro/edge/types/ts-selection/sources/types.d.ts)

@returns:
- item		object|array		the object of a selected item

@example:
var item = tree.selection.getItem();
// -> {value: "Books", id: "Books", opened: true, …}

@template: api_method
@descr:
Starting from v7.0, the method can also return an array of selected items if the **multiselection** property of List or DataView is enabled.

{{note The method can be applied to the DataView, List, Tree components. }}