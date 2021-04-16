---
sidebar_label: copy
title: copy
---          

@short: adds a copy of an item and places it in the specified position

@params:
- id 			string				the ID of the item
- index 		number		  		the position of a copy
- target		TreeCollection	   	a data collection where the copy will be stored
- target_id		string				 (for menu options) the ID of a menuItem to which a copy of the menu option will be placed

@example:
toolbar.data.copy("print_btn",2)
// another toolbar
toolbar2.data.copy("save_btn",1,toolbar1.data);

@template: api_method
@descr:
