---
sidebar_label: beforeResizeStart
title: beforeResizeStart
---          

@short: fires before resizing of a cell has started

@signature: beforeResizeStart: (id: string) => boolean | void;

@params:
- id		string		the id of a cell


@example:
layout.events.on("BeforeResizeStart", function(id){
	// your logic here
    return false;
});

@returns:
- result	boolean		false - to prevent resizing of a cell, otherwise true



@template: api_event
@descr:

@relatedsample: https://snippet.dhtmlx.com/fyxw0map	Layout. Events

@changelog:
added in v6.2

