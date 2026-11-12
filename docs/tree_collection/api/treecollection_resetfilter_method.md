---
sidebar_label: resetFilter()
title: JavaScript TreeCollection - resetFilter Method 
description: Learn how the resetFilter method of TreeCollection removes the filters applied to a tree collection, either one filter by its id or all of them, permanent ones included. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
---

# resetFilter()

@short: resets the active filters

#### Usage

~~~ts
interface IResetFilterConfig {
    id?: string;
    permanent?: boolean;
}

resetFilter(config?: IResetFilterConfig, silent?: boolean): boolean;
~~~

@params:
- `config?: IResetFilterConfig` - optional, specifies the parameters of resetting the active filters. If the config isn't specified or it is empty, all the filters except for those that have the `permanent` property in the configuration object will be reset. Can contain the following properties:
    - `id?: string` - optional, the id of the filter to reset
    - `permanent?: boolean` - optional, *true* to reset all the active filters, including those that have the `permanent:true` property in their config
- `silent?: boolean` - optional, if set to *true*, the method will be called without triggering events, *false* by default

:::info
Note that after calling the method with the `silent:true` parameter, you may need to repaint the component that uses the collection with its `paint()` method.
:::

@returns:
- `result: boolean` - *true*, if all the filters, including the permanent ones, have been reset; otherwise *false*

@example:

// resets all the filters, except for those that have the "permanent" property in the config
component.data.resetFilter();

// resets all the filters, including those that have the "permanent" property in the config
component.data.resetFilter({ permanent: true });

// resets the filter with the specified id
component.data.resetFilter({ id: "filter_id" });

@descr:

**Related API**:
- [`filter()`](tree_collection/api/treecollection_filter_method.md)
- [`getFilters()`](tree_collection/api/treecollection_getfilters_method.md)
- [`filter`](tree_collection/api/treecollection_filter_event.md)
