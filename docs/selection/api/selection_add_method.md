---
sidebar_label: add
title: add
---          

@short: selects a specified item

@params:
- id		string,number		the id of an item

@example:
// diagram must be created with the "select:true" option
var tree = new dhx.Tree("tree_container", {
    selection: true
});
tree.data.parse(data);

tree.selection.add("2");

@template:	api_method
@descr:
Starting from v7.0, the method selects all unselected items when calling without parameters (in List/DataView):

~~~js
list.selection.add();
~~~
