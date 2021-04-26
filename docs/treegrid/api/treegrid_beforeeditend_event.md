---
sidebar_label: beforeEditEnd
title: beforeEditEnd
---          

@short: fires before editing of a cell is ended
todoanton any приходит из d.ts
@signature: {'beforeEditEnd: (value: any, row: IRow, col: ICol) => boolean | void;'}
	
@params:
- value			string		the new value of a cell
- row			object		an object with a row configuration
- column		object		an object with a column configuration

@returns:
- result	boolean		false - to prevent closing of an editor, otherwise true

@example:
grid.events.on("BeforeEditEnd", function(value,row,column){
	// your logic here
    return false;
});

@template:	api_event
@descr:

@changelog: added in v6.1

