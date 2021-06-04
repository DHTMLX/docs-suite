---
sidebar_label: afterEditEnd
title: JavaScript TreeGrid - afterEditEnd Event 
description: You can explore the afterEditEnd event of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# afterEditEnd

@short: fires after editing of a cell is ended

@signature: {'afterEditEnd: (value: string | number | boolean, row: IRow, col: ICol) => void;'}

@params:
- `value: string | number | boolean` - the new value of a cell
- `row: object` - an object with a row configuration
- `col: object` - an object with a column configuration

@example:
grid.events.on("AfterEditEnd", function(value,row,column){
	// your logic here
});

@descr:

@changelog: added in v6.1
