---
sidebar_label: getItem
title: getItem
---          

@short: returns the object of an item by its id

@signature: {'getItem(id: Id): T;'}
	
@params:

- id		string,number		the id of a selected item

@returns:

- item    	object      	the object of an item

@example:

var item = component.data.getItem(123);



@descr:

**Related sample**: [Data. Get Item](https://snippet.dhtmlx.com/wz2sscrm)

You can access the original properties of an item like this:

~~~js
var item = component.data.getItem(123);
var text = item.text;
~~~
