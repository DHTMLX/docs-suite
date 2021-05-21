---
sidebar_label: beforeAdd
title: beforeAdd
---          

@short: fires before adding a cell

@signature: {'beforeAdd: (id: string) => boolean | void;'}

@params:
`id: string` - the id of a cell

@returns:
Return `false` to prevent adding of a cell; otherwise, `true`.

@example:
layout.events.on("BeforeAdd", function(id){
	// your logic here
    return false;
});

@descr:

**Related sample**: [Layout. Events](https://snippet.dhtmlx.com/fyxw0map)

@changelog:
added in v6.2
