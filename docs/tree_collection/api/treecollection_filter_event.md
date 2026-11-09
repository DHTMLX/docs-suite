---
sidebar_label: filter
title: JavaScript TreeCollection - filter Event 
description: You can explore the filter event of TreeCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# filter

@short: fires after filtering a tree collection 

#### Usage

~~~ts
interface IFilter {
    [filterId: string]: {
        rule: IFilterMode | IFilterCallback;
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
component.data.events.on("filter", function(filter) {
    console.log("Items were filtered");
});

@descr: