---
sidebar_label: beforeEditEnd
title: JavaScript TreeGrid - beforeEditEnd Event 
description: You can explore the beforeEditEnd event of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeEditEnd

@short: fires before editing of a cell is ended

@signature: {'beforeEditEnd: (value: string | number | boolean, row: object, col: object) => boolean | void;'}

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

@changelog: added in v6.1
