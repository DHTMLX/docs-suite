---
sidebar_label: beforeCollapse
title: JavaScript TreeGrid - beforeCollapse Event 
hide_title: true
description: You can explore the beforeCollapse event of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# beforeCollapse

@short: fires before collapsing a treegrid

@signature: {'beforeCollapse: (id: string) => boolean | void;'}

@params:
`id: string` - the id of a collapsed row

@returns:
Return `false` to block collapsing a treegrid; otherwise, `true`.

@example:
treeGrid.events.on("BeforeCollapse", function(rowId) {
    // your logic here
    return false;
});

@descr:

**Related sample**: [TreeGrid. TreeGrid Events	](https://snippet.dhtmlx.com/sgwnxshe)

@changelog: added in v6.4
