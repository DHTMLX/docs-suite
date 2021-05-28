---
sidebar_label: afterExpand
title: JavaScript TreeGrid - afterExpand Event 
hide_title: true
description: You can explore the afterExpand event of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# afterExpand

@short: fires after expanding a treegrid

@signature: {'afterExpand: (id: string) => void;'}

@params:
`id: string` - the id of an expanded row

@example:
treeGrid.events.on("AfterExpand", function(rowId) {
    // your logic here
});

@descr:

**Related sample**: [TreeGrid. TreeGrid Events](https://snippet.dhtmlx.com/sgwnxshe)

@changelog: added in v6.4
