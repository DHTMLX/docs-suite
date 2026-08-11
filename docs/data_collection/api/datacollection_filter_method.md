---
sidebar_label: filter()
title: JavaScript DataCollection - filter Method 
description: You can explore the filter method of DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# filter()

@short: filters data items in a component

@signature: {'filter(rule?: function | object, config?: object, silent?: boolean): string;'}

@params:

- `rule?: function | object` - optional, the filtering criteria
    - If set as a *function*, filtering will be applied by the rule specified in the function. It takes as a parameter a data item and returns *true/false*
    - If set as an *object*, the parameter has the following attributes:
        - `by?: string | number` - optional, the id of a data field 
        - `match?: string` - optional, a pattern to match
        - `compare?: function` - optional, a function for extended filtering that takes the following parameters:
            - `value` - the value to compare 
            - `match` - a pattern to match
            - `item` - a data item the values of which should be compared 
            - `multi` - the value of the `multi` attribute of the rule
        - `multi?: boolean` - optional, marks the field as holding several values at once (e.g. a multiselect column stores them as a comma-separated string). Passed to `compare` as its last argument
- `config?: object` - optional, an object with the following properties:
    - `id?: string` - optional, the id of the filter
    - `add?: boolean` - optional, defines whether each next filtering will be applied to the already filtered data (<i>true</i>), or to the initial data (<i>false</i>, default)
    - `permanent?: boolean` - optional, *true* to make the current filter permanent. It is applied even if the next filtering doesn't have the `add:true` property in its configuration object. It is not dropped by a plain `resetFilter()` call and is reapplied to the data after `parse()` or `load()`; pass `permanent:true` to [resetFilter()](data_collection/api/datacollection_resetfilter_method.md) to remove it as well
- `silent?: boolean` - optional, if set to <i>true</i>, the method will be called without triggering events, <i>false</i> by default

:::info
Note that after calling the method with the `silent:true` parameter, you may need to repaint the component with the `paint()` method.
:::
    
@returns:
- `id: string` - the id of the filter

@example:
// filtering data by a function
grid.data.filter(function (item) {
    return item.a > 0 && item.b !== "Apple";
});

// or
grid.data.filter(function (item) {
    return item.a > 0 && item.b !== "Apple";
}, {
    add: true,
});

// filtering data by the column
grid.data.filter({
    by: "a",
    match: "Orange",
    compare: function (value, match, item) {
        if (item.a !== "Some") {
            return val === "New";
        }
    return false;
    }
}, {
    add: true,
});

@descr:

Unless `config.add` is set, the method replaces the currently applied filters. Permanent filters are the exception: they always survive and are reapplied first, and the new rule narrows their result further, so the two act as an AND.

:::note
Calling the method without a rule drops all non-permanent filters and restores the unfiltered order.
:::

**Related sample**: [Data. Filter](https://snippet.dhtmlx.com/csiwq3kj)


