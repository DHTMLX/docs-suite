---
sidebar_label: afterSort
title: JavaScript Grid - afterSort Event 
description: You can explore the afterSort event of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterSort

@short: fires after a column is sorted by clicking on its header

@signature: {'afterSort: (column: object, dir: string) => void;'}

@params:
The callback of the event is called with the following parameters:

- `column: object` - an object with the configuration of a column
- `dir: string` - the sorting direction ("desc", "asc")

@example:
grid.events.on("afterSort", (column, dir) => {
    // your logic here
});

@descr:

@changelog: added in v7.1

[comment]: # (@relatedapi: grid/api/grid_beforesort_event.md)
