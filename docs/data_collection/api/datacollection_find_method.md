---
sidebar_label: find
title: find
---          

@short: finds the item that corresponds to the specified parameters

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

@relatedsample: https://snippet.dhtmlx.com/fpxhdc46	Data. Find

