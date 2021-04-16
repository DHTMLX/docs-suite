---
sidebar_label: beforeCollapse
title: beforeCollapse
---          

@short: fires before a cell is collapsed

@signature: beforeCollapse: (id: string) => boolean | void;

@params:
- id		string		the id of a cell

@example:
layout.events.on("BeforeCollapse", function(id){
	// your logic here
    return false;
});

@returns:
- result	boolean		false - to prevent a cell from being collapsed, otherwise true



@example:



@template: api_event
@descr:

@relatedsample: https://snippet.dhtmlx.com/fyxw0map	Layout. Events

@changelog:
added in v6.2

