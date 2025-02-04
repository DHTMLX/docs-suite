---
sidebar_label: collapse()
title: JavaScript Grid - collapse Method 
description: You can explore the collapse method of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# collapse()

@short: collapses a row that contains child rows by id

:::note
The method works:
- for Grid in the default mode with the `subRow` configuration option
- for Grid in the TreeGrid mode (with the `type: "tree"` configuration option)
:::

@signature: {'collapse(id: string | number): void;'}

@params:
- `id: string | number` - the id of a row to collapse

### Example

~~~jsx {7-9,14}
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

// getting the id of the first row
var id = grid1.data.getId(0);
grid1.collapse(id);
~~~

~~~jsx {3,12}
// the TreeGrid mode of Grid
const grid2 = new dhx.Grid("grid_container", {
    type: "tree",
    columns: [
       // columns config
    ],
    data: dataset,
});

// getting the id of the first row
var id = grid2.data.getId(0);
grid2.collapse(id);
~~~

@descr:



