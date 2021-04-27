---
sidebar_label: beforeEditStart
title: beforeEditStart
---          

@short: fires before editing of a cell has started
todoanton => boolean | void
@signature: {'beforeEditStart: (row: IRow, col: ICol, editorType: EditorType) => boolean | void;'}
	
@params:
- row			object		an object with a row configuration
- col		object		an object with a column configuration
- editorType	string		the type of a cell editor:"input", "select", "datePicker", "checkbox", "combobox"


@returns:
- result		boolean		false - to block editing of a cell, otherwise true

@example:
grid.events.on("BeforeEditStart", function(row,col,editorType){
	// your logic here
    return false;
});


@template:	api_event
@descr:


	

@relatedsample:
https://snippet.dhtmlx.com/9zeyp4ds	Grid. Events	

@changelog: added in v6.1

