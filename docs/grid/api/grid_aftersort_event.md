---
sidebar_label: afterSort
title: afterSort
--- 

@short: fires after a column is sorted by clicking on its header

@signature: afterSort: (col: ICol, dir: Dirs) => void;

@params:
- col	object	an object with the configuration of a column
- dir   string  the sorting direction (desc, asc)

@example:
grid.events.on("afterSort", (col, dir) => {
	console.log(col, dir);
});

@descr:

@changelog: added in v7.1

[comment]: # (@relatedapi: grid/api/grid_beforesort_event.md)
