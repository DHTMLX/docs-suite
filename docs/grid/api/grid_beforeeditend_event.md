---
sidebar_label: beforeEditEnd
title: JavaScript Grid - beforeEditEnd Event 
description: You can explore the beforeEditEnd event of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeEditEnd

@short: fires before editing of a cell is completed

@signature: {'beforeEditEnd: (value: string | number | boolean, row: IRow, col: ICol) => boolean | void;'}

@params:
- `value: string | number | boolean` - the new value of a cell
- `row: object` - an object with a row configuration
- `col: object` - an object with a column configuration

@returns:
Return `false` to prevent closing of an editor; otherwise, `true`.

@example:
grid.events.on("beforeEditEnd", function(value,row,column){
	// your logic here
    return false;
});

@descr:


**Related sample**: [Grid. Events	](https://snippet.dhtmlx.com/9zeyp4ds)

@changelog: added in v6.1
