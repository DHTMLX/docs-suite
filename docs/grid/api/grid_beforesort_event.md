---
sidebar_label: beforeSort
title: beforeSort
---  

@short: fires before a column is sorted by clicking on its header

@params:
- col	object	an object with the configuration of a column
- dir   string  the sorting direction (desc, asc)

@returns:
- param     boolean     false - to prevent a column from being sorted, otherwise true

@example:
grid.events.on("beforeSort", (col, dir) => {
	console.log("beforeSort", col, dir);
	// return false;
});


@template: api_event
@descr:

@changelog: added in v7.1

@relatedapi: grid/api/grid_aftersort_event.md