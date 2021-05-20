---
sidebar_label: afterCollapse
title: afterCollapse
---          

@short: fires after a cell is collapsed

@signature: {'afterCollapse: (id: string) => void;'}

@params:
`id: string` - the id of a cell

@example:
layout.events.on("AfterCollapse", function(id){
	// your logic here
});

@descr:

**Related sample**: [Layout. Events](https://snippet.dhtmlx.com/fyxw0map)

@changelog:
added in v6.2
