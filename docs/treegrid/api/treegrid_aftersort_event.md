---
sidebar_label: afterSort
title: JavaScript TreeGrid - afterSort Event 
description: You can explore the afterSort event of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# afterSort

@short: fires after a column is sorted by clicking on its header

@signature: afterSort: (col: ICol, dir: Dirs) => void;

@params:
- `col: object` - an object with the configuration of a column
- `dir: string` - the sorting direction (desc, asc)

@example:
treegrid.events.on("afterSort", (col, dir) => {
	console.log(col, dir);
});

@descr:

[comment]: # (@relatedapi: treegrid/api/treegrid_beforesort_event.md)

[comment]: # (@changelog: added in v7.1)
