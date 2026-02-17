---
sidebar_label: beforeFilter
title: JavaScript Grid - beforeFilter Event 
description: You can explore the beforeFilter event of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeFilter

@short: fires before filtering is applied

:::note
The event can be canceled by returning `false`.
:::

### Usage

~~~jsx
beforeFilter: (
    value: string | string[] | Date | Date[],
    colId?: string | number
) => void | boolean;
~~~

@params:
The callback of the event is called with the following parameters:

- `value: string | string[] | Date | Date[]` - the value by which the data will be filtered
- `colId: string | number` - the ID of the column the filter is applied to

@returns:
Return `false` to prevent data filtering; otherwise, `true`.

@example:
grid.events.on("beforeFilter", (value, colId) => {
    console.log("The", colId, "column is filtered by", value, "value");
    // return false;
});

@descr:

**Related sample**: [Grid. Events](https://snippet.dhtmlx.com/9zeyp4ds)

@changelog: 
- The `value` parameter of the callback function can be a *Date* object or an array of *Date[]* objects since v9.3
- Added in v8.0
