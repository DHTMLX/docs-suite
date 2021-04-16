---
sidebar_label: afterExpand
title: afterExpand
---          

@short: fires after expanding a treegrid

@signature: afterExpand: (id: string | number) => void;
	
@params:
- id			string | number		the id of an expanded row

@example:
treeGrid.events.on("AfterExpand", function(rowId) {
    // your logic here
});

@template:	api_event
@descr:

@relatedsample: https://snippet.dhtmlx.com/sgwnxshe	TreeGrid. TreeGrid Events	

@changelog: added in v6.4
