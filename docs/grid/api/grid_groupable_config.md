---
sidebar_label: groupable
title: JavaScript Grid - groupable Config 
description: You can explore the groupable config of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# groupable

@short: Optional. Enables grouping data by values in all columns

:::tip pro version only
The described functionality requires PRO version of the DHTMLX Grid (or DHTMLX Suite) package.
:::

:::note
The `groupable` property works only with the [`group`](grid/api/grid_group_config.md) panel.
:::

@signature: {'groupable?: boolean;'}

@default: false

@example: 
const grid = new dhx.Grid("grid_container", {
    columns: [
        { width: 150, id: "country", header: [{ text: "Country" }] },
        { width: 150, id: "population", header: [{ text: "Population" }] },
        { width: 150, id: "destiny", header: [{ text: "Density (P/Km²)" }] },
        { width: 150, id: "area", header: [{ text: "Land Area (Km²)" }] },
    ],
    group: true,
    groupable: true,
    data: dataset
});


@descr:
**Note** that:

- You can drag column headers to the special grouping area - *group panel*. Grid will automatically create groups based on the values from these columns
- You can group data by several fields by moving a column header to the group panel
- You can also sort the grouped data in two ways: 
    - either by sorting the grouped field beforehand
    - or by clicking a group element on the group panel
- You can edit the nesting level of grouping by modifying the grouping order via either moving elements to the group panel or removing elements from the group panel

**Related article**: [Grouping data](grid/usage.md#grouping-data)

@changelog: added in v9.0
