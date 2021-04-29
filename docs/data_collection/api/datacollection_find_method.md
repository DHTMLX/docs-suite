---
sidebar_label: find
title: find
---          

@short: finds the item that corresponds to the specified parameters
TODO: api change (изменить params - так как ожидается объект с набором текущих параметров, а не эти параметры)
@signature: {'find(rule: IFilterMode): T;'}

@params:
- by 				string,function			the search criterion (either the key of the item attribute or a filtering function)
- match 			string					the value of the item attribute

@returns:

- item		object		the object of the matching item

@example:
//searching for an item by the attribute key
var item = component.data.find({by:"text",match:"Manager"});

//searching for an item by the function
var item = component.data.find(function(item){
	if(item.text==="Manager"||item.text==="Marketer"){return true}
});

@template: api_method
@descr:

**Related sample**: [Data. Find](https://snippet.dhtmlx.com/fpxhdc46)

