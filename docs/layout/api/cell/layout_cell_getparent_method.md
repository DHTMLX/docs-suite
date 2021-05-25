---
sidebar_label: getParent()
title: JavaScript Layout - getParent Method 
hide_title: true
description: You can explore the getParent method of Layout in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# getParent()

@short: returns the parent of a cell

@signature: {'getParent(): ILayout;'}

@returns:
The config object of the parent of a cell.

@example:
layout.getCell("1").getParent();

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
