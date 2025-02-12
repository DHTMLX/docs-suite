---
sidebar_label: dragExpand
title: JavaScript Grid - dragExpand Config 
description: You can explore the dragExpand config of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# dragExpand

@short: Optional. Defines whether the collapsed rows should expand when you hover them over during drag-n-drop

:::note
The property works only for Grid with the `type: "tree"` configuration option
:::

@signature: {'dragExpand?: boolean;'}

@default: true

@example:
                
const grid = new dhx.Grid("grid_container", {
    type: "tree",
    columns: [
        // columns config
    ],
    dragItem: "row",
    dragExpand: false,
    data: dataset
});

@descr:

**Related sample:** [Grid (TreeGrid). Multiselection and drag-n-drop](https://snippet.dhtmlx.com/hwddi1ki)

**Related article:** [Drag-n-drop](grid/treegrid_mode.md#expanding-collapsed-rows-on-drag-n-drop)

**Related API:**

- [dragCopy](grid/api/grid_dragcopy_config.md)
- [dragItem](grid/api/grid_dragitem_config.md)
- [dragMode](grid/api/grid_dragmode_config.md)

@changelog: added in v8.1