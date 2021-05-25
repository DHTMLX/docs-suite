---
sidebar_label: beforeSort
title: beforJavaScript Grid - beforeSort Event eSort
hide_title: true
description: You can explore the beforeSort event of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# beforeSort

@short: fires before a column is sorted by clicking on its header

@signature: beforeSort: (col: ICol, dir: Dirs) => void | boolean;

@params:
- `col: object` - an object with the configuration of a column
- `dir: string` - the sorting direction (desc, asc)

@returns:
Return `false` to prevent a column from being sorted; otherwise, `true`.

@example:
grid.events.on("beforeSort", (col, dir) => {
	console.log("beforeSort", col, dir);
	// return false;
});

@descr:

@changelog: added in v7.1

[comment]: # (@relatedapi: grid/api/grid_aftersort_event.md)
