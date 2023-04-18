---
sidebar_label: dragExpand
title: JavaScript TreeGrid - dragExpand Config 
description: You can explore the dragExpand config of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# dragExpand

@short: Optional. Defines whether the collapsed rows should expand when you hover them over during drag-n-drop

@signature: {'dragExpand?: boolean;'}

@default: true

@example:
const treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [
        // columns config
    ],
    dragItem: "row",
    dragExpand: false,
    data: dataset
});

@descr:

**Related sample:** [TreeGrid. Multiselection and drag-n-drop](https://snippet.dhtmlx.com/hwddi1ki)

**Related article:** [Drag-n-drop](treegrid/configuration.md#drag-n-drop)

**Related API:**

- [dragCopy](treegrid/api/treegrid_dragcopy_config.md)
- [dragItem](treegrid/api/treegrid_dragitem_config.md)
- [dragMode](treegrid/api/treegrid_dragmode_config.md)

@changelog: added in v8.1
