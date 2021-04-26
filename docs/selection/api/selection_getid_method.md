---
sidebar_label: getId
title: getId
---          

@short: returns the id of a selected item

@signature: todo, not found [here](https://cdn.dhtmlx.com/suite/pro/edge/types/ts-selection/sources/types.d.ts)
	
@returns:
- id	string|string[]	the id of a selected item

@example:
var id = tree.selection.getId(); // -> "2"

@template:	api_method
@descr:
Starting from v7.0, the method can also return an array with ids of selected items if the **multiselection** property of List or DataView is enabled.

{{note The method can be applied to the DataView, List, Tree components. }}