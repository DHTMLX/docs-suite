---
sidebar_label: afterCollapse
title: JavaScript TreeGrid - afterCollapse Event 
description: You can explore the afterCollapse event of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# afterCollapse

@short: fires after collapsing a treegrid

@signature: {'afterCollapse: (rowId: Id) => void;'}

@params:
`rowId: string | number` - the id of a collapsed row

@example:
treeGrid.events.on("afterCollapse", function(rowId) {
    // your logic here
});

@descr:

**Related sample**: [TreeGrid. Events](https://snippet.dhtmlx.com/sgwnxshe)

@changelog: added in v6.4
