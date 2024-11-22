---
sidebar_label: closable
title: JavaScript Grid - closable Config 
description: You can explore the closable config of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# closable

@short: Optional. Enables closing of all the elements of the group panel

:::tip pro version only
The described functionality requires PRO version of the DHTMLX Grid (or DHTMLX Suite) package.
:::

@signature: {'closable?: boolean;'}

@default: true

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
    closable: true,
    data: dataset
});

@descr:
The `closable` property works with the [`group`](grid/api/grid_group_config.md) panel.


**Related article**: [Making group panel elements closable](grid/usage.md#making-group-panel-elements-closable)

@changelog: added in v9.0