---
sidebar_label: findAll()
title: JavaScript DataCollection - findAll Method 
description: You can explore the findAll method of DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# findAll()

@short: finds all the items that correspond to the specified rule

@signature: {'findAll(rule: object | (item: object, index?: number, array?: object[]) => any): object[];'}

@params:
- `rule: object | function` - the search criteria:
    - if set as an object, the parameter contains the following attributes:
        - `by: string | function` - the search criterion (either the key of the item attribute or a search function)
        - `match: string` - the value of the item attribute
    - if set as a function, the search will be applied by the rule specified in the function. The function takes three parameters:
	    - `item` - (required) the object of an item
	    - `index` - (optional) the index of an item
	    - `array` - (optional) an array with items

@returns:
An array of matching item objects.

@example:
//searching for items by the function
const items = component.data.findAll(function(items){
	if(items.text==="Manager"||items.text==="Marketer"){return true}
});

//searching for items by the attribute key
const items = component.data.findAll({by:"text",match:"Manager"});

@descr:

**Related sample**: [Data. Find all](https://snippet.dhtmlx.com/kvemrz93)
