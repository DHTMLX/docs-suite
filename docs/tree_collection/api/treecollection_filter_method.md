---
sidebar_label: filter()
title: JavaScript TreeCollection - filter Method 
description: Learn how the filter method of TreeCollection narrows a tree collection down by a rule, several rules or a function, on all levels, on one level or for leaf items only. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
---

# filter()

@short: filters the items of the collection by the specified criteria

#### Usage

~~~ts
type Id = string | number;
interface IFilterMode {
    by?: Id;
    match?: string | number | boolean | Array<string | number | boolean>;
    compare?: (value: any, match: any, item: IDataItem, multi?: boolean) => boolean;
    multi?: boolean;
}
interface IFilterComplexMode {
    [key: string]: IFilterMode;
}
type IFilterCallback = (item: IDataItem) => boolean;
interface ITreeFilterConfig {
    id?: string;
    add?: boolean;
    permanent?: boolean;
    type?: "all" | "level" | "leafs";
    level?: number;
}

filter(rule?: IFilterMode | IFilterComplexMode | IFilterCallback, config?: ITreeFilterConfig, silent?: boolean): string;
~~~

@params:
- `rule?: IFilterMode | IFilterComplexMode | IFilterCallback` - optional, the filtering criteria
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
    - if set as an *object with several rules* (`IFilterComplexMode`), the parameter is an object where each key is an arbitrary name of a rule and its value is a rule object with the attributes described above. An item is kept only if it matches all the rules
- `config?: ITreeFilterConfig` - optional, an object with the following properties:
    - `type?: "all" | "level" | "leafs"` - optional, defines the area the filtering will be applied to: all the items, the items of the specified level, or the items without children
    - `level?: number` - optional, the level the filtering will be applied to, if `type` is set to *"level"*
    - `id?: string` - optional, the id of the filter
    - `add?: boolean` - optional, defines whether each next filtering will be applied to the already filtered data (*true*), or to the initial data (*false*, default)
    - `permanent?: boolean` - optional, *true* to make the current filter permanent. It is applied even if the next filtering doesn't have the `add:true` property in its configuration object. It is not dropped by a plain `resetFilter()` call and is reapplied to the data after `parse()` or `load()`; pass `permanent:true` to [`resetFilter()`](tree_collection/api/treecollection_resetfilter_method.md) to remove it as well
- `silent?: boolean` - optional, if set to *true*, the method will be called without triggering events, *false* by default

:::info
Note that after calling the method with the `silent:true` parameter, you may need to repaint the component that uses the collection with its `paint()` method.
:::

@returns:
- `id: string` - the id of the filter

#### Example:

~~~jsx
const grid = new dhx.Grid("grid_container", {
    type: "tree",
    columns: [
        // columns config
    ],
    data: dataset,
});

// filtering data by a function
grid.data.filter((item) => {
    return item.value.toLowerCase().indexOf("a") !== -1;
});
~~~

~~~jsx
const grid = new dhx.Grid("grid_container", {
    type: "tree",
    columns: [
        // columns config
    ],
    data: dataset,
});

// filtering data by the column 
grid.data.filter({
    by: "name",
    match: "Angola"
});
~~~

~~~jsx
const grid = new dhx.Grid("grid_container", {
    type: "tree",
    columns: [
        // columns config
    ],
    data: dataset,
});

// filtering data by several rules at once
grid.data.filter({
    name: { by: "name", match: "an" },
    population: { by: "population", match: "000" }
});
~~~

@descr:

Unless `config.add` is set, the method replaces the currently applied filters; calling it without a rule at all drops all non-permanent filters and restores the unfiltered order. Permanent filters are the exception: they always survive and are reapplied first. The new rule then narrows their result further, so an item remains in the result only if it matches both the permanent filter and the new rule.

**Related sample**: [Grid (TreeGrid). Filter](https://snippet.dhtmlx.com/epsslwcd)

**Related API**:
- [`resetFilter()`](tree_collection/api/treecollection_resetfilter_method.md)
- [`getFilters()`](tree_collection/api/treecollection_getfilters_method.md)
- [`filter`](tree_collection/api/treecollection_filter_event.md)
- [`restoreOrder()`](tree_collection/api/treecollection_restoreorder_method.md)
