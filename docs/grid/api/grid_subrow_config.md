---
sidebar_label: subRow
title: JavaScript Grid - subRow Config 
description: You can explore the subRow config of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# subRow

@short: Optional. Defines the subrow content for each row of the main Grid

:::note
- When the `subRow` config is used, Grid doesn't support the [TreeGrid mode](grid/treegrid_mode.md).
- When the `subRow` config is used, Grid doesn't support the [data grouping](grid/usage.md/#grouping-data) functionality.
::: 

@signature: {'subRow?: (row: IRow) => string | IViewConstructor;'}

@descr:

### Example

- a subrow with an HTML content

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

- a subrow with a subGrid

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

The `subRow` property is a callback function which is called with the id of the row as a parameter and returns an HTML string or a constructor of a subGrid or any other nested Suite component. 