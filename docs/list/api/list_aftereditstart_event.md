---
sidebar_label: afterEditStart
title: afterEditStart
---          

@short: fires after editing of an item has started
todoanton скорее всего string | number
@signature: {'afterEditStart: (id: string) => void;'}
	
@params:
- id		string|number		the id of an item

@example:
list.events.on("AfterEditStart", function(id){
	// your logic here
});


@template:	api_event
@descr:




	

@relatedsample:
https://snippet.dhtmlx.com/iwt1yd61	List. List Events	

@changelog: added in v6.1

