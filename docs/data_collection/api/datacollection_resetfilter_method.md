---
sidebar_label: resetFilter()
title: JavaScript DataCollection - resetFilter Method 
description: You can explore the resetFilter method of DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# resetFilter()

@short: resets the active filters

@signature: {'resetFilter(config?: object, silent?: boolean): boolean;'}

@params:
- `config?: object` - optional, specifies the parameters of resetting the active filters. If the config isn't specified or it is empty, all the filters except for those that have the `permanent` property in the configuration object will be reset. Can contain the following properties:
    - `id?: string` - optional, the id of the filter to reset
    - `permanent?: boolean` - optional, *true* to reset all the active filters, including those that have the `permanent:true` property in their config
- `silent?: boolean` - optional, if set to *true*, the method will be called without triggering events, *false* by default

:::info
Note that after calling the method with the `silent:true` parameter, you may need to repaint the component with the `paint()` method.
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

When data is [grouped](data_collection/api/datacollection_group_method.md), the [counters and aggregated values](data_collection/api/datacollection_group_method.md#group-counters-and-aggregates) of the groups are recalculated over the restored data, and the groups that were left with no items by the filter are brought back.

**Related sample**: 
- [Data. ResetFilter](https://snippet.dhtmlx.com/jg8wxfvc)
- [Grid. ResetFilter](https://snippet.dhtmlx.com/15trblk2)