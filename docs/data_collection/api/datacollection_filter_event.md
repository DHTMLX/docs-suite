---
sidebar_label: filter
title: JavaScript DataCollection - filter Event 
description: You can explore the filter event of DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
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