---
sidebar_label: add
title: add
---          

@short: adds an item to a component

@params:
- config 		object    		the configuration of the added item
- index 		number	    	defines the position of the item in the component
- parent 		string		    the ID of the future parent item

@example:
myToolbar.data.add({
    type:"button",
    icon:"dxi-plus",
    value:"New"
},1);

@template: api_method
@descr:
