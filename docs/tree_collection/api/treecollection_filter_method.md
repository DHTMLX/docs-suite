---
sidebar_label: filter()
title: JavaScript TreeCollection - filter Method 
description: You can explore the filter method of TreeCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# filter()

@short: filters controls by some criteria

@signature: {'filter(rule?: function | object, config?: object): void;'}

@params:
- `rule: function | object` - the filtering criteria
	- If set as a *function*, the filtering will be applied by the rule specified in the function. The function takes an object of a data item as a parameter and returns an object with a filtering rule
	- If set as an *object*, the parameter has the following attributes:
		- `by: string | number` - required, the id of a column
		- `match: string` - required, a pattern to match
		- `compare: function` - optional, a function for extended filtering that takes three parameters:
			- `value` - the value to compare (e.g. a column in a row for Grid)
			- `match` - a pattern to match
			- `item` - a data item the values of which should be compared (e.g. a row)
- `config: object` - optional, defines the parameters of filtering. The parameter may contain the following properties:
	- `type: string` - optional, defines the area the filtering will be applied: "all", "level", "leafs"
	- `level: number` - optional, the level the filtering will be applied to
	- `add: boolean` - defines whether each next filtering will be applied to the already filtered data (<i>true</i>), or to the initial data (<i>false</i>, default)
	- `smartFilter: boolean` - defines whether a filtering rule will be applied after adding and editing items of the collection

@example:
// filtering data by a function
tree.data.filter(function (item) {
    return item.value.toLowerCase().indexOf("a") !== -1;
});

// filtering data by the column
treeGrid.data.filter({
    by: "name",
    match: "Angola"
});

@descr:

**Related sample**: [TreeGrid. Filter](https://snippet.dhtmlx.com/epsslwcd)

Calling the **filter()** method without parameters reverts the component to the initial state:

~~~js
tree.data.filter();    // show all
~~~