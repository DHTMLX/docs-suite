---
sidebar_label: beforeExpand
title: beforeExpand
---          

@short: fires before expanding a treegrid

@signature: {'beforeExpand: (rowId: string | number) => boolean | void;'}

@params:
- rowId			string|number		the id of an expanded row

@returns:
- result		boolean		false - to block expanding a treegrid, otherwise true

@example:
treeGrid.events.on("BeforeExpand", function(rowId) {
    // your logic here
    return false;
});

@descr:

**Related sample**: [TreeGrid. TreeGrid Events	](https://snippet.dhtmlx.com/sgwnxshe)

@changelog: added in v6.4
