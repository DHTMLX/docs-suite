---
sidebar_label: copy
title: copy
---          

@short: creates a copy of an item at the defined position
    
@params:
- id 			string,number		the id of an item to copy
- index			number				the index to create a copy at
* target		object				optional, the target data collection object

@example:
component.data.copy("4",5); // copies the item with id:4 to the position with index 5

@template: api_method
@descr:

@relatedsample: https://snippet.dhtmlx.com/9rws8r05	Data. Copy