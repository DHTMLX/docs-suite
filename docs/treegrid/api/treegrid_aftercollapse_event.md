---
sidebar_label: afterCollapse
title: afterCollapse
---          

@short: fires after collapsing a treegrid

@signature: afterCollapse: (rowId: string | number) => void;
	
@params:
- rowId			string,number		the id of a collapsed row

@example:
treeGrid.events.on("AfterCollapse", function(rowId) {
    // your logic here
});

@template:	api_event
@descr:

@relatedsample:
https://snippet.dhtmlx.com/sgwnxshe	TreeGrid. TreeGrid Events	

@changelog: added in v6.4
