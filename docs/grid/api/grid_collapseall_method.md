---
sidebar_label: collapseAll()
title: JavaScript Grid - collapseAll Method 
description: You can explore the collapseAll method of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# collapseAll()

@short: collapses all expanded rows that contain child rows

:::note
The method works:
- for Grid in the default mode with the `subRow` configuration option
- for Grid in the TreeGrid mode (with the `type: "tree"` configuration option)
:::

@signature: {'collapseAll(): void;'}

@descr:

### Example

~~~jsx {7-9,12}
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

grid1.collapseAll();
~~~

~~~jsx {3,10}
// the TreeGrid mode of Grid
const grid2 = new dhx.Grid("grid_container", {
    type: "tree",
    columns: [
       // columns config
    ],
    data: dataset,
});

grid2.collapseAll();
~~~


@changelog: added in v6.3