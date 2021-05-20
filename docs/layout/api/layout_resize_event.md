---
sidebar_label: resize
title: resize
---          

@short: fires on resizing a cell

@signature: {'resize: (id: string) => void;'}

@params:
`id: string` - the id of a cell

@example:
layout.events.on("resize", function(id){
	// your logic here
});

@descr:

**Related sample**: [Layout. Events](https://snippet.dhtmlx.com/fyxw0map)

@changelog:
added in v6.2
