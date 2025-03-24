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

:::info
For Grid (in the TreeGrid mode) or Tree used in a sub-row it is important to specify the id of the root element to link data to the corresponding collection:  
- by using the [`rootParent`](grid/api/grid_rootparent_config.md) property for Grid in the TreeGrid mode 
- by using the [`rootId`](tree/api/tree_rootid_config.md) property for Tree 
:::

For example:

~~~jsx {8,16}
grid = new dhx.Grid("grid_container", {
    columns: [
        // columns config
    ],
    data: dataset,   
    subRow: (row) => { 
      subGrid = new dhx.Grid(null, {
            rootParent: "root", // Add the root id
            columns: [
                { id: "country", header: [{ text: "Country" }] },
                { id: "order_quantity", header: [{ text: "Orders" }], type: "number" },
                { id: "average_check", header: [{ text: "Avg check" }], type: "number" },
            ],
            data: row.data,
            autoWidth: true,
            type: "tree",
        });
        return subGrid;
    }, 
}); 
~~~

**Related sample:** [Grid. Row expander. Full config](https://snippet.dhtmlx.com/xdw2037t)

**Related article:** [Row expander](grid/configuration.md#row-expander)

**Related API**: [subRowConfig](grid/api/grid_subrowconfig_config.md)

 