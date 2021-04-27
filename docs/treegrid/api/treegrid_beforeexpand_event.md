---
sidebar_label: beforeExpand
title: beforeExpand
---          

@short: fires before expanding a treegrid
todoanton string | number ?
@signature: {'beforeExpand: (id: string) => boolean | void;'}
	
@params:
- rowId			string,number		the id of an expanded row

@returns:
- result		boolean		false - to block expanding a treegrid, otherwise true

@example:
treeGrid.events.on("BeforeExpand", function(rowId) {
    // your logic here
    return false;
});

@template:	api_event
@descr:

@relatedsample:
https://snippet.dhtmlx.com/sgwnxshe	TreeGrid. TreeGrid Events	

@changelog: added in v6.4
