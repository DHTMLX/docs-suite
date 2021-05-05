---
sidebar_label: beforeEditEnd
title: beforeEditEnd
---          

@short: fires before editing of a cell is completed

@signature: {'beforeEditEnd: (value: string | number, row: IRow, col: ICol) => boolean | void;'}
	
@params:
- value			string|number		the new value of a cell
- row			object		an object with a row configuration
- col		object		an object with a column configuration


@returns:
- result	boolean		false - to prevent closing of an editor, otherwise true


@example:
grid.events.on("BeforeEditEnd", function(value,row,column){
	// your logic here
    return false;
});



@descr:




**Related sample**:
- [Grid. Events	](https://snippet.dhtmlx.com/9zeyp4ds)

@changelog: added in v6.1

