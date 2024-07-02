---
sidebar_label: beforeSort
title: JavaScript TreeGrid - beforeSort Event 
description: You can explore the beforeSort event of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeSort

@short: fires before a column is sorted by clicking on its header

@signature: beforeSort: (column: object, dir: string) => void | boolean;

@params:
The callback of the event is called with the following parameters:

- `column: object` - an object with the configuration of a column
- `dir: string` - the sorting direction ("desc", "asc")

@returns:
Return `false` to prevent a column from being sorted; otherwise, `true`.

@example:
treegrid.events.on("beforeSort", (column, dir) => {
    console.log("beforeSort", column, dir);
    // return false;
});

@descr:

@changelog: added in v7.1

[comment]: # (@relatedapi: treegrid/api/treegrid_aftersort_event.md)
