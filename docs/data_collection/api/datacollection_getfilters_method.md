---
sidebar_label: getFilters()
title: JavaScript DataCollection - getFilters Method 
description: Learn how the getFilters method of DataCollection returns the filters applied to a flat collection, keyed by filter id, optionally limited to the permanent ones. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
---

# getFilters()

@short: returns an object with the applied filters 

#### Usage

~~~ts
interface IFilter {
    [filterId: string]: {
        rule: IFilterMode | IFilterComplexMode | IFilterCallback;
        config: IFilterConfig;
    };
}

getFilters(config?: { permanent?: boolean }): IFilter;
~~~

@params:
- `config?: object` - optional, an object with the following property:
    - `permanent?: boolean` - optional, *false* by default. Allows getting the list of permanent filters

@returns:
- `filters: IFilter` - an object with the applied filters, where the key is the id of a filter and the value is an object with the [`rule` and `config` properties](data_collection/api/datacollection_filter_method.md)

@example:
const filters = grid.data.getFilters();

@descr:

**Related API**:
- [`filter()`](data_collection/api/datacollection_filter_method.md)
- [`resetFilter()`](data_collection/api/datacollection_resetfilter_method.md)
