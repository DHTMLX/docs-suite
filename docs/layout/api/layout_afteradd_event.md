---
sidebar_label: afterAdd
title: afterAdd
---          

@short: fires after adding a new cell

@signature: {'afterAdd: (id: string) => void;'}

@params:
- id		string		the id of a cell

@example:
layout.events.on("AfterAdd", function(id){
	// your logic here
});

@descr:

**Related sample**: [Layout. Events](https://snippet.dhtmlx.com/fyxw0map)

@changelog:
added in v6.2
