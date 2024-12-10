---
sidebar_label: afterCollapse
title: JavaScript Grid - afterCollapse Event 
description: You can explore the afterCollapse event of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterCollapse

@short: fires after collapsing Grid in the TreeGrid mode

:::note
The event works only for Grid with the `type: "tree"` configuration option
:::

@signature: {'afterCollapse: (rowId: string | number) => void;'}

@params:
The callback of the event is called with the following parameter:
- `rowId: string | number` - the id of a collapsed row

@example:
const grid = new dhx.Grid("grid_container", {
    type: "tree",
    columns: [
       // columns config
    ],
    data: dataset,
});

grid.events.on("afterCollapse", (rowId) => {
    // your logic here
});

@descr:


@changelog: added in v6.4