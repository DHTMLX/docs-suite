---
sidebar_label: filter()
title: JavaScript DataCollection - filter Method 
description: You can explore the filter method of DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# filter()

@short: filters data items in a component

@signature: {'filter(rule?: function | object, config?: object): string;'}

@params:
- `rule: function | object` - the filtering criteria
    - If set as a *function*, filtering will be applied by the rule specified in the function. The function takes an object of a data item as a parameter and returns *true/false*
    - If set as an *object*, the parameter has the following attributes:
        - `by: string | number` - mandatory, the id of a data field (the column of Grid)
        - `match: string` - mandatory, a pattern to match
        - `compare: function` - optional, a function for extended filtering that takes three parameters:
            - `value` - the value to compare (e.g. a column in a row for Grid)
            - `match` - a pattern to match
            - `item` - a data item the values of which should be compared (e.g. a row)
- `config: object` - optional, defines the parameters of filtering. It may contain the following properties: 
    - `id: string` - optional, the id of the filter
    - `add: boolean` - optional, defines whether each next filtering will be applied to the already filtered data (*true*), or to the initial data (*false*, default)
    - `permanent: boolean` - optional, *true* to make the current filter permanent. It will be applied even if the next filtering doesn't have the `add:true` property in its configuration object. Such a filter can be removed just with the [resetFilter()](data_collection/api/datacollection_resetfilter_method.md) method
    
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

**Related sample**: [Data. Filter](https://snippet.dhtmlx.com/csiwq3kj)


