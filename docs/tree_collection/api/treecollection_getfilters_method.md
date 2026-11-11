---
sidebar_label: getFilters()
title: JavaScript TreeCollection - getFilters Method 
description: Learn how the getFilters method of TreeCollection returns the filters applied to a tree collection, keyed by filter id, with their rules and tree filtering configs. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
---

# getFilters()

@short: returns an object with the applied filters 

#### Usage

~~~ts
interface IFilter {
    [filterId: string]: {
        rule: IFilterMode | IFilterComplexMode | IFilterCallback;
        config: ITreeFilterConfig;
    };
}

getFilters(config?: { permanent?: boolean }): IFilter;
~~~

@params:
- `config?: object` - optional, an object with the following property:
    - `permanent?: boolean` - optional, *false* by default. Allows getting the list of permanent filters

@returns:
- `filters: IFilter` - an object with the applied filters, where the key is the id of a filter and the value is an object with the [`rule` and `config` properties](tree_collection/api/treecollection_filter_method.md)

@example:
const grid = new dhx.Grid("grid_container", {
    type: "tree",
    columns: [
        // columns config
    ],
    data: dataset,
});

const filters = grid.data.getFilters();

@descr:

**Related API**:
- [`filter()`](tree_collection/api/treecollection_filter_method.md)
- [`resetFilter()`](tree_collection/api/treecollection_resetfilter_method.md)
