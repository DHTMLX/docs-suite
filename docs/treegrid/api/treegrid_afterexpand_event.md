---
sidebar_label: afterExpand
title: afterExpand
---          

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
