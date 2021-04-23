---
sidebar_label: add
title: add
---          

@short: selects a specified item

@params:
- id		string,number		the id of an item

@example:
var id = tree.selection.getId(); // -> "2"
tree.selection.add("2");

@template:	api_method
@descr:
Starting from v7.0, the method selects all unselected items when calling without parameters (in List/DataView):

~~~js
list.selection.add();
~~~

{{note The method can be applied to the DataView, List, Tree components. }}