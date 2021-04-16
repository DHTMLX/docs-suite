---
sidebar_label: beforeEditStart
title: beforeEditStart
---          

@short: fires before editing of a cell has started

@signature: beforeEditStart: (row: object, col: object, editorType: string) => boolean | void;
	
@params:
- row			object		an object with a row configuration
- column		object		an object with a column configuration
- editorType	string		the type of a cell editor:"input", "select",  "datePicker", "checkbox", "combobox"

@returns:
- result		boolean		false - to block editing of a cell, otherwise true

@example:
grid.events.on("BeforeEditStart", function(row,col,editorType){
	// your logic here
    return false;
});

@template:	api_event
@descr:

@changelog: added in v6.1