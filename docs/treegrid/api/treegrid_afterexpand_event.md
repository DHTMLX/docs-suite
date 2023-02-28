---
sidebar_label: afterExpand
title: JavaScript TreeGrid - afterExpand Event 
description: You can explore the afterExpand event of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterExpand

@short: fires after expanding a treegrid

@signature: {'afterExpand: (rowId: Id) => void;'}

@params:
- `rowId: string | number` - the id of an expanded row

@example:
treeGrid.events.on("afterExpand", function(rowId) {
    // your logic here
});

@descr:

**Related sample**: [TreeGrid. Events](https://snippet.dhtmlx.com/sgwnxshe)

@changelog: added in v6.4
