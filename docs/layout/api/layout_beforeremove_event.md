---
sidebar_label: beforeRemove
title: beforeRemove
---          

@short: fires before removing a cell

@signature: {'beforeRemove: (id: string) => boolean | void;'}

@params:
- id		string		the id of a cell

@returns:
- result	boolean | void		false - to prevent removing of a cell, otherwise true

@example:
layout.events.on("BeforeRemove", function(id){
	// your logic here
    return false;
});

@descr:

**Related sample**: [Layout. Events](https://snippet.dhtmlx.com/fyxw0map)

@changelog:
added in v6.2
