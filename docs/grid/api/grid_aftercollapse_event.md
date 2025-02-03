---
sidebar_label: afterCollapse
title: JavaScript Grid - afterCollapse Event 
description: You can explore the afterCollapse event of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterCollapse

@short: fires after collapsing a tree node

:::note
The event works:
- for Grid in the default mode with the `subRow` configuration option
- for Grid in the TreeGrid mode (with the `type: "tree"` configuration option)
:::

@signature: {'afterCollapse: (rowId: string | number) => void;'}

@params:
The callback of the event is called with the following parameter:
- `rowId: string | number` - the id of a collapsed row

@descr:

### Example

~~~jsx {7-9,12-14}
// the default Grid mode with the `subRow` config
const grid1 = new dhx.Grid("grid_container", {
    columns: [
       // columns config
    ],
    data: dataset,
    subRow: () => { 
      // the callback function logic 
    }
});

grid1.events.on("afterCollapse", (rowId) => {
    // your logic here
});
~~~

~~~jsx {3,10-12}
// the TreeGrid mode of Grid
const grid2 = new dhx.Grid("grid_container", {
    type: "tree",
    columns: [
       // columns config
    ],
    data: dataset,
});

grid2.events.on("afterCollapse", (rowId) => {
    // your logic here
});
~~~



@changelog: added in v6.4