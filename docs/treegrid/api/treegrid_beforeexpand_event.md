---
sidebar_label: beforeExpand
title: JavaScript TreeGrid - beforeExpand Event 
description: You can explore the beforeExpand event of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# beforeExpand

@short: fires before expanding a treegrid

@signature: {'beforeExpand: (rowId: string | number) => boolean | void;'}

@params:
`rowId: string | number` - the id of an expanded row

@returns:
Return `false` to block expanding a treegrid; otherwise, `true`.

@example:
treeGrid.events.on("BeforeExpand", function(rowId) {
    // your logic here
    return false;
});

@descr:

**Related sample**: [TreeGrid. TreeGrid Events	](https://snippet.dhtmlx.com/sgwnxshe)

@changelog: added in v6.4
