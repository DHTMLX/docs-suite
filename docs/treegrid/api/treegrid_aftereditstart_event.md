---
sidebar_label: afterEditStart
title: afterEditStart
---          

@short: fires after editing of a cell has started

@signature: afterEditStart: (row: object, col: object, editorType: string) => void;
	
@params:
- row			object		an object with a row configuration
- column		object		an object with a column configuration
- editorType	string		the type of a cell editor:"input", "select", "datePicker", "checkbox", "combobox"

@example:
grid.events.on("AfterEditStart", function(row,col, editorType){
	// your logic here
});

@template:	api_event
@descr:

@changelog: added in v6.1
