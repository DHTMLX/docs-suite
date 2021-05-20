---
sidebar_label: beforeCollapse
title: beforeCollapse
---          

@short: fires before a cell is collapsed

@signature: {'beforeCollapse: (id: string) => boolean | void;'}

@params:
`id: string` - the id of a cell

@returns:
Return `false` to prevent a cell from being collapsed; otherwise, `true`.

@example:
layout.events.on("BeforeCollapse", function(id){
	// your logic here
    return false;
});

@example:

@descr:

**Related sample**: [Layout. Events](https://snippet.dhtmlx.com/fyxw0map)

@changelog:
added in v6.2
