---
sidebar_label: filter
title: JavaScript DataCollection - filter Event 
description: Learn when the filter event of DataCollection fires after a flat collection is filtered, and how the handler receives all the active filters. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
---

# filter

@short: fires after the collection is filtered

#### Usage

~~~ts
interface IFilter {
    [filterId: string]: {
        rule: IFilterMode | IFilterComplexMode | IFilterCallback;
        config: IFilterConfig;
    };
}

filter: (filter?: IFilter) => void;
~~~

@params:
- `filter?: IFilter` - optional, an object with all the active filters, where
    - the key is the id of an active filter
    - the value is an object with the `rule` and `config` properties passed to the [`filter()`](data_collection/api/datacollection_filter_method.md) method

@example:
component.data.events.on("filter", function(filter) {
    console.log("Items were filtered");
});

@descr:

**Related sample**: [DataCollection. Filter event](https://snippet.dhtmlx.com/yerog2b5)

**Related API**:
- [`filter()`](data_collection/api/datacollection_filter_method.md)
- [`resetFilter()`](data_collection/api/datacollection_resetfilter_method.md)
- [`getFilters()`](data_collection/api/datacollection_getfilters_method.md)
