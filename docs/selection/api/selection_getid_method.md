---
sidebar_label: getId
title: getId
---          

@short: returns the id of a selected item
	
@returns:
- id	string|string[]	the id of a selected item

@example:
var id = tree.selection.getId(); // -> "2"

@template:	api_method
@descr:
Starting from v7.0, the method can also return an array with ids of selected items if the **multiselection** property of List or DataView is enabled.
