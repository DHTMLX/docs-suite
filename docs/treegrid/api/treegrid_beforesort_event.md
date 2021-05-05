---
sidebar_label: beforeSort
title: beforeSort
---   

@short: fires before a column is sorted by clicking on its header

@signature: beforeSort: (col: ICol, dir: Dirs) => void | boolean;

@params:
- col	object	an object with the configuration of a column
- dir   string  the sorting direction (desc, asc)

@returns:
- param     boolean     false - to prevent a column from being sorted, otherwise true

@example:
treegrid.events.on("beforeSort", (col, dir) => {
	console.log("beforeSort", col, dir);
	// return false;
});



@descr:

@changelog: added in v7.1

@relatedapi: treegrid/api/treegrid_aftersort_event.md