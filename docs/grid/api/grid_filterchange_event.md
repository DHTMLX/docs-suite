---
sidebar_label: filterChange
title: JavaScript Grid - filterChange Event 
description: You can explore the filterChange event of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# filterChange

@short: fires on typing text in an input of a column's header

@signature: {'filterChange: (value: string, colId: Id, filterId: fixedRowContent) => void;'}

@params:
- `value: string` - an entered value
- `colId: string | number` - the id of a column
- `filterId: string` - the type of a filter: "inputFilter" | "selectFilter" | "comboFilter"

@example:
grid.events.on("filterChange", function(value,colId,filterId){
    console.log("You've entered "+value+" into the "+colId+" column");
});

@descr:

:::info
The **filterChange** event invokes the [beforeFilter](grid/api/grid_beforefilter_event.md) event
:::

@changelog: added in v6.3
