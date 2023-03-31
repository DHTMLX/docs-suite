---
sidebar_label: find()
title: JavaScript DataCollection - find Method 
description: You can explore the find method of DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# find()

@short: finds the item that corresponds to the specified rule

@signature: {'find(rule: object | (item: object, index?: number, array?: object[]) => any): object;'}

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
An object of the matching item.

@example:
//searching for an item by the function
const item = component.data.find(function(item){
	if(item.text==="Manager"||item.text==="Marketer"){return true}
});

//searching for an item by the attribute key
const item = component.data.find({by:"text",match:"Manager"});

@descr:

**Related sample**: [Data. Find](https://snippet.dhtmlx.com/fpxhdc46)


