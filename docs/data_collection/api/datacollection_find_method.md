---
sidebar_label: find
title: find
---          

@short: finds the item that corresponds to the specified rule

@signature: {'find(rule: IFilterMode | DataCallback<T>): T;'}

@params:
- rule	object,function	the search criteria

@returns:

- item		object		the object of the matching item

@example:
//searching for an item by the function
var item = component.data.find(function(item){
	if(item.text==="Manager"||item.text==="Marketer"){return true}
});

//searching for an item by the attribute key
var item = component.data.find({by:"text",match:"Manager"});


@descr:

**Related sample**: [Data. Find](https://snippet.dhtmlx.com/fpxhdc46)

The **rule** parameter:

- if set as `DataCallback(item: T, index?: number, array?: T[])`, the searching will be applied by the rule specified in the function
- if set as an `IFilterMode` object, the parameter contains the following attributes:
  - **by** - (*string,function*) the search criterion (either the key of the item attribute or a search function)
  - **match** - (*string*) the value of the item attribute
