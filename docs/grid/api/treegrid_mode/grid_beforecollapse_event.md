---
sidebar_label: beforeCollapse
title: JavaScript Grid - beforeCollapse Event 
description: You can explore the beforeCollapse event of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeCollapse

@short: fires before collapsing a treegrid

:::note
The event works only for Grid with the `type: "tree"` configuration option
:::

@signature: {'beforeCollapse: (rowId: string | number) => boolean | void;'}

@params:
The callback of the event is called with the following parameter:
- `rowId: string | number` - the id of a collapsed row

@returns:
Return `false` to block collapsing of a grid; otherwise, `true`.

@example:
const grid = new dhx.Grid("grid_container", {
    type: "tree",
    columns: [
       // columns config
    ],
    data: dataset,
});

grid.events.on("beforeCollapse", (rowId) => {
    // your logic here
    return false;
});

@descr:

@changelog: added in v6.4