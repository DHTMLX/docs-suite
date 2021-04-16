---
sidebar_label: beforeEditEnd
title: beforeEditEnd
---          

@short: fires before editing of a cell is completed

@signature: beforeEditEnd: (value: string, row: object, col: object) => boolean | void;
	
@params:
- value			string		the new value of a cell
- row			object		an object with a row configuration
- col		object		an object with a column configuration


@returns:
- result	boolean		false - to prevent closing of an editor, otherwise true


@example:
grid.events.on("BeforeEditEnd", function(value,row,column){
	// your logic here
    return false;
});


@template:	api_event
@descr:




@relatedsample:
https://snippet.dhtmlx.com/9zeyp4ds	Grid. Events	

@changelog: added in v6.1

