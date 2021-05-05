---
sidebar_label: remove
title: remove
---          

@short: unselects a previously selected item

@signature: {'remove(id?: string | number): boolean;'}

@params:
- id		string,number		optional, the id of an item

@returns:
- result		boolean			<i>true</i> if an item is unselected, otherwise <i>false</i>

@example:
tree.selection.remove("1"); // -> true



@descr:
Starting from v7.0, the method unselects all previously selected items when calling without parameters:

~~~js
tree.selection.remove();
~~~

{{note The method can be used in the [DataView](dataview/usage_selection.md), [List](list/usage_selection.md), [Tree](tree/usage_selection.md) components. }}
