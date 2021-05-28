---
sidebar_label: groupBy()
title: JavaScript TreeGrid - groupBy Method 
description: You can explore the groupBy method of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# groupBy()

@short: groups grid content either by values of the specified column or by the result of calculation

@signature: {'groupBy(property: string | ((item: IDataItem) => string)): void;'}

@params:
`property: string | function` - the id of the column or the rule of grouping

@example:
//Grouping by values of the specified column
treegrid.groupBy("age");

//Grouping by the result of calculation
treegrid.groupBy(function (item) {
	if (!item.area || item.area < 0) {
		return "N.A.";
	}
	if (item.area < 25000) {
		return "Small";
	} else if (item.area < 60000) {
		return "Medium";
	}
	return "Big";
});

@descr:

**Related sample**: [TreeGrid. Group data items by a property](https://snippet.dhtmlx.com/bue6zm6w)

The method takes one parameter, which can be:

- **id** - (*string*) the id of the column 
- a function with a rule of grouping data.The function returns the name of a group and takes one parameter:
    - **item** - a data item

You can set a template to the title of the group via the [](treegrid/api/treegrid_grouptitletemplate_config.md) configuration option.

@changelog:
added in v6.5

[comment]: # (@related: treegrid/usage.md#grouping-data)

[comment]: # (@relatedapi: treegrid/api/treegrid_grouptitletemplate_config.md treegrid/api/treegrid_ungroup_method.md)
