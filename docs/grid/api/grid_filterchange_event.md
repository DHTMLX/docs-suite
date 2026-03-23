---
sidebar_label: filterChange
title: JavaScript Grid - filterChange Event 
description: You can explore the filterChange event of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# filterChange

@short: fires when the filter value is changed

### Usage

~~~jsx
filterChange: (
    value: string | string[] | Date | Date[],
    colId: string | number,
    content: "inputFilter" | "selectFilter" | "comboFilter" | "dateFilter"
) => void;
~~~

@params:
The callback of the event is called with the following parameters:

- `value: string | string[] | Date | Date[]` - the current value of the filter
- `colId: string | number` - the ID of the column where the filter changed
- `content: string` - the type of the applied filter ("inputFilter", "selectFilter", "comboFilter", or "dateFilter")

@example:
grid.events.on("filterChange", (value, colId, content) => {
    console.log("You've entered "+value+" into the "+colId+" column");
});

@descr:

:::info
The `filterChange` event invokes the [`beforeFilter`](grid/api/grid_beforefilter_event.md) event.
:::

@changelog: 
- The `value` parameter of the callback function can be a *Date* object or an array of *Date[]* objects since v9.3
- Added in v6.3
