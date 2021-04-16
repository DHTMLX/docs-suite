---
sidebar_label: move
title: move
---          

@short: moves an item to the defined position

@params:
- id 			string,string[]		the ids of items to move
- index			number				the index to move items to
- target		object				optional, the target data collection object
- targetId		string				optional, the id of the parent item where the moved items will be placed

@returns:
- id    string|string[]   the item's id or an array with ids of items

@example:
component.data.move("4",5); // moves the item with id:4 to the position with index 5

@template: api_method
@descr:

@relatedsample: https://snippet.dhtmlx.com/fi66bi8h	Data. Move