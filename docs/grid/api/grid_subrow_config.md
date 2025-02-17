---
sidebar_label: subRow
title: JavaScript Grid - subRow Config 
description: You can explore the subRow config of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# subRow

@short: Optional. Defines the sub-row content for each row of the main Grid

:::note
Note that when the `subRow` config is used, Grid doesn't support the [TreeGrid mode](grid/treegrid_mode.md) and the [data grouping](grid/usage.md#grouping-data) functionality.
:::

@signature: {'subRow?: (row: IRow) => string | IViewConstructor;'}

@descr:

## Parameters

The `subRow` property is a callback function which is called with the row object as a parameter and returns HTML as string or a constructor of a subGrid (or any other nested Suite component).

### Example

- a sub-row with an HTML content

~~~jsx {8-10}
const grid = new dhx.Grid("grid_container", {
    columns: [
        { id: "zone_name", header: [{ text: "Zone name" }] },
        { id: "temperature", header: [{ text: "Temperature" }] },
        { id: "status", header: [{ text: "Status" }] },
    ],
    data: dataset,
    subRow: ({ zone_name }) => {
        return `<div>Details for ${zone_name}</div>`;
    },
});
~~~

- a sub-row with a subgrid

~~~jsx {7-16}
const grid = new dhx.Grid("grid_container", {
    columns: [
        { id: "zone_name", header: [{ text: "Zone name" }] },
        { id: "temperature", header: [{ text: "Temperature" }] },
    ],
    data: dataset,
    subRow: ({ data }) => {
        return new dhx.Grid(null, {
            columns: [
                { id: "animal_type", header: [{ text: "Animal type" }] },
                { id: "name", header: [{ text: "Name" }] },
            ],
            data,
            autoWidth: true,
        });
    },
});
~~~

**Related sample:** [Grid. Row expander. Full config](https://snippet.dhtmlx.com/xdw2037t)

**Related article:** [Row expander](grid/configuration.md#row-expander)

**Related API**: [subRowConfig](grid/api/grid_subrowconfig_config.md)

 