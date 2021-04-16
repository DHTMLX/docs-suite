---
sidebar_label: findAll
title: findAll
---          

@short: finds all the items that correspond to the specified parameters

@params:
- by			string,function			 the search criterion (either the key of the item attribute or a filtering function)
- match 		string					 the value of the item attribute

@returns:

- items		array		an array of matching item objects

@example:
//searching for items by the attribute key
var items = component.data.findAll({by:"text",match:"Manager"});

//searching for items by the function
var items = component.data.findAll(function(items){
	if(items.text==="Manager"||items.text==="Marketer"){return true}
});

@template: api_method
@descr:

@relatedsample: https://snippet.dhtmlx.com/kvemrz93	Data. Find All