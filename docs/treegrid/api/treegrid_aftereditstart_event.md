---
sidebar_label: afterEditStart
title: afterEditStart
---          

@short: fires after editing of a cell has started

@signature: {'afterEditStart: (row: IRow, col: ICol, editorType: EditorType) => void;'}

@params:
`row: object` - an object with a row configuration
`col: object` - an object with a column configuration
`editorType: string` - the type of a cell editor:"input", "select", "datePicker", "checkbox", "combobox"

@example:
grid.events.on("AfterEditStart", function(row,col, editorType){
	// your logic here
});

@descr:

@changelog: added in v6.1
