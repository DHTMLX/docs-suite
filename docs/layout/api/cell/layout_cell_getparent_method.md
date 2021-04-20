---
sidebar_label: getParent
title: getParent
---          

@short: returns the parent of a cell

```todoapi ```

@returns:
- config	object		the config object of the parent of a cell


@example:
layout.getCell("1").getParent();


@template: api_method
@descr:
An example of a returned config object:

~~~js
{
	id: "u1558363920909",
    full: true,
    header: "Main Block Header",
    cols:[
    	0:{header: "Sub Block Header row",id: "1"},
        1:{ 
        	cols:[
        		0: {header: "Left cols", full: true}
				1: {header: "Center cols", cols: Array(3), parent: Layout, full: true}
				2: {header: "Right", full: true}		        
        	], header: "Sub Block Header row"        
        }
    ]
}
~~~




@changelog:


