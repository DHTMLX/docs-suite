---
sidebar_label: beforeEditEnd
title: JavaScript TreeGrid - beforeEditEnd Event 
hide_title: true
description: You can explore the beforeEditEnd event of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# beforeEditEnd

@short: fires before editing of a cell is ended

@signature: {'beforeEditEnd: (value: string | number, row: IRow, col: ICol) => boolean | void;'}

@params:
- `value: string | number` - the new value of a cell
- `row: object` - an object with a row configuration
- `col: object` - an object with a column configuration

@returns:
Return `false` to prevent closing of an editor; otherwise, `true`.

@example:
grid.events.on("BeforeEditEnd", function(value,row,column){
	// your logic here
    return false;
});

@descr:

@changelog: added in v6.1
