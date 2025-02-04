---
sidebar_label: beforeCollapse
title: JavaScript Grid - beforeCollapse Event 
description: You can explore the beforeCollapse event of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeCollapse

@short: fires before collapsing a row that contains child rows

:::note
The event works:
- for Grid in the default mode with the `subRow` configuration option
- for Grid in the TreeGrid mode (with the `type: "tree"` configuration option)
:::

@signature: {'beforeCollapse: (rowId: string | number) => boolean | void;'}

@params:
The callback of the event is called with the following parameter:
- `rowId: string | number` - the id of a collapsed row

@returns:
Return `false` to block collapsing of a grid; otherwise, `true`.

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

grid1.events.on("beforeCollapse", (rowId) => {
    // your logic here
});
~~~

~~~jsx {3,10-13}
// the TreeGrid mode of Grid
const grid2 = new dhx.Grid("grid_container", {
    type: "tree",
    columns: [
       // columns config
    ],
    data: dataset,
});

grid2.events.on("beforeCollapse", (rowId) => {
    // your logic here
    return false;
});
~~~


@changelog: added in v6.4
