---
sidebar_label: filter
title: JavaScript TreeCollection - filter Event 
description: You can explore the filter event of TreeCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# filter

@short: fires after filtering a tree collection 

@signature: {'filter: (filter?: object) => void;'}

@params:
- `object: { [key: string]: object }` - an object with all the active filters, where
    - `key: string` - the id of an active filter
    - `object` - an object with the [rule](tree_collection/api/treecollection_filter_method.md) and [config](tree_collection/api/treecollection_filter_method.md) properties

@example:
component.data.events.on("filter", function(filter) {
    console.log("Items were filtered");
});

@descr: