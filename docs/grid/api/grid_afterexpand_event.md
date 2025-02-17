---
sidebar_label: afterExpand
title: JavaScript Grid - afterExpand Event 
description: You can explore the afterExpand event of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterExpand

@short: fires after expanding a row that contains child rows

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

~~~jsx {2,9-11}
const grid = new dhx.Grid("grid_container", {
    type: "tree",
    columns: [
       // columns config
    ],
    data: dataset,
});

grid.events.on("afterExpand", (rowId) => {
    // your logic here
});
~~~


@changelog: added in v6.4
