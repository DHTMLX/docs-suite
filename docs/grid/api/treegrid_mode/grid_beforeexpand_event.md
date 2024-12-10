---
sidebar_label: beforeExpand
title: JavaScript Grid - beforeExpand Event 
description: You can explore the beforeExpand event of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeExpand

@short: fires before expanding Grid in the TreeGrid mode

:::note
The event works only for Grid with the `type: "tree"` configuration option
:::

@signature: {'beforeExpand: (rowId: string | number) => boolean | void;'}

@params:
The callback of the event is called with the following parameters:

- `rowId: string | number` - the id of an expanded row

@returns:
Return `false` to block expanding of a grid; otherwise, `true`.

@example:
const grid = new dhx.Grid("grid_container", {
    type: "tree",
    columns: [
       // columns config
    ],
    data: dataset,
});

grid.events.on("beforeExpand", (rowId) => {
    // your logic here
    return false;
});

@descr:



@changelog: added in v6.4
