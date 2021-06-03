---
sidebar_label: findAll()
title: JavaScript DataCollection - findAll Method 
description: You can explore the findAll method of DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# findAll()

@short: finds all the items that correspond to the specified rule

@signature: {'findAll(rule: IFilterMode | DataCallback<T>): T[];'}

@params:
`rule: object | function` - the search criteria

@returns:
An array of matching item objects.

@example:
//searching for items by the function
var items = component.data.findAll(function(items){
	if(items.text==="Manager"||items.text==="Marketer"){return true}
});

//searching for items by the attribute key
var items = component.data.findAll({by:"text",match:"Manager"});

@descr:

**Related sample**: [Data. Find All](https://snippet.dhtmlx.com/kvemrz93)

The **rule** parameter:

- if set as `DataCallback(item: T, index?: number, array?: T[])`, the search will be applied by the rule specified in the function
- if set as an `IFilterMode` object, the parameter contains the following attributes:
  - **by** - (*string,function*) the search criterion (either the key of the item attribute or a search function)
  - **match** - (*string*) the value of the item attribute
