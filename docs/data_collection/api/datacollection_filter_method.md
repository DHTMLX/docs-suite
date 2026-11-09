---
sidebar_label: filter()
title: JavaScript DataCollection - filter Method 
description: You can explore the filter method of DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# filter()

@short: filters data items in a component

#### Usage

~~~ts
type Id = string | number;
interface IFilterMode {
    by?: Id;
    match?: string | number | boolean | Array<string | number | boolean>;
    compare?: (value: any, match: any, item: IDataItem, multi?: boolean) => boolean;
    multi?: boolean;
}
type IFilterCallback = (item: IDataItem) => boolean;
interface IFilterConfig {
    id?: string;
    add?: boolean;
    permanent?: boolean;
}

filter(rule?: IFilterMode | IFilterCallback, config?: IFilterConfig, silent?: boolean): string;
~~~

@params:
- `rule?: IFilterMode | IFilterCallback` - optional, the filtering criteria
    - if set as a *function*, filtering is applied by the rule specified in the function. The function is called with a data item and returns *true* to keep the item or *false* to filter it out
    - if set as an *object*, the parameter has the following attributes:
        - `by?: Id` - optional, the id of a data field
        - `match?: string | number | boolean | array` - optional, a pattern to match
        - `compare?: function` - optional, a function for extended filtering. It is called with the following parameters:
            - `value: any` - the value to compare
            - `match: any` - a pattern to match
            - `item: IDataItem` - a data item the values of which should be compared
            - `multi?: boolean` - optional, the value of the `multi` attribute of the rule
        - `multi?: boolean` - optional, marks the field as holding several values at once (e.g. a multiselect column stores them as a comma-separated string). Passed to `compare` as its last argument
- `config?: IFilterConfig` - optional, an object with the following properties:
    - `id?: string` - optional, the id of the filter
    - `add?: boolean` - optional, defines whether each next filtering will be applied to the already filtered data (*true*), or to the initial data (*false*, default)
    - `permanent?: boolean` - optional, *true* to make the current filter permanent. It is applied even if the next filtering doesn't have the `add:true` property in its configuration object. It is not dropped by a plain `resetFilter()` call and is reapplied to the data after `parse()` or `load()`; pass `permanent:true` to [`resetFilter()`](data_collection/api/datacollection_resetfilter_method.md) to remove it as well
- `silent?: boolean` - optional, if set to *true*, the method will be called without triggering events, *false* by default

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

**Related sample**: [Data. Filter](https://snippet.dhtmlx.com/csiwq3kj)

### Combining filters

Unless `config.add` is set, the method replaces the currently applied filters; calling it without a rule at all drops all non-permanent filters and restores the unfiltered order. Permanent filters are the exception: they always survive and are reapplied first. The new rule then narrows their result further, so an item remains in the result only if it matches both the permanent filter and the new rule.

### Filtering grouped data

When data is [grouped](data_collection/api/datacollection_group_method.md), DataCollection matches the rule against the data items only. It never checks group headers and summary rows against the rule, so a filtering function never receives a `$group` or a `$groupSummary` item. A group stays as long as any of its items match the rule, and DataCollection recalculates the [counters and aggregated values](data_collection/api/datacollection_group_method.md#group-counters-and-aggregates) of the groups that remain.


