---
sidebar_label: afterEditEnd
title: afterEditEnd
---          

@short: fires after editing of a cell is ended

@signature: {'afterEditEnd: (value: string, row: IRow, col: ICol) => void;'}

@params:
- `value: string` - the new value of a cell
- `row: object` - an object with a row configuration
- `col: object` - an object with a column configuration

@example:
grid.events.on("AfterEditEnd", function(value,row,column){
	// your logic here
});

@descr:

@changelog: added in v6.1
