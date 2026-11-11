---
sidebar_label: filter
title: JavaScript TreeCollection - filter Event 
description: Learn when the filter event of TreeCollection fires after a tree collection is filtered, and how the handler receives all the active filters with their configs. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
---

# filter

@short: fires after the collection is filtered

#### Usage

~~~ts
interface IFilter {
    [filterId: string]: {
        rule: IFilterMode | IFilterComplexMode | IFilterCallback;
        config: ITreeFilterConfig;
    };
}

filter: (filter?: IFilter) => void;
~~~

@params:
- `filter?: IFilter` - optional, an object with all the active filters, where
    - the key is the id of an active filter
    - the value is an object with the `rule` and `config` properties passed to the [`filter()`](tree_collection/api/treecollection_filter_method.md) method

@example:
component.data.events.on("filter", (filter) => {
    console.log("Items were filtered");
});

@descr:

**Related API**:
- [`filter()`](tree_collection/api/treecollection_filter_method.md)
- [`resetFilter()`](tree_collection/api/treecollection_resetfilter_method.md)
- [`getFilters()`](tree_collection/api/treecollection_getfilters_method.md)
