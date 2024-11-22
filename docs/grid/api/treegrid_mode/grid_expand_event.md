---
sidebar_label: expand
title: JavaScript Grid - expand Event 
description: You can explore the expand event of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# expand

@short: fires before collapsing a treegrid

:::note
The event works only for Grid with the `type: "tree"` configuration option
:::

@signature: {'expand: (rowId: string | number) => void;'}

@params:
The callback of the event is called with the following parameter:

- `rowId: string | number` - the id of an expanded row

@example:
const grid = new dhx.Grid("grid_container", {
    type: "tree",
    columns: [
       // columns config
    ],
    data: dataset,
}); 

grid.events.on("expand", (rowId) => {
    // your logic here
});

@descr: