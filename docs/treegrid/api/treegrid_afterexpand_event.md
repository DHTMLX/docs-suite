---
sidebar_label: afterExpand
title: afterExpand
---          

@short: fires after expanding a treegrid
todoanton any приходит из d.ts
@signature: {'afterExpand: (id: string) => any;'}
	
@params:
- id			string | number		the id of an expanded row

@example:
treeGrid.events.on("AfterExpand", function(rowId) {
    // your logic here
});

@template:	api_event
@descr:

**Related sample**: [TreeGrid. TreeGrid Events	](https://snippet.dhtmlx.com/sgwnxshe)

@changelog: added in v6.4
