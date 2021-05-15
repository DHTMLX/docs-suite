---
sidebar_label: add
title: add
---          

@short: selects a specified item

@signature: {'add(id: string | number): void;'}

@params:
- id		string | number		the id of an item

@example:
var id = tree.selection.getId(); // -> "2"
tree.selection.add("2");

@descr:

{{note The method can be used in the [DataView](dataview/usage_selection.md), [List](list/usage_selection.md), [Tree](tree/usage_selection.md) components. }}

Starting from v7.0, the method selects all unselected items when calling without parameters (in List/DataView):

~~~js
list.selection.add();
~~~
