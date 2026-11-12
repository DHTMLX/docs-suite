---
sidebar_label: ungroup()
title: JavaScript DataCollection - ungroup Method 
description: Learn how the ungroup method of DataCollection removes the grouping applied to the data of a collection and brings back the plain list of items. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
---

# ungroup()

@short: resets the applied data grouping

#### Usage

~~~ts
ungroup(): void;
~~~

@example:
const grid = new dhx.Grid("grid_container", {
    columns: [
        { id: "salary", header: [{ text: "Salary" }] },
        { id: "experience", header: [{ text: "Experience (years)" }] },
        { id: "city", header: [{ text: "City" }] }
    ],
    group: true,
    groupable: true,
    data: dataset
});

// grouping grid data
grid.data.group([
    // grouping logic
]);

// ungrouping grid data
grid.data.ungroup();

@descr:

**Related API**:
- [`group()`](data_collection/api/datacollection_group_method.md)
- [`isGrouped()`](data_collection/api/datacollection_isgrouped_method.md)
- [`beforeUnGroup`](data_collection/api/datacollection_beforeungroup_event.md)
- [`afterUnGroup`](data_collection/api/datacollection_afterungroup_event.md)

@changelog: added in v9.0