---
sidebar_label: beforeHide
title: beforeHide
---          

@short: fires before a cell is hidden

@signature: {'beforeHide: (id: string) => boolean | void;'}

@params:
- id		string		the id of a cell

@returns:
- result	boolean | void		false - to prevent a cell from being hidden, otherwise true

@example:
layout.events.on("BeforeHide", function(id){
	// your logic here
    return false;
});

@descr:

**Related sample**: [Layout. Events](https://snippet.dhtmlx.com/fyxw0map)

@changelog:
added in v6.2
