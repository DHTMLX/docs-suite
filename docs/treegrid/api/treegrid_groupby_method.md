---
sidebar_label: groupBy
title: groupBy
---          

@short: groups grid content either by values of the specified column or by the result of calculation

@signature: groupBy(property: string | ((item: IDataItem) => string)): void;

@params:
- param    string | function   the id of the column or the rule of grouping     

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


@template: api_method
@descr:

The method takes one parameter, which can be:

- **id** - (*string*) the id of the column 
- a function with a rule of grouping data.The function returns the name of a group and takes one parameter:
    - **item** - a data item


You can set a template to the title of the group via the [](treegrid/api/treegrid_grouptitletemplate_config.md) configuration option.

[TreeGrid. Group data items by a property](https://snippet.dhtmlx.com/bue6zm6w)

@related: treegrid/usage.md#groupingdata
@relatedapi: treegrid/api/treegrid_grouptitletemplate_config.md
treegrid/api/treegrid_ungroup_method.md

@changelog:
added in v6.5

