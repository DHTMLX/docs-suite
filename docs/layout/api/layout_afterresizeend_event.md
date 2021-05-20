---
sidebar_label: afterResizeEnd
title: afterResizeEnd
---          

@short: fires after resizing of a cell is ended

@signature: {'afterResizeEnd: (id: string) => void;'}

@params:
`id: string` - the id of a cell

@example:
layout.events.on("AfterResizeEnd", function(id){
	// your logic here
});

@descr:

**Related sample**: [Layout. Events](https://snippet.dhtmlx.com/fyxw0map)

@changelog:
added in v6.2
