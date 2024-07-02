---
sidebar_label: beforeFilter
title: JavaScript Grid - beforeFilter Event eSort
description: You can explore the beforeFilter event of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeFilter

@short: fires before the <b>filterChange</b> event is called

@signature: {'beforeFilter:({ value: string, colId?: string | number }) => void | boolean;'}

@params:
The callback of the event is called with the following parameters:
- `value: string` - required, the entered value by which data must be filtered
- `colId: string | number` - optional, the ID of a column

@returns:
Return `false` to block the filtering process; otherwise, `true`.

@example:
grid.events.on("beforeFilter", (value, colId) => {
    console.log("The", colId, "column is filtered by", value, "value");
    // return false;
});

@descr:

**Related sample**: [Grid. Events](https://snippet.dhtmlx.com/9zeyp4ds)

@changelog: added in v8.0
