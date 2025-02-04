---
sidebar_label: beforeExpand
title: JavaScript Grid - beforeExpand Event 
description: You can explore the beforeExpand event of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeExpand

@short: fires before expanding a row that contains child rows

:::note
The event works:
- for Grid in the default mode with the `subRow` configuration option
- for Grid in the TreeGrid mode (with the `type: "tree"` configuration option)
:::

@signature: {'beforeExpand: (rowId: string | number) => boolean | void;'}

@params:
The callback of the event is called with the following parameter:

- `rowId: string | number` - the id of an expanded row

@returns:
Return `false` to block expanding of a grid; otherwise, `true`.

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

grid1.events.on("beforeExpand", (rowId) => {
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

grid2.events.on("beforeExpand", (rowId) => {
    // your logic here
    return false;
});
~~~

@changelog: added in v6.4
