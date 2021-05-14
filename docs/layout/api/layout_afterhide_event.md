---
sidebar_label: afterHide
title: afterHide
---          

@short: fires after a cell is hidden

@signature: {'afterHide: (id: string) => void;'}

@params:
- id		string		the id of a cell

@example:
layout.events.on("AfterHide", function(id){
	// your logic here
});

@descr:

**Related sample**: [Layout. Events](https://snippet.dhtmlx.com/fyxw0map)

@changelog:
added in v6.2
