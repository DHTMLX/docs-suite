---
sidebar_label: afterExpand
title: JavaScript Grid - afterExpand Event 
description: You can explore the afterExpand event of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterExpand

@short: fires after expanding a tree node

:::note
The event works:
- for Grid in the default mode with the `subRow` configuration option
- for Grid in the TreeGrid mode (with the `type: "tree"` configuration option)
:::

@signature: {'afterExpand: (rowId: string | number) => void;'}

@params:
The callback of the event is called with the following parameter:

- `rowId: string | number` - the id of an expanded row

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

grid1.events.on("afterExpand", (rowId) => {
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

grid2.events.on("afterExpand", (rowId) => {
    // your logic here
});
~~~


@changelog: added in v6.4
