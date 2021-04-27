---
sidebar_label: beforeCollapse
title: beforeCollapse
---          

@short: fires before collapsing a treegrid
todoanton rowId ??  string | number ?? result		boolean  ??
@signature: {'beforeCollapse: (id: string) => boolean | void;'}
	
@params:
- rowId			string | number		the id of a collapsed row

@returns:
- result		boolean		false - to block collapsing a treegrid, otherwise true

@example:
treeGrid.events.on("BeforeCollapse", function(rowId) {
    // your logic here
    return false;
});

@template:	api_event
@descr:

@relatedsample:
https://snippet.dhtmlx.com/sgwnxshe	TreeGrid. TreeGrid Events	

@changelog: added in v6.4
