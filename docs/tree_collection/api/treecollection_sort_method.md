---
sidebar_label: sort()
title: JavaScript TreeCollection - sort Method 
description: You can explore the sort method of TreeCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# sort()

@short: sorts controls according to some criteria

@signature: {'sort(rule?: object): void;'}

@params:
- `rule: object` - an object with parameters for sorting. The object has the following attributes:
	- `by: string | number` - the id of a data field (a column of TreeGrid)
	- `dir: string` - the direction of sorting "asc" or "desc"
	- `as: function` - a function that specifies the type to sort data as
	- `rule: function` - optional, a sorting rule; the function must have two parameters and return a number (-1,0,1)

@example:
treeGrid.data.sort({
	by: "price",
	dir: "asc",
	as: function (value) { return value ? value : "" }
});

@descr:

{{note Calling the method without parameters will discard all applied sorting rules.}}

### Custom sorting

To set a custom function for sorting you need to specify the **rule** attribute in a passed object. For example:

~~~js
treegrid.data.sort({
    rule: (a,b) => (a.type < b.type) ? -1 : ( (a.type > b.type) ? 1 : 0 )
});
~~~
