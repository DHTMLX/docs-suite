---
sidebar_label: afterCollapse
title: afterCollapse
---          

@short: fires after collapsing a treegrid

@signature: {'afterCollapse: (rowId: string | number) => void;'}

@params:
`rowId: string | number` - the id of a collapsed row

@example:
treeGrid.events.on("AfterCollapse", function(rowId) {
    // your logic here
});

@descr:

**Related sample**: [TreeGrid. TreeGrid Events](https://snippet.dhtmlx.com/sgwnxshe)

@changelog: added in v6.4
