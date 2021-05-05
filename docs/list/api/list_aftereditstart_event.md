---
sidebar_label: afterEditStart
title: afterEditStart
---          

@short: fires after editing of an item has started

@signature: {'afterEditStart: (id: string | number) => void;'}
	
@params:
- id		string|number		the id of an item

@example:
list.events.on("AfterEditStart", function(id){
	// your logic here
});



@descr:




	

**Related sample**:
- [List. List Events	](https://snippet.dhtmlx.com/iwt1yd61)

@changelog: added in v6.1

